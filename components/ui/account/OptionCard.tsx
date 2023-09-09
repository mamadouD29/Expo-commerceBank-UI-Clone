import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EmIcons } from "../../shared";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface OptionCard {
	viewHandler: (title: string) => void;
	id: number;
	title: string;
	emicon: string;
	dropDown: boolean;
	display: string;
	action?: string;
	txtOne?: string;
	txtTwo?: string;
	view?: boolean;
	routing?: string;
	account?: string;
	copyToClipboard?: (text: string) => void;
}

export function OptionCard({
	viewHandler,
	id,
	view,
	display,
	title,
	emicon,
	action,
	txtOne,
	txtTwo,
	dropDown,
	routing,
	account,
	copyToClipboard,
}: OptionCard) {
	const { themeContent, themeText, themeBcolor } = themeMode();

	return (
		<View style={[themeContent, styles.container]}>
			<View style={[globalstyles.hCtr]}>
				<Pressable
					onPress={() => viewHandler(emicon.toLowerCase())}
					style={({ pressed }) => [
						globalstyles.hCtr,
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<View style={[globalstyles.hCtr]}>
						<EmIcons title={emicon} color={"#22c55e"} />
						<Text style={[themeText]}>{title}</Text>
					</View>
					<View style={[globalstyles.hCtr]}>
						<Text style={[globalstyles.txt]}>
							{view ? "Hide" : display}
						</Text>
					</View>
				</Pressable>
			</View>

			{dropDown && view && (
				<View style={[globalstyles.vCtr, { gap: 5 }]}>
					<View style={[globalstyles.hCtr]}>
						<Pressable
							onPress={() =>
								copyToClipboard &&
								copyToClipboard(routing ?? "")
							}
							style={[globalstyles.hCtr, styles.btn]}
						>
							<Text style={[themeText]}>{txtOne}</Text>
							<View style={[globalstyles.hCtr]}>
								<Text style={[themeText]}>{routing}</Text>
								<Text style={[globalstyles.txt]}>{action}</Text>
							</View>
						</Pressable>
					</View>

					<View style={[globalstyles.hCtr]}>
						<Pressable
							onPress={() =>
								copyToClipboard &&
								copyToClipboard(account ?? "")
							}
							style={[globalstyles.hCtr, styles.btn]}
						>
							<Text style={[themeText]}>{txtTwo}</Text>
							<View style={[globalstyles.hCtr]}>
								<Text style={[themeText]}>{account}</Text>
								<Text style={[globalstyles.txt]}>{action}</Text>
							</View>
						</Pressable>
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { padding: 10, gap: 10 },
	btn: {
		justifyContent: "space-between",
		width: 200,
		flexGrow: 1,
		flexShrink: 1,
	},
});
