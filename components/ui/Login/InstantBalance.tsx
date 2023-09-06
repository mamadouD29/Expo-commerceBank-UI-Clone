import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface InstantBalanceProps {
	isVisible: boolean;
	closeInstantBal: () => void;
}

export function InstantBalance({
	isVisible,
	closeInstantBal,
}: InstantBalanceProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<>
			<Modal
				visible={isVisible}
				statusBarTranslucent={false}
				animationType="slide"
			>
				<View style={[themeContent, styles.container]}>
					<View style={[]}>
						<View
							style={[
								globalstyles.hCtr,
								{ justifyContent: "flex-end" },
							]}
						>
							<Pressable
								onPress={closeInstantBal}
								style={({ pressed }) => [
									{
										opacity: pressed ? 0.3 : 1,
										padding: 10,
									},
								]}
							>
								<EmIcons
									title="Close"
									color={themeText.color}
								/>
							</Pressable>
						</View>
						<Text style={[themeText, styles.title]}>
							Instant Balance
						</Text>
					</View>

					<View
						style={[
							globalstyles.vCtr,
							{ alignItems: "flex-start" },
						]}
					>
						<Text style={[themeText, styles.txt]}>
							Want a quick peek at you balance without logging in?
							just top the nstant Balance icon.
						</Text>
						<Text style={[themeText, styles.txt]}>
							This feature is not password protected and anyone
							who has access to your phone can view your balance.
							We recommend that you turn your device's password
							protection on.
						</Text>
					</View>

					<View
						style={[
							globalstyles.vCtr,
							{
								alignItems: "flex-start",
								paddingHorizontal: 10,
								gap: 10,
							},
						]}
					>
						<Text style={[themeText, styles.instruction]}>
							1. Login with Remember Me
						</Text>
						<Text style={[themeText, styles.instruction]}>
							2. Go to Settings
						</Text>
						<Text style={[themeText, styles.instruction]}>
							3. Enable Instant Balance
						</Text>
						<Text style={[themeText, styles.instruction]}>
							4. Select the accounts you want to display in
							Instant Balance
						</Text>
						<Text style={[themeText, styles.instruction]}>
							5. Save your selections
						</Text>
					</View>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 10,
		height: "80%",
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
	},
	instruction: {
		fontSize: 24,
		fontWeight: "bold",
	},
	txt: {
		fontSize: 16,
	},
});
