import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface AccActionProps {
	emicon: string;
	title: string;
	onPress: (id: number) => void;
	id: number;
	subTitle: string;
	emiconTwo?: string;
	size?: number;
}

export function AccAction({
	emicon,
	emiconTwo,
	title,
	subTitle,
	size,
	onPress,
	id,
}: AccActionProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<View
			style={[
				themeContent,
				globalstyles.hCtr,
				styles.btnCtr,
				themeBcolor,
			]}
		>
			<Pressable
				onPress={() => onPress(id)}
				style={({ pressed }) => [
					globalstyles.hCtr,
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<View style={[globalstyles.vCtr, styles.iconCtr]}>
					<EmIcons
						title={emicon}
						color={globalstyles.txt.color}
						size={size}
					/>
					{emiconTwo && (
						<EmIcons
							title={emiconTwo}
							color={globalstyles.txt.color}
							size={40}
						/>
					)}
				</View>
				<View
					style={[
						globalstyles.vCtr,
						{ alignItems: "flex-start", gap: 0 },
					]}
				>
					<Text style={[themeText, styles.title]}>{title}</Text>
					<Text style={[themeText]}>{subTitle}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		borderWidth: 1,
		justifyContent: "flex-start",
	},
	btn: {
		justifyContent: "flex-start",
		gap: 10,
		padding: 10,
		flexGrow: 1,
		flexShrink: 1,
	},
	iconCtr: {
		width: 60,
		gap: -12,
	},
	title: {
		fontSize: 20,
	},
});
