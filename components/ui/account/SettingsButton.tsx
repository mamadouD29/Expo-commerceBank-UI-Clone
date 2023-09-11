import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles } from "../../../styles/globalStyle";
import { EmIcons } from "../../shared/index";

interface SettingsButtonProps {
    settings: boolean;
    toggleSettingHandler: ()=>void;
}

export function SettingsButton({settings,toggleSettingHandler}:SettingsButtonProps) {
  return (
    
    <View
    style={[
        globalstyles.hCtr,
        styles.btnCtr,
        { backgroundColor: "#22c55e" },
    ]}
>
    <Pressable
        onPress={toggleSettingHandler}
        style={[globalstyles.hCtr, styles.btn]}
    >
        {settings ? (
            <EmIcons title="Time" size={36} color="#ffff" />
        ) : (
            <EmIcons title="Bars" size={36} color="#ffff" />
        )}
    </Pressable>
</View>
  );
}

const styles = StyleSheet.create({
    btnCtr: {
		width: 80,
		height: 80,
		position: "absolute",
		left: "75%",
		top: "80%",
		borderRadius: 50,
	},
	btn: {
		width: 100,
		flexGrow: 1,
		flexShrink: 1,
	},
});
