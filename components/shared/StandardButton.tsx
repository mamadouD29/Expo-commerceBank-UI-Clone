import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";

interface StandardButtonProps {
	title: string;
	onPress: () => void;
	bg?: string;
}

export function StandardButton({ onPress, title, bg }: StandardButtonProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View style={[ themeBcolor, styles.btnCtr, {backgroundColor: bg}]}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<Text style={[themeText, styles.txt]}>
					{title}
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		borderWidth: 1,
		borderRadius: 30,
		padding: 10,
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		padding: 10,
		flexGrow: 1,
		flexShrink: 1,
		// borderWidth: 1,
		borderRadius: 30,
	},
	txt: {
		fontSize: 20,
		fontWeight: "bold"
	},
});
