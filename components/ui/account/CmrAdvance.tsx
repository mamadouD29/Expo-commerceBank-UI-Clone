import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface CmrAdvanceProps {
	learnMore: () => void;
}

export function CmrAdvance({ learnMore }: CmrAdvanceProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View
			style={[
				globalstyles.hCtr,
				themeContent,
				themeBcolor,
				styles.btnCtr,
			]}
		>
			<Pressable
				onPress={learnMore}
				style={({ pressed }) => [
					globalstyles.vCtr,
					{ alignItems: "flex-start" },
				]}
			>
				<View
					style={[
						globalstyles.hCtr,
						styles.btn,
						{ justifyContent: "flex-start" },
					]}
				>
					<EmIcons title="Money" color="#22c55e" />
					<Text style={[themeText]}>Apply for CommerceAdvance</Text>
				</View>

				<Text style={[themeText]}>
					Get a small dollar line of credit to cover occasional
					short-term cash needs via your Commerce Bank personal
					checking account.
				</Text>
				<Text style={[globalstyles.txt]}>Learn More</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		borderWidth: 1,
        padding: 10,
	},
	btn: {
		gap: 10,
	},
});
