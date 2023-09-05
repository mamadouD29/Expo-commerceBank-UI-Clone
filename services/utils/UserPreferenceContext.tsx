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
