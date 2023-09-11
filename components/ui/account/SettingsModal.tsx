import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Pressable,
} from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { prefOptions, settings } from "../../../services/utils";
import { EmIcons } from "../../shared";

interface SettingsModalProps {
	name: string;
    onPress: (action: string)=>void;
}

export function SettingsModal({ name, onPress }: SettingsModalProps) {
	const { themeContainer, themeContent, themeBcolor } =
		themeMode();
	return (
		<>
			<ScrollView
				style={[globalstyles.container, styles.container]}
				contentContainerStyle={[styles.contentStyle]}
			>
				<View style={[globalstyles.hCtr, styles.ctr, themeBcolor]}>
					<View
						style={[
							globalstyles.vCtr,
							{ alignItems: "flex-start", width: 100, flexGrow: 1, flexShrink: 1, },
                            
						]}
					>
						<Text style={[styles.txt, ]}>Hi, {name}</Text>
						<Text style={[styles.txt, , styles.hch]}>
							How can we help?
						</Text>
					</View>
					<View style={[globalstyles.hCtr]}>
						<Image
							source={require("../../../assets/Img/neom-8Ln8oMv_LLI-unsplash.jpg")}
							style={[styles.img, themeBcolor]}
						/>
					</View>
				</View>

				<View
					style={[globalstyles.hCtr, styles.optionsCtr, styles.ctr, themeBcolor]}
				>
					{settings &&
						settings.map(
							(item: {
								id: number;
								title: string;
								icon: string;
								iconTwo: boolean;
							}) => {
								return (
									<View
										style={[
											globalstyles.vCtr,
											styles.btnCtr,
										]}
										key={item.id}
									>
										<Pressable
											style={(pressed) => [
												globalstyles.vCtr,
												styles.btn,
												{ opacity: pressed ? 0.8 : 1 },
											]}
										>
											<View
												style={[
													globalstyles.vCtr,
													{ gap: -15 },
												]}
											>
												{item.iconTwo && (
													<EmIcons
														title="Pencil"
														color="#22c55e"
													/>
												)}
												<EmIcons
													title={item.icon}
													color={"#22c55e"}
													size={36}
												/>
											</View>
											<Text style={[styles.txt]}>
												{item.title}
											</Text>
										</Pressable>
									</View>
								);
							},
						)}
				</View>

				<View style={[]}>
					{prefOptions &&
						prefOptions.map(
							(pref: {
								id: number;
								title: string;
								icon: boolean;
							}) => {
								return (
									<View
										key={pref.id}
										style={[styles.ctr, themeBcolor]}
									>
										<Pressable
											style={[
												globalstyles.hCtr,
												{
													justifyContent:
														"flex-start",
                                                        gap: 10,
												},
											]}
										>
											<Text style={[styles.txt]}>
												{pref.title}
											</Text>
											{pref.icon && (
												<EmIcons
													title="Exclamation"
													color={"#22c55e"}
													size={24}
												/>
											)}
										</Pressable>
									</View>
								);
							},
						)}
				</View>
			</ScrollView>
			<View style={[styles.btnCtr, styles.logoutCtr]}>
				<Pressable onPress={()=>onPress("logout")} style={[globalstyles.hCtr]}>
					<EmIcons title="Close" color={"#22c55e"} />
					<Text style={[styles.txt, ]}>Log out</Text>
				</Pressable>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		backgroundColor: "#059669",
	},
	contentStyle: {
		paddingTop: 40,
		padding: 20,
		gap: 10,
	},

	ctr: {
		borderBottomWidth: 1,
		paddingVertical: 10,
	},
	img: {
		borderRadius: 81,
		width: 81,
		height: 81,
		resizeMode: "cover",
		borderWidth: 1,
	},
	hch: {
		fontSize: 50,
		flexShrink: 1,
	},

	optionsCtr: {
		flexWrap: "wrap",
		justifyContent: "space-between",
		gap: 20,
	},
	btnCtr: {
		width: 100,
		padding: 10,
	},
	btn: {
		gap: 10,
	},
	iconT: {},
	logoutCtr: {
		position: "absolute",
		top: "82%",
		left: "10%",
		borderWidth: 3,
		borderRadius: 30,
		borderColor: "#22c55e",
	},
	txt: {
		color: "white",
	},
	iconColor: {},
});
