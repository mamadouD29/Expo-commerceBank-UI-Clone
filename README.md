# EXPO Commerce Bank UI Clone 

this is just a ui clone of commerce bank app. this app, does not contain real information or data. all data in this app, is fake and some statics.

we will be using expo typescript for the project.


### Dependencies

all the dependencies : 

- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack
- npx expo install expo-linking


### Create folders: 

Create following folder in your root folder.

- components
  - ui
  - shared
- services
  - utils
- styles
- screens
  - main
  - auth 
- navigations
  - stacks


### get started

- in Screens auth folder, create a file LoginScreen.tsx and add : 
  
```
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
```

- in your navigation stacks, create a file HomeStack.tsx and add :
  
```
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} />
		</Stack.Navigator>
	);
}

```

in your styles folder create file gobalStyle.tsx and add: 

```
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	hCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
	},
	vCtr: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
	bolder: {
		fontWeight: "bold",
	},
});
```
We are going to use it across the entire app, that will help to reduce typing every time. However, sometime we are going to modify our style a little bit to adapt to the container we are going to encounter.

- in your services utils folder, create a file UserPreferenceContext.tsx and add: 
  
```
import { createContext, useContext } from "react";

interface UserPreferenceContextProps {
	theme: boolean;
	toggleTheme: () => void;
}

const UserPreferenceContext = createContext<UserPreferenceContextProps>({
	theme: false,
	toggleTheme: () => {},
});

export const UPrefCtxt = () => useContext(UserPreferenceContext);
```
- go back to style globalStyle.tsx and add: 

``` 

const colors = {
	dark: {
		darkContainer: {
			backgroundColor: "#18181b",
		},
		darkText: {
			color: "#f5f5f4",
		},
		darkContent: {
			backgroundColor: "#27272a",
		},
		headerContainer: {
			backgroundColor: "#18181b",
		},
		tabBarContainer: {
			backgroundColor: "#111827",
		},
		btn: {
			backgroundColor: "#005db4",
		},
		bColor: {
			borderColor: "#9ca3af",
		},
	},
	light: {
		lightContainer: {
			backgroundColor: "#e7e5e4",
		},
		lightText: {
			color: "#002851",
		},
		lightContent: {
			backgroundColor: "#fafafa",
		},
		headerContainer: {
			backgroundColor: "#f5f5f4",
		},
		tabBarContainer: {
			backgroundColor: "#e7e5e4",
		},

		btn: {
			backgroundColor: "#0077e6",
		},
		bColor: {
			borderColor: "#9ca3af",
		},
	},
};

export const themeMode = () => {
	const { theme } = UPrefCtxt();
	const themeContainer = theme
		? colors.dark.darkContainer
		: colors.light.lightContainer;
	const themeContent = theme
		? colors.dark.darkContent
		: colors.light.lightContent;
	const themeText = theme ? colors.dark.darkText : colors.light.lightText;

	const themeBcolor = theme ? colors.dark.bColor : colors.light.bColor;

	return { themeContainer, themeContent, themeText, themeBcolor };
};
```
This will help to tak care of the theme (light/dark mode)

go into App.tsx : 

```
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

- Edit it to :  
```
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

```
## Let build the log in screen 

- import themeMode and globalStyle into login
- create a folder login in components/ui
- add a file CredentialInput.tsx

```
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Linking,
} from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface CredentialInputProps {
	input: string;
	setInput: any;
	isPass: boolean;
	emicon: string;
	forgotHandler: () => void;
	placeholder: string;
	autoFocus?: boolean;
	errMsg?: string;
}

export function CredentialInput({
	input,
	setInput,
	isPass,
	errMsg,
	emicon,
	forgotHandler,
	autoFocus,
	placeholder,
}: CredentialInputProps) {
	const { themeText, themeBcolor } = themeMode();
	return (
		<View style={[globalstyles.hCtr, styles.container, themeBcolor]}>
			<View style={[styles.inputCtr]}>
				<EmIcons title={emicon} color={themeText.color} size={36} />
				<TextInput
					value={input}
					onChangeText={setInput}
					style={[styles.input]}
					secureTextEntry={isPass}
					placeholder={placeholder}
					placeholderTextColor={themeText.color}
					autoFocus={autoFocus}
				/>
			</View>
			<View style={[globalstyles.hCtr, { width: 80 }]}>
				<Pressable
					onPress={forgotHandler}
					style={({ pressed }) => [
						globalstyles.hCtr,
						styles.btn,
						{
							opacity: pressed ? 0.3 : 1,
							justifyContent: "center",
						},
					]}
				>
					<Text
						style={[globalstyles.txt]}
						onPress={() =>
							Linking.openURL(
								"https://banking.commercebank.com/CBI/Auth/Login#",
							)
						}
					>
						Forgot?
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		paddingHorizontal: 5,
		borderWidth: 2,
		borderRadius: 25,
	},
	inputCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		flexGrow: 1,
		flexShrink: 1,
		width: 100,
		gap: 10,
	},
	input: {
		width: 100,
		flexGrow: 1,
		flexShrink: 1,
		padding: 10,
		fontWeight: "bold",
	},
	txt: {
		color: "blue",
		fontWeight: "bold",
	},
	btn: {
		width: 50,
		padding: 5,
		flexGrow: 1,
		flexShrink: 1,
	},
});

```
- in your components shared, create a file EmIcons.tsx and add: 
```
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
	MaterialCommunityIcons,
	FontAwesome5,
	MaterialIcons,
	AntDesign,
	Ionicons,
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
			{title === "Add" && (
				<Ionicons
					name="md-add-circle-outline"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
```

  In your components ui Login folder, create files 
- StandardButton.tsx: 
```
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";

interface StandardButtonProps {
	title: string;
	onPress: () => void;
	bg?: string;
}

export function StandardButton({ onPress, title, bg }: StandardButtonProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View style={[ themeBcolor, styles.btnCtr, {backgroundColor: bg}]}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<Text style={[themeText, styles.txt]}>
					{title}
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		borderWidth: 1,
		borderRadius: 30,
		padding: 10,
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		padding: 10,
		flexGrow: 1,
		flexShrink: 1,
		// borderWidth: 1,
		borderRadius: 30,
	},
	txt: {
		fontSize: 20,
		fontWeight: "bold"
	},
});
```

- LoginPreferences.tsx

```
import { Pressable, StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface AuthMethodProps {
	rememberMe: boolean;
	rememberMeHandler: () => void;
	bioMetricsHandler: () => void;
}

export function LoginPreferences({
	rememberMe,
	rememberMeHandler,
	bioMetricsHandler,
}: AuthMethodProps) {
	const { themeText, themeBcolor } = themeMode();
	return (
		<>
			<View style={[globalstyles.hCtr, styles.container]}>
				<View style={[globalstyles.hCtr]}>
					<Switch
						onValueChange={rememberMeHandler}
						value={rememberMe}
					/>
					<Text
						style={[themeText]}
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						Remember me
					</Text>
				</View>
				<View style={[globalstyles.hCtr]}>
					<Pressable
						onPress={() => {}}
						style={({ pressed }) => [
							styles.btn,
							{ opacity: pressed ? 0.3 : 1 },
						]}
					>
						<Text
							style={[globalstyles.txt]}
							numberOfLines={2}
							ellipsizeMode="tail"
						>
							Use biometrics Login
						</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexGrow: 1,
		gap: 10,
		paddingHorizontal: 30,
	},
	btnCtr: {
		paddingHorizontal: 30,
	},
	btn: {
		padding: 5,
	},
	txt: {
		
	},
});
```

- ActionButton.tsx
  
```
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface ActionButtonProps {
	displayInstantBal: () => void;
	displayCustomerSupport: () => void;
}

export function ActionButton({
	displayInstantBal,
	displayCustomerSupport,
}: ActionButtonProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<View
			style={[
				globalstyles.hCtr,
				styles.container,
				{ justifyContent: "space-between" },
			]}
		>
			<View style={[globalstyles.vCtr, styles.side]}>
				<Pressable
					onPress={displayInstantBal}
					style={({ pressed }) => [
						globalstyles.vCtr,
						styles.circle,
						{
							borderColor: themeText.color,
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<View
						style={[
							styles.instant,
							{ borderColor: themeText.color },
						]}
					></View>
					<View
						style={[
							styles.instant,
							{ borderColor: themeText.color },
						]}
					></View>
					<EmIcons title="Money" color={themeText.color} size={32} />
				</Pressable>
				<Text style={[themeText, styles.txt]}>Instant Balance</Text>
			</View>

			<View style={[globalstyles.vCtr]}>
				<Pressable
					style={({ pressed }) => [
						globalstyles.vCtr,
						styles.circle,
						{
							borderColor: themeText.color,
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<EmIcons title="Map" color={themeText.color} size={32} />
				</Pressable>
				<Text style={[themeText, styles.txt]}>
					ATM & Branch Location
				</Text>
			</View>

			<View style={[globalstyles.vCtr, styles.side]}>
				<Pressable
					onPress={displayCustomerSupport}
					style={({ pressed }) => [
						globalstyles.vCtr,
						styles.circle,
						{
							borderColor: themeText.color,
							opacity: pressed ? 0.3 : 1,
						},
					]}
				>
					<EmIcons title="Phone" color={themeText.color} size={32} />
				</Pressable>
				<Text style={[themeText, styles.txt]}>Customer Support</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { padding: 10 },
	side: {
		width: 81,
	},
	circle: {
		width: 64,
		height: 64,
		borderWidth: 2,
		borderRadius: 49,
		gap: 0,
		padding: 0,
	},
	instant: {
		// borderWidth: 1,
		borderBottomWidth: 1,
		width: 30,
	},
	txt: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
```

- InstantBalance.tsx 
```
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
```

- It is willl be a great idea to group LoginScreen compoenents. That makes easier to manage and matian the list of exports. So, create a file index.tsx in components/ui/login, then add: 
```
import { LoginPreferences } from "./LoginPreferences";
import { CredentialInput } from "./CredentialInput";
import { ActionButton } from "./ActionButton";
import { InstantBalance } from "./InstantBalance";

export { CredentialInput, LoginPreferences, ActionButton, InstantBalance };
``` 

Now, create a file LoginScreen that will display all the login features

```
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";
import {
	ActionButton,
	CredentialInput,
	InstantBalance,
	LoginPreferences,
} from "../../components/ui/Login";
import { StandardButton } from "../../components/shared";
import * as Linking from "expo-linking";
import { NavigationAndRouteProps } from "../../services/utils/UserPreferenceContext";

const priStmt =
	"https://www.commercebank.com/security-center/privacy-statement";

export default function LoginScreen({ navigation }: NavigationAndRouteProps) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, toggleRememberMe] = useState<boolean>(false);
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	const [instantBal, setInstantBal] = useState<boolean>(false);

	const userFogot = () => {};

	const rememberMeHandler = () => {
		toggleRememberMe((prev) => !prev);
	};

	const closeInstantBal = () => {
		setInstantBal((prev) => !prev);
	};
	const displayCustomerSupport = () => {
		navigation.navigate("SupportScreen");
	};

	const bioLoginHandler = () => {};

	const loginHandler =()=>{
		navigation.replace("AccountScreen");
	}

	return (
		<View
			style={[globalstyles.container, themeContainer, styles.container]}
		>
			<InstantBalance
				isVisible={instantBal}
				closeInstantBal={closeInstantBal}
			/>
			<View style={[themeContent, styles.main]}>
				<View
					style={[
						globalstyles.hCtr,
						{ justifyContent: "flex-start" },
					]}
				>
					<Image
						source={require("../../assets/Img/cmBankLogo.png")}
						style={[styles.logo]}
					/>
				</View>

				<CredentialInput
					emicon="User"
					input={username}
					setInput={setUsername}
					isPass={false}
					forgotHandler={userFogot}
					placeholder="Username"
					autoFocus={true}
				/>
				<CredentialInput
					emicon="Password"
					input={password}
					setInput={setPassword}
					isPass={true}
					forgotHandler={userFogot}
					placeholder="Password"
				/>

				<LoginPreferences
					rememberMe={rememberMe}
					rememberMeHandler={rememberMeHandler}
					bioMetricsHandler={bioLoginHandler}
				/>

				<StandardButton
					title="Login"
					bg={themeContainer.backgroundColor}
					onPress={loginHandler}
				/>
				<View style={[globalstyles.hCtr]}>
					<Text
						style={[globalstyles.txt]}
						onPress={() => Linking.openURL(priStmt)}
					>
						Privacy Statement
					</Text>
				</View>
			</View>

			<View style={[]}>
				<ActionButton
					displayInstantBal={closeInstantBal}
					displayCustomerSupport={displayCustomerSupport}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		justifyContent: "space-between",
	},
	devCtr: {
		width: 200,
		flexGrow: 1,
	},
	header: {},
	main: {
		gap: 20,
		padding: 10,
	},
	logo: {
		width: "100%",
		height: 100,
		resizeMode: "cover",
	},
});
```


## Let build the Account screen 

Create a folder account in components/ui add a files: 

- CmrAdvance.tsx 

```
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface CmrAdvanceProps {
	learnMore: () => void;
}

export function CmrAdvance({ learnMore }: CmrAdvanceProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View
			style={[
				globalstyles.hCtr,
				themeContent,
				themeBcolor,
				styles.btnCtr,
			]}
		>
			<Pressable
				onPress={learnMore}
				style={({ pressed }) => [
					globalstyles.vCtr,
					{ alignItems: "flex-start" },
				]}
			>
				<View
					style={[
						globalstyles.hCtr,
						styles.btn,
						{ justifyContent: "flex-start" },
					]}
				>
					<EmIcons title="Money" color="#22c55e" />
					<Text style={[themeText]}>Apply for CommerceAdvance</Text>
				</View>

				<Text style={[themeText]}>
					Get a small dollar line of credit to cover occasional
					short-term cash needs via your Commerce Bank personal
					checking account.
				</Text>
				<Text style={[globalstyles.txt]}>Learn More</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		borderWidth: 1,
        padding: 10,
	},
	btn: {
		gap: 10,
	},
});
```

- Dot.tsx

```
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface DotProps {
	bg?: string;
	hCtr?: boolean;
}

export function Dot({ hCtr, bg }: DotProps) {
	const { themeText } = themeMode();
	return (
		<View style={[hCtr ? globalstyles.hCtr : globalstyles.vCtr]}>
			<View
				style={[
					globalstyles.hCtr,
					styles.dot,
					{ backgroundColor: bg ?? themeText.color },
				]}
			></View>
			<View
				style={[
					globalstyles.hCtr,
					styles.dot,
					{ backgroundColor: bg ?? themeText.color },
				]}
			></View>
			<View
				style={[
					globalstyles.hCtr,
					styles.dot,
					{ backgroundColor: bg ?? themeText.color },
				]}
			></View>
		</View>
	);
}

const styles = StyleSheet.create({
	dot: {
		width: 5,
		height: 5,
		borderRadius: 5,
	},
});
```

- AccAction.tsx
```
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared";

interface AccActionProps {
	emicon: string;
	title: string;
	onPress: (id: number) => void;
	id: number;
	subTitle: string;
	emiconTwo?: string;
	size?: number;
}

export function AccAction({
	emicon,
	emiconTwo,
	title,
	subTitle,
	size,
	onPress,
	id,
}: AccActionProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View
			style={[
				themeContent,
				globalstyles.hCtr,
				styles.btnCtr,
				themeBcolor,
			]}
		>
			<Pressable
				onPress={() => onPress(id)}
				style={({ pressed }) => [
					globalstyles.hCtr,
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<View style={[globalstyles.vCtr, styles.iconCtr]}>
					<EmIcons
						title={emicon}
						color={globalstyles.txt.color}
						size={size}
					/>
					{emiconTwo && (
						<EmIcons
							title={emiconTwo}
							color={globalstyles.txt.color}
							size={40}
						/>
					)}
				</View>
				<View
					style={[
						globalstyles.vCtr,
						{ alignItems: "flex-start", gap: 0 },
					]}
				>
					<Text style={[themeText, styles.title]}>{title}</Text>
					<Text style={[themeText]}>{subTitle}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		borderWidth: 1,
		justifyContent: "flex-start",
	},
	btn: {
		justifyContent: "flex-start",
		gap: 10,
		padding: 10,
		flexGrow: 1,
		flexShrink: 1,
	},
	iconCtr: {
		width: 60,
		gap: -12,
	},
	title: {
		fontSize: 20,
	},
});
```


- It is willl be a great idea to group AccountScreen components. That makes easier to manage and matian the list of exports. So, create a file index.tsx in components/ui/account, then add: 
```
import { AccAction } from "./AccAction";
import { CmrAdvance } from "./CmrAdvance";
import { Dot } from "./Dot";

export { Dot, CmrAdvance, AccAction };

``` 


Now, create a file AccountScreen.tsx that will display all the account features

```
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../styles/globalStyle";
import { AccAction, CmrAdvance, Dot } from "../../components/ui/account";

const acc = [
	{
		id: 1,
		title: "Open A New Account",
		subTitle: "Find the account that's protect for you",
		emicon: "Add",
		emiconTwo: "",
		size: 32,
	},
	{
		id: 2,
		title: "Aubscribe to ID theft Services",
		subTitle: "24/7 live support to reclaim your identity",
		emicon: "Shield",
		emiconTwo: "",
		size: 32,
	},
	{
		id: 3,
		title: "My Offers",
		subTitle: "Offers customized just for you",
		emicon: "Money",
		emiconTwo: "Hand",
		size: 20,
	},
];
export function AccountScreen() {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();

	const learnMore = () => {};

	const handlePress = (id: number) => {
		if (id === 3) {
			Linking.openURL("https://www.commercebank.com/");
		}
	};

	return (
		<ScrollView
			style={[globalstyles.container, styles.container, themeContainer]}
		>
			<View style={[styles.balCtr, themeBcolor]}>
				<Pressable
					onPress={() => {}}
					style={({ pressed }) => [
						themeContent,
						themeBcolor,
						{ padding: 10 },
					]}
				>
					<Text style={[themeText, globalstyles.txt]}>
						CommerceBasic Saving
						<Dot hCtr={true} bg={globalstyles.txt.color} />
						7777
					</Text>
					<View
						style={[
							globalstyles.hCtr,
							{ justifyContent: "space-between" },
						]}
					>
						<View
							style={[
								globalstyles.hCtr,
								{ justifyContent: "flex-start" },
							]}
						>
							<Dot hCtr={false} />
							<Text style={[themeText, styles.bal]}>
								${"20,000"}
							</Text>
						</View>
						<Dot hCtr={false} />
					</View>
					<Text style={[themeText]}>Available Balance</Text>
				</Pressable>
			</View>
			<View style={[themeContainer, styles.ctr, themeBcolor]}>
				<CmrAdvance learnMore={learnMore} />
				{acc &&
					acc.map(
						(item: {
							title: string;
							subTitle: string;
							id: number;
							emicon: string;
							emiconTwo: string;
							size: number;
						}) => (
							<AccAction
								key={item.id}
								title={item.title}
								emicon={item.emicon}
								subTitle={item.subTitle}
								emiconTwo={item.emiconTwo}
								size={item.size}
								onPress={handlePress}
								id={item.id}
							/>
						),
					)}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
	balCtr: {
		borderBottomWidth: 1,
	},
	bal: {
		fontSize: 45,
	},
	ctr: {
		borderBottomWidth: 1,
		padding: 10,
		gap: 20,
		paddingBottom: 20,
	},
});
```

### Let's create the theft service screen, 

create a component IdTheftPlan.tsx in components/ui/account and add: 
```
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React from "react";
import { globalstyles, themeMode } from "../../../styles/globalStyle";

interface IdTheftPlanProps {
	title: string;
	textSnipet: string;
	onPress: () => void;
	price: number;
	bg?: string;
}

export default function IdTheftPlan({
	title,
	textSnipet,
	onPress,
	price,
	bg,
}: IdTheftPlanProps) {
	const { themeContent, themeText, themeBcolor } = themeMode();
	return (
		<View style={[themeContent, styles.btnCtr, themeBcolor]}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [
					globalstyles.hCtr,
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<View style={[styles.body, themeBcolor]}>
					<Text style={[themeText, styles.title]}>{title}</Text>
					<Text style={[themeText]}>{textSnipet}</Text>
					<Text style={[themeText, globalstyles.txt]}>
						Learn More
					</Text>
				</View>

				<View
					style={[
						globalstyles.hCtr,
						styles.planCtr,
						themeBcolor,
						{ backgroundColor: bg ?? "#22c55e" },
					]}
				>
					<Text style={[themeText, { flexShrink: 1 }]}>
						${price}/Month
					</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	btnCtr: {
		borderWidth: 2,
	},
	btn: {
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	body: {
		width: 200,
		flexGrow: 1,
		gap: 10,
		padding: 10,
	},
	planCtr: {
		width: 80,
		padding: 10,
		borderBottomLeftRadius: 50,
		flexShrink: 1,
		justifyContent: "flex-end",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});

``` 
- add in the group index.tsx
  
then create a file TheftServicesScreen.tsx in screens/main/account and add in the file: 

```
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
```

