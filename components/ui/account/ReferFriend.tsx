import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface ReferFriendProps {}

export function ReferFriend({}) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View style={[globalstyles.hCtr, themeContent, styles.container]}>
			<Pressable
				onPress={() => {}}
				style={({ pressed }) => [globalstyles.vCtr, styles.btn]}
			>
				<View style={[globalstyles.hCtr]}>
					<EmIcons title="Users" color="#22c55e" />
					<Text style={[themeText]}>Refer a Friend</Text>
				</View>
				<View style={[]}>
					<Text style={[themeText]}>Get a $50 visa Reward card</Text>
				</View>
				<View style={[globalstyles.hCtr]}>
					<Text style={[globalstyles.txt, { fontWeight: "normal" }]}>
						Get Started with
					</Text>
					<Text style={[themeText]}>
						Refer
						<Text
							style={[
								{
									transform: [
										{ rotate: "45deg" },
										{ skewX: "30deg" },
										{ skewY: "30deg" },
									],
								},
							]}
						>
							<EmIcons
								title="Live"
								size={12}
								color={globalstyles.txt.color}
							/>
						</Text>
						live
					</Text>
				</View>
			</Pressable>
			<View style={[styles.botmInner]}></View>
			<View style={[styles.top]}></View>
			<View
				style={[
					styles.botm,
					{ backgroundColor: globalstyles.txt.color },
				]}
			></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// borderWidth: 1,
		padding: 10,
		overflow: "hidden",
	},
	btn: {
		alignItems: "flex-start",
		width: 200,
		// borderWidth: 1,
		flexGrow: 1,
	},
	top: {
		// borderWidth: 1,
		height: 35,
		width: 35,
		position: "absolute",
		backgroundColor: "yellow",
		left: "92%",
		top: "60%",
		borderRadius: 50,
		zIndex: 1,
	},
	botm: {
		// opacity: .5,
		height: 50,
		width: 50,
		position: "absolute",
		left: "95%",
		top: "80%",
		borderRadius: 50,
		zIndex: 1,
		// backgroundColor: ",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	botmInner: {
		backgroundColor: "green",
		width: 22,
		height: 22,
		zIndex: 3,
		position: "absolute",
		left: "95%",
		top: "80%",
		borderTopLeftRadius: 22,
		// borderBottomLeftRadius: 10,
		borderBottomRightRadius: 17,
	},
});
