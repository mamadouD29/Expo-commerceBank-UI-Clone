import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";
import { EmIcons } from "../../components/shared";

export function SupportScreen() {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<View style={[globalstyles.container, styles.container]}>
			<View
				style={[
					globalstyles.hCtr,
					styles.ctr,
					themeBcolor,
					{ borderTopWidth: 1 },
				]}
			>
				<View
					style={[
						globalstyles.vCtr,
						{ alignItems: "flex-start", gap: 2 },
					]}
				>
					<Text style={[themeText, styles.title]}>
						Customer support
					</Text>
					<Text style={[themeText, styles.subTitle]}>
						Speak to a specialist
					</Text>
					<Text
						style={[themeText, globalstyles.txt]}
						onPress={() => {}}
					>
						844-782-7206
					</Text>
				</View>
				<View style={[]}>
					<EmIcons title="Phone" color="#22c55e" />
				</View>
			</View>

			<View style={[globalstyles.hCtr, styles.ctr, themeBcolor]}>
				<View
					style={[
						globalstyles.vCtr,
						{ alignItems: "flex-start", gap: 2 },
					]}
				>
					<Text style={[themeText, styles.title]}>
						24-Hour Account Information
					</Text>
					<Text style={[themeText, styles.subTitle]}>
						Get automated account information
					</Text>
					<Text style={[themeText, globalstyles.txt]}>
						800-453-2265
					</Text>
				</View>
				<View style={[]}>
					<EmIcons title="Phone" color="#22c55e" />
				</View>
			</View>

			<View style={[globalstyles.hCtr, styles.ctr, themeBcolor]}>
				<View
					style={[
						globalstyles.vCtr,
						{ alignItems: "flex-start", gap: 2 },
					]}
				>
					<Text style={[themeText, styles.title]}>
						Lost or Stolen Card
					</Text>
					<Text style={[themeText, styles.subTitle]}>
						Report and request a new card
					</Text>
					<Text style={[themeText, globalstyles.txt]}>
						844-390-4765
					</Text>
				</View>
				<View style={[]}>
					<EmIcons title="Phone" color="#22c55e" />
				</View>
			</View>

			<View style={[styles.ctr, themeBcolor]}>
				<Pressable
					onPress={() => {}}
					style={({ pressed }) => [
						globalstyles.hCtr,
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<Text style={[themeText, styles.txt]}>
						Frequently Asked Questions
					</Text>

					<EmIcons title="Right" color="#22c55e" />
				</Pressable>
			</View>

			<View style={[styles.ctr, themeBcolor]}>
				<Pressable
					onPress={() => {}}
					style={({ pressed }) => [
						globalstyles.hCtr,
						styles.btn,
						{
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<Text style={[themeText, styles.txt]}>
						Terms & Conditions
					</Text>
					<EmIcons title="Right" color="#22c55e" />
				</Pressable>
			</View>
			<View
				style={[
					globalstyles.hCtr,
					styles.ctr,
					{ borderBottomWidth: 0 },
				]}
			>
				<Text style={[themeText]}>Version: 3.43</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    paddingVertical: 40,
		paddingHorizontal: 10,
		// gap: 10,
	},
	btn: {
		justifyContent: "space-between",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
	},
	subTitle: {
		// fontSize: 18,
		opacity: 0.5,
	},
	ctr: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		// borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	txt: {
		fontWeight: "bold",
	},
});
