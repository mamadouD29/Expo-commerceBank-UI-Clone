import { Pressable, StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface AuthMethodProps {
	rememberMe: boolean;
	rememberMeHandler: () => void;
	bioMetricsHandler: () => void;
}

export function LoginPreferences({
	rememberMe,
	rememberMeHandler,
	bioMetricsHandler,
}: AuthMethodProps) {
	const { themeText, themeBcolor } = themeMode();
	return (
		<>
			<View style={[globalstyles.hCtr, styles.container]}>
				<View style={[globalstyles.hCtr]}>
					<Switch
						onValueChange={rememberMeHandler}
						value={rememberMe}
					/>
					<Text
						style={[themeText]}
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						Remember me
					</Text>
				</View>
				<View style={[globalstyles.hCtr]}>
					<Pressable
						onPress={() => {}}
						style={({ pressed }) => [
							styles.btn,
							{ opacity: pressed ? 0.3 : 1 },
						]}
					>
						<Text
							style={[globalstyles.txt]}
							numberOfLines={2}
							ellipsizeMode="tail"
						>
							Use biometrics Login
						</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexGrow: 1,
		gap: 10,
		paddingHorizontal: 30,
	},
	btnCtr: {
		paddingHorizontal: 30,
	},
	btn: {
		padding: 5,
	},
	txt: {
		
	},
});
