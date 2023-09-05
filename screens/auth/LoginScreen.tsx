import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";
import { CredentialInput } from "../../components/ui/Login";

export default function LoginScreen() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();

	const userFogot = () => {};
	return (
		<View
			style={[globalstyles.container, themeContainer, styles.container]}
		>
			<View style={[globalstyles.vCtr, styles.main]}>
				<View
					style={[
						globalstyles.hCtr,
						{ justifyContent: "flex-start" },
					]}
				>
					<View>{/* <Image source={require("")} /> */}</View>

					<View>
						<Text style={[themeText]}>Commerce Bank</Text>
						<View>
							<Text style={[themeText]}>Member FDIC</Text>
						</View>
					</View>
				</View>

				<CredentialInput
					emicon="User"
					input={username}
					setInput={setUsername}
					isPass={false}
					forgotHandler={userFogot}
					placeholder="Username"
				/>
				<CredentialInput
					emicon="Password"
					input={password}
					setInput={setPassword}
					isPass={true}
					forgotHandler={userFogot}
					placeholder="Password"
				/>
			</View>
			<View style={[]}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
	devCtr: {
		width: 200,
		flexGrow: 1,
	},
	header: {},
	main: {
		gap: 20,
	}
});
