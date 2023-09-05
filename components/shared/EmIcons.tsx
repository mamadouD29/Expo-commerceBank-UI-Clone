import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

interface EmIconsProps {
	title: string;
	color?: string;
	size?: number;
}

export function EmIcons({ title, color, size }: EmIconsProps) {
	return (
		<>
			{title === "Password" && (
				<MaterialCommunityIcons
					name="lock-reset"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "User" && (
				<FontAwesome5
					name="user-circle"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
