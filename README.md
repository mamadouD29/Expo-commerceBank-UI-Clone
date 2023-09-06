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

go in App.tsx : 

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
