import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface CmrAdvanceProps {
	learnMore: () => void;
	end?: boolean;
	br?: boolean;
}

export function CmrAdvance({ learnMore, end, br }: CmrAdvanceProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View
			style={[
				globalstyles.hCtr,
				themeContent,
				themeBcolor,
				styles.btnCtr,
				br && { borderWidth: 0 },
			]}
		>
			<Pressable
				onPress={learnMore}
				style={({ pressed }) => [
					// globalstyles.vCtr,
					styles.btn,
					{ alignItems: "flex-start" },
				]}
			>
				<View
					style={[
						globalstyles.hCtr,
						styles.iconTxt,
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
				<View
					style={[
						globalstyles.hCtr,
						{
							width: "100%",
							justifyContent: end ? "flex-end" : "flex-start",
						},
					]}
				>
					<Text style={[globalstyles.txt]}>Learn More</Text>
				</View>
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
		width: 200,
		flexGrow: 1,
		flexShrink: 1,
	},
	iconTxt: {
		width: "100%",
		gap: 10,
	},
	learn: {
		flexDirection: "row",
	},
});
