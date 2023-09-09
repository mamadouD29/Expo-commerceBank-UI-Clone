import {
	Linking,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";
import { AccAction, CmrAdvance, Dot } from "../../components/ui/account";
import { NavigationAndRouteProps } from "../../services/utils/UserPreferenceContext";

const acc = [
	{
		id: 1,
		title: "Open A New Account",
		subTitle: "Find the account that's protect for you",
		emicon: "Add",
		emiconTwo: "",
		size: 32,
	},
	{
		id: 2,
		title: "Aubscribe to ID theft Services",
		subTitle: "24/7 live support to reclaim your identity",
		emicon: "Shield",
		emiconTwo: "",
		size: 32,
	},
	{
		id: 3,
		title: "My Offers",
		subTitle: "Offers customized just for you",
		emicon: "Money",
		emiconTwo: "Hand",
		size: 20,
	},
];
export function AccountScreen({ navigation }: NavigationAndRouteProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();

	const learnMore = () => {};

	const handlePress = (id: number) => {
		if (id === 1) {
			navigation.navigate("AccountDetailsScreen");
		}
		if (id === 2) {
			navigation.navigate("TheftServicesScreen");
			return;
		}
		if (id === 3) {
			Linking.openURL("https://www.commercebank.com/");
		}
	};

	return (
		<ScrollView
			style={[globalstyles.container, styles.container, themeContainer]}
		>
			<View style={[styles.balCtr, themeBcolor]}>
				<Pressable
					onPress={() => handlePress(1)}
					style={({ pressed }) => [
						themeContent,
						themeBcolor,
						{ padding: 10 },
					]}
				>
					<Text style={[themeText, globalstyles.txt]}>
						CommerceBasic Saving
						<Dot hCtr={true} bg={globalstyles.txt.color} />
						7777
					</Text>
					<View
						style={[
							globalstyles.hCtr,
							{ justifyContent: "space-between" },
						]}
					>
						<View
							style={[
								globalstyles.hCtr,
								{ justifyContent: "flex-start" },
							]}
						>
							<Dot hCtr={false} />
							<Text style={[themeText, styles.bal]}>
								${"20,000"}
							</Text>
						</View>
						<Dot hCtr={false} />
					</View>
					<Text style={[themeText]}>Available Balance</Text>
				</Pressable>
			</View>
			<View style={[themeContainer, styles.ctr, themeBcolor]}>
				<CmrAdvance learnMore={learnMore} />
				{acc &&
					acc.map(
						(item: {
							title: string;
							subTitle: string;
							id: number;
							emicon: string;
							emiconTwo: string;
							size: number;
						}) => (
							<AccAction
								key={item.id}
								title={item.title}
								emicon={item.emicon}
								subTitle={item.subTitle}
								emiconTwo={item.emiconTwo}
								size={item.size}
								onPress={handlePress}
								id={item.id}
							/>
						),
					)}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
	balCtr: {
		borderBottomWidth: 1,
	},
	bal: {
		fontSize: 45,
	},
	ctr: {
		borderBottomWidth: 1,
		padding: 10,
		gap: 20,
		paddingBottom: 20,
	},
});
