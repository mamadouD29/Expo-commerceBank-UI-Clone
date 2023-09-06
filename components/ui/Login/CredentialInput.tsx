import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Linking,
} from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface CredentialInputProps {
	input: string;
	setInput: any;
	isPass: boolean;
	emicon: string;
	forgotHandler: () => void;
	placeholder: string;
	autoFocus?: boolean;
	errMsg?: string;
}

export function CredentialInput({
	input,
	setInput,
	isPass,
	errMsg,
	emicon,
	forgotHandler,
	autoFocus,
	placeholder,
}: CredentialInputProps) {
	const { themeText, themeBcolor } = themeMode();
	return (
		<View style={[globalstyles.hCtr, styles.container, themeBcolor]}>
			<View style={[styles.inputCtr]}>
				<EmIcons title={emicon} color={themeText.color} size={36} />
				<TextInput
					value={input}
					onChangeText={setInput}
					style={[styles.input]}
					secureTextEntry={isPass}
					placeholder={placeholder}
					placeholderTextColor={themeText.color}
					autoFocus={autoFocus}
				/>
			</View>
			<View style={[globalstyles.hCtr, { width: 80 }]}>
				<Pressable
					onPress={forgotHandler}
					style={({ pressed }) => [
						globalstyles.hCtr,
						styles.btn,
						{
							opacity: pressed ? 0.3 : 1,
							justifyContent: "center",
						},
					]}
				>
					<Text
						style={[globalstyles.txt]}
						onPress={() =>
							Linking.openURL(
								"https://banking.commercebank.com/CBI/Auth/Login#",
							)
						}
					>
						Forgot?
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		paddingHorizontal: 5,
		borderWidth: 2,
		borderRadius: 25,
	},
	inputCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		flexGrow: 1,
		flexShrink: 1,
		width: 100,
		gap: 10,
	},
	input: {
		width: 100,
		flexGrow: 1,
		flexShrink: 1,
		padding: 10,
		fontWeight: "bold",
	},
	txt: {
		color: "blue",
		fontWeight: "bold",
	},
	btn: {
		width: 50,
		padding: 5,
		flexGrow: 1,
		flexShrink: 1,
	},
});
