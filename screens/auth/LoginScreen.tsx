import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";
import {
	ActionButton,
	CredentialInput,
	InstantBalance,
	LoginPreferences,
} from "../../components/ui/Login";
import { StandardButton } from "../../components/shared";
import * as Linking from "expo-linking";
import { NavigationAndRouteProps } from "../../services/utils/UserPreferenceContext";

const priStmt =
	"https://www.commercebank.com/security-center/privacy-statement";

export default function LoginScreen({ navigation }: NavigationAndRouteProps) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, toggleRememberMe] = useState<boolean>(false);
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	const [instantBal, setInstantBal] = useState<boolean>(false);

	const userFogot = () => {};

	const rememberMeHandler = () => {
		toggleRememberMe((prev) => !prev);
	};

	const closeInstantBal = () => {
		setInstantBal((prev) => !prev);
	};
	const displayCustomerSupport = () => {
		navigation.navigate("SupportScreen");
	};

	const bioLoginHandler = () => {};

	return (
		<View
			style={[globalstyles.container, themeContainer, styles.container]}
		>
			<InstantBalance
				isVisible={instantBal}
				closeInstantBal={closeInstantBal}
			/>
			<View style={[themeContent, styles.main]}>
				<View
					style={[
						globalstyles.hCtr,
						{ justifyContent: "flex-start" },
					]}
				>
					<Image
						source={require("../../assets/Img/cmBankLogo.png")}
						style={[styles.logo]}
					/>
				</View>

				<CredentialInput
					emicon="User"
					input={username}
					setInput={setUsername}
					isPass={false}
					forgotHandler={userFogot}
					placeholder="Username"
					autoFocus={true}
				/>
				<CredentialInput
					emicon="Password"
					input={password}
					setInput={setPassword}
					isPass={true}
					forgotHandler={userFogot}
					placeholder="Password"
				/>

				<LoginPreferences
					rememberMe={rememberMe}
					rememberMeHandler={rememberMeHandler}
					bioMetricsHandler={bioLoginHandler}
				/>

				<StandardButton
					title="Login"
					bg={themeContainer.backgroundColor}
					onPress={() => {}}
				/>
				<View style={[globalstyles.hCtr]}>
					<Text
						style={[globalstyles.txt]}
						onPress={() => Linking.openURL(priStmt)}
					>
						Privacy Statement
					</Text>
				</View>
			</View>

			<View style={[]}>
				<ActionButton
					displayInstantBal={closeInstantBal}
					displayCustomerSupport={displayCustomerSupport}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		justifyContent: "space-between",
	},
	devCtr: {
		width: 200,
		flexGrow: 1,
	},
	header: {},
	main: {
		gap: 20,
		padding: 10,
	},
	logo: {
		width: "100%",
		height: 100,
		resizeMode: "cover",
	},
});
