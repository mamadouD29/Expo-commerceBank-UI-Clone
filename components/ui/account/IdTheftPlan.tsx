import {
	Pressable,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface IdTheftPlanProps {
	title: string;
	textSnipet: string;
	onPress: () => void;
	price: number;
	bg?: string;
}

export function IdTheftPlan({
	title,
	textSnipet,
	onPress,
	price,
	bg,
}: IdTheftPlanProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View style={[themeContent, styles.btnCtr, themeBcolor]}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [
					globalstyles.hCtr,
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<View style={[styles.body, themeBcolor]}>
					<Text style={[themeText, styles.title]}>{title}</Text>
					<Text style={[themeText]}>{textSnipet}</Text>
					<Text style={[themeText, globalstyles.txt]}>
						Learn More
					</Text>
				</View>

				<View
					style={[
						globalstyles.hCtr,
						styles.planCtr,
						themeBcolor,
						{ backgroundColor: bg ?? "#22c55e" },
					]}
				>
					<Text style={[themeText, { flexShrink: 1 }]}>
						${price}/Month
					</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	btnCtr: {
		borderWidth: 2,
	},
	btn: {
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	body: {
		width: 200,
		flexGrow: 1,
		gap: 10,
		padding: 10,
	},
	planCtr: {
		width: 80,
		padding: 10,
		borderBottomLeftRadius: 50,
		flexShrink: 1,
		justifyContent: "flex-end",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
