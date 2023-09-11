import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Modal,
} from "react-native";
import React, { useReducer, useState } from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import {
	BalanceCard,
	CmrAdvance,
	OptionCard,
	ReferFriend,
	SettingsButton,
	SettingsModal,
} from "../../../components/ui/account";
import { setStringAsync } from "expo-clipboard";
import { CopiedModal, EmIcons } from "../../../components/shared";

const initailizedView = {
	documents: false,
	phone: false,
	pound: false,
	credit: false,
	pen: false,
	checks: false,
	document: false,
	users: false,
};

const reducer = (state: any, action: { type: string }) => {
	switch (action.type) {
		case "documents": {
			return {
				...state,
				documents: !state.documents,
			};
		}
		case "phone": {
			return { ...state, phone: !state.phone };
		}
		case "pound": {
			return { ...state, pound: !state.pound };
		}
		case "credit": {
			return { ...state, credit: !state.credit };
		}
		case "pen": {
			return { ...state, pen: !state.pen };
		}

		case "checks": {
			return { ...state, checks: !state.checks };
		}

		case "document": {
			return { ...state, document: !state.document };
		}

		case "users": {
			return { ...state, users: !state.users };
		}

		default: {
			return state;
		}
	}
};

export function AccountDetailsScreen() {
	const [state, dispatch] = useReducer(reducer, initailizedView);
	const { themeText } = themeMode();
	const { themeContainer } = themeMode();
	const [seeMoreLess, setSeeMoreLess] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [settings, toggleSettings] = useState<boolean>(true);

	const seeMoreLessHandler = () => {
		setSeeMoreLess((prev) => !prev);
	};

	const learnMore = () => {};
	const copyToClipboard = async (txt: string) => {
		await setStringAsync(txt);
		setIsVisible(true);
		setTimeout(() => {
			setIsVisible(false);
		}, 800);
	};

	const toggleSettingHandler = () => {
		toggleSettings((prev) => !prev);
	};

	const viewHandler = (actionType: string) => {
		dispatch({ type: actionType });
	};
	return (
		<>
			<ScrollView
				style={[
					globalstyles.container,
					themeContainer,
					styles.container,
				]}
				contentContainerStyle={[{ gap: 10, paddingBottom: 50 }]}
			>
				<Modal visible={settings}>
					<SettingsModal name="Mamadou" onPress={()=>{}}/>
					<SettingsButton
						settings={settings}
						toggleSettingHandler={toggleSettingHandler}
					/>
				</Modal>

				<CopiedModal isVisible={isVisible} />
				<BalanceCard
					seeMoreLess={seeMoreLess}
					seeMoreLessHandler={seeMoreLessHandler}
				/>
				<OptionCard
					emicon="Documents"
					title="Statements"
					viewHandler={viewHandler}
					view={state.documents}
					dropDown={false}
					id={1}
					display="View"
				/>
				<OptionCard
					emicon="Phone"
					title="Mobile Deposits"
					viewHandler={viewHandler}
					view={state.phone}
					dropDown={false}
					id={2}
					display="View"
				/>
				<CmrAdvance learnMore={learnMore} end={true} br={true} />
				<OptionCard
					emicon="Pound"
					title="Routing & Accont Number"
					dropDown={true}
					viewHandler={viewHandler}
					id={3}
					display="Show"
					view={state.pound}
					routing="101000019"
					account="10000001"
					txtOne="Routing Number"
					txtTwo="Account Number"
					action="Copy"
					copyToClipboard={copyToClipboard}
				/>
				<OptionCard
					emicon="Credit"
					title="Manage Card(s)"
					dropDown={false}
					viewHandler={viewHandler}
					id={4}
					display="Manage"
				/>
				<OptionCard
					emicon="Pen"
					title="Account Nikname"
					dropDown={false}
					viewHandler={viewHandler}
					id={5}
					display="Edit"
				/>
				<OptionCard
					emicon="Checks"
					title="Reorder Checks"
					dropDown={false}
					viewHandler={viewHandler}
					id={6}
					display="Order"
				/>
				<OptionCard
					emicon="Documents"
					title="Account Documents"
					dropDown={false}
					viewHandler={viewHandler}
					id={7}
					display="Show"
				/>
				<OptionCard
					emicon="Users"
					title="Refer a Friend"
					dropDown={false}
					viewHandler={viewHandler}
					id={8}
					display="Show"
				/>
				<ReferFriend />
			</ScrollView>
			<SettingsButton
				settings={settings}
				toggleSettingHandler={toggleSettingHandler}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 0,
		gap: 10,
	},
	btnCtr: {
		width: 80,
		height: 80,
		position: "absolute",
		left: "75%",
		top: "80%",
		borderRadius: 50,
	},
	btn: {
		width: 100,
		flexGrow: 1,
		flexShrink: 1,
	},
});
