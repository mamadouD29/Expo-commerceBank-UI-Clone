import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
	MaterialCommunityIcons,
	FontAwesome5,
	MaterialIcons,
	AntDesign,
	Ionicons,
} from "@expo/vector-icons";

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

			{title === "Money" && (
				<FontAwesome5
					name="money-bill-alt"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Map" && (
				<FontAwesome5
					name="map-marked-alt"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Phone" && (
				<MaterialIcons
					name="send-to-mobile"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Close" && (
				<AntDesign
					name="closecircleo"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Right" && (
				<Ionicons
					name="chevron-forward-circle-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
