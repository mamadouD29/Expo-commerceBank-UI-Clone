import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigations/stacks/HomeStack";

export default function App() {
	return (
		<NavigationContainer>
			<HomeStack />
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

