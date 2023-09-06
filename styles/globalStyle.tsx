import { StyleSheet } from "react-native";
import { UPrefCtxt } from "../services/utils/UserPreferenceContext";

export const globalstyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
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
	txt: {
		color: "#0ea5e9",
		fontWeight: "bold",
	},
});

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
