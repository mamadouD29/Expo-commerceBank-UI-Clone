import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { globalstyles, themeMode } from "../../styles/globalStyle";

interface CopiedModalProps {
	isVisible: boolean;
}

export function CopiedModal({ isVisible }: CopiedModalProps) {
	const { themeContent, themeText } = themeMode();
	return (
		<View>
			<Modal isVisible={isVisible}>
				<View
					style={[
						globalstyles.vCtr,
						{ flex: 1, backgroundColor: "transparent" },
					]}
				>
					<View
						style={[
							globalstyles.hCtr,
							themeContent,
							{ borderRadius: 100, width: 200, padding: 20 },
						]}
					>
						<Text style={[themeText]}>Copied</Text>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({});
