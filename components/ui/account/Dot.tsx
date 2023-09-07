import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface DotProps {
	bg?: string;
	hCtr?: boolean;
}

export function Dot({ hCtr, bg }: DotProps) {
	const { themeText } = themeMode();
	return (
		<View style={[hCtr ? globalstyles.hCtr : globalstyles.vCtr]}>
			<View
				style={[
					globalstyles.hCtr,
					styles.dot,
					{ backgroundColor: bg ?? themeText.color },
				]}
			></View>
			<View
				style={[
					globalstyles.hCtr,
					styles.dot,
					{ backgroundColor: bg ?? themeText.color },
				]}
			></View>
			<View
				style={[
					globalstyles.hCtr,
					styles.dot,
					{ backgroundColor: bg ?? themeText.color },
				]}
			></View>
		</View>
	);
}

const styles = StyleSheet.create({
	dot: {
		width: 5,
		height: 5,
		borderRadius: 5,
	},
});
