import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/auth/LoginScreen";
import { SupportScreen } from "../../screens/main";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ title: "" }}
			/>
			<Stack.Screen
				name="SupportScreen"
				component={SupportScreen}
				options={{ title: "" }}
			/>
		</Stack.Navigator>
	);
}
