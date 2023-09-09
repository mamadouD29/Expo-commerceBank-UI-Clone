import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/auth/LoginScreen";
import { AccountScreen, SupportScreen } from "../../screens/main";
import { AccountDetailsScreen, TheftServicesScreen } from "../../screens/main/account";

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
			<Stack.Screen
				name="AccountScreen"
				component={AccountScreen}
				options={{ title: "" }}
			/>
			<Stack.Screen
				name="TheftServicesScreen"
				component={TheftServicesScreen}
				options={{ title: "" }}
			/>
			<Stack.Screen
				name="AccountDetailsScreen"
				component={AccountDetailsScreen}
				options={{ title: "" }}
			/>
		</Stack.Navigator>
	);
}
