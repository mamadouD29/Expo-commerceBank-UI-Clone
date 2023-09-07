import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { IdTheftPlan } from "../../../components/ui/account";

export default function TheftServicesScreen() {
	const { themeText } = themeMode();

	const idMonitorHandler = () => {};
	return (
		<View style={[globalstyles.container, styles.container]}>
			<View style={[globalstyles.hCtr]}>
				<Image
					source={require("../../../assets/Img/idTherftServices.jpg")}
					style={[styles.img]}
				/>
			</View>

			<View style={[globalstyles.vCtr, { alignItems: "flex-start" }]}>
				<Text style={[themeText, styles.title]}>
					Managing your identity is more important than ever.
				</Text>
				<Text style={[themeText, { opacity: 0.5 }]}>
					Commerce Bank works with deluxe oProvent and EZShield to
					offer you peace of mind and 24/7 live support when you need
					it most.
				</Text>
			</View>
			<IdTheftPlan
				title="ID Monitor"
				textSnipet="Proactive Monitoring and alert services - provided for you and one family member"
				price={11.99}
				onPress={idMonitorHandler}
				bg="#047857"
			/>
			<IdTheftPlan
				title="ID Recover"
				textSnipet="Recovery service to assit your family after an identity theft event"
				price={4.95}
				onPress={idMonitorHandler}
			/>

			<View style={[globalstyles.hCtr]}>
				<Text style={[themeText]}>
					Identity theft Event is the use of financial or personal
					information without your knowledge to commit fraud.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
		paddingHorizontal: 20,
	},
	img: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	hCtr: {
		justifyContent: "flex-start",
	},
	title: {
		fontSize: 18,
	},
	txt: {
		opacity: 0.5,
	},
});
