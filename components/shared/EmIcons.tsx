import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
	MaterialCommunityIcons,
	FontAwesome5,
	MaterialIcons,
	AntDesign,
	Ionicons,
	Feather,
	FontAwesome,
	SimpleLineIcons,
	Entypo,
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
			{title === "Shield" && (
				<MaterialCommunityIcons
					name="shield-plus"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Hand" && (
				<MaterialCommunityIcons
					name="hand-extended-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Pound" && (
				<MaterialCommunityIcons
					name="pound"
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
			{title === "Checks" && (
				<FontAwesome5
					name="money-check"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Pen" && (
				<FontAwesome
					name="pencil-square-o"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Bars" && (
				<FontAwesome
					name="bars"
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
			{title === "Pencil" && (
				<Ionicons
					name="pencil"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Time" && (
				<Ionicons
					name="md-close-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Add" && (
				<Ionicons
					name="md-add-circle-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Down" && (
				<Ionicons
					name="arrow-down-circle-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Up" && (
				<Ionicons
					name="arrow-up-circle-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Documents" && (
				<Ionicons
					name="documents-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Credit" && (
				<Feather
					name="credit-card"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Users" && (
				<Feather
					name="users"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Live" && (
				<Feather
					name="refresh-ccw"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Envelop" && (
				<SimpleLineIcons
					name="envelope-letter"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Exclamation" && (
				<SimpleLineIcons
					name="exclamation"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Document" && (
				<Entypo name="text-document" size={size ?? 24} color={color ?? "black"} />
			)}
		</>
	);
}

const styles = StyleSheet.create({});
