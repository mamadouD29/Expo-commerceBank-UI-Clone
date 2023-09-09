import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface BalanceCardProps {
	seeMoreLessHandler: () => void;
	seeMoreLess: boolean;
}

export function BalanceCard({
	seeMoreLessHandler,
	seeMoreLess,
}: BalanceCardProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<View style={[themeContent, styles.container, themeBcolor]}>
			<View style={[globalstyles.vCtr]}>
				<Text style={[themeText, styles.avBal]}>$20,000</Text>
				<Text style={[themeText, styles.txt]}>Available Balance</Text>
			</View>
			{seeMoreLess && (
				<View style={[globalstyles.vCtr, themeBcolor]}>
					<Text style={[themeText, styles.curbal]}>$19,000</Text>
					<Text style={[themeText, styles.txt]}>Current Balance</Text>
				</View>
			)}
			<View style={[globalstyles.hCtr, styles.ctr, themeBcolor]}>
				<Pressable
					onPress={seeMoreLessHandler}
					style={[globalstyles.hCtr, styles.btn]}
				>
					{seeMoreLess ? (
						<>
							<Text style={[themeText, { gap: 10 }]}>
								Less Info
							</Text>
							<EmIcons title="Up" color={themeText.color} />
						</>
					) : (
						<>
							<Text style={[themeText]}>More Info</Text>
							<EmIcons title="Down" color={themeText.color} />
						</>
					)}
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		gap: 10,
	},
	ctr: {
		borderTopWidth: 1,
		padding: 10,
	},
	// btnCtr: {
	// },
	btn: {
		width: 100,
		flexGrow: 1,
		flexShrink: 1,
		alignItems: "flex-start"
	},
	bal: {},
	avBal: {
		fontSize: 50,
		// fontWeight: "bold",
	},
	curbal: {
		fontSize: 35,
		opacity: 0.7,
	},
	txt: {
		fontWeight: "bold",
	},
});
