import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface ActionButtonProps {
	displayInstantBal: () => void;
	displayCustomerSupport: () => void;
}

export function ActionButton({
	displayInstantBal,
	displayCustomerSupport,
}: ActionButtonProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<View
			style={[
				globalstyles.hCtr,
				styles.container,
				{ justifyContent: "space-between" },
			]}
		>
			<View style={[globalstyles.vCtr, styles.side]}>
				<Pressable
					onPress={displayInstantBal}
					style={({ pressed }) => [
						globalstyles.vCtr,
						styles.circle,
						{
							borderColor: themeText.color,
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<View
						style={[
							styles.instant,
							{ borderColor: themeText.color },
						]}
					></View>
					<View
						style={[
							styles.instant,
							{ borderColor: themeText.color },
						]}
					></View>
					<EmIcons title="Money" color={themeText.color} size={32} />
				</Pressable>
				<Text style={[themeText, styles.txt]}>Instant Balance</Text>
			</View>

			<View style={[globalstyles.vCtr]}>
				<Pressable
					style={({ pressed }) => [
						globalstyles.vCtr,
						styles.circle,
						{
							borderColor: themeText.color,
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<EmIcons title="Map" color={themeText.color} size={32} />
				</Pressable>
				<Text style={[themeText, styles.txt]}>
					ATM & Branch Location
				</Text>
			</View>

			<View style={[globalstyles.vCtr, styles.side]}>
				<Pressable
					onPress={displayCustomerSupport}
					style={({ pressed }) => [
						globalstyles.vCtr,
						styles.circle,
						{
							borderColor: themeText.color,
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<EmIcons title="Phone" color={themeText.color} size={32} />
				</Pressable>
				<Text style={[themeText, styles.txt]}>Customer Support</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { padding: 10 },
	side: {
		width: 81,
	},
	circle: {
		width: 64,
		height: 64,
		borderWidth: 2,
		borderRadius: 49,
		gap: 0,
		padding: 0,
	},
	instant: {
		// borderWidth: 1,
		borderBottomWidth: 1,
		width: 30,
	},
	txt: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
