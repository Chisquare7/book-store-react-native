import React, { useState } from 'react';
// import AppLoading from "expo-app-loading";
// import {
// 	useFonts,
// 	PlayfairDisplay_700Bold,
// } from "@expo-google-fonts/playfair-display";
import { StyleSheet, View, Text, Image } from 'react-native';


function HomeScreen(props) {
	// let [fontsLoaded] = useFonts({
	// 	PlayfairDisplay_700Bold,
	// });

	// if (!fontsLoaded) {
	// 	return <AppLoading />;
	// } else {
    

    return (
			<View style={styles.container}>
				<View style={styles.navContainer}>
					<Text style={styles.navHome}>Home</Text>
					<View style={styles.navIcons}>
						<Image
							style={styles.navItem}
							source={require("../assets/search.png")}
						/>
						<Image source={require("../assets/basket.png")} />
					</View>
				</View>
				<Text style={styles.titleText}>Welcome back!</Text>
				<Text style={styles.subtitle}>
					We're glad to see you just <Text style={styles.subtitleIn}>16 days</Text> after your last visit
					and can't wait to help you find your next page turner!
				</Text>
			</View>
		);
		
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
	},

	navContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 40,
		borderBottomColor: '#eee',
		borderBottomWidth: 5,
		paddingBottom: 10,
	},

	navHome: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	navIcons: {
		flexDirection: 'row',
	},

	navItem: {
		marginRight: 20, 
	},

	subtitle: {
		fontSize: 18,
		marginTop: 8,
	},

	subtitleIn: {
		fontWeight: 'bold'
	},

    titleText: {
        fontWeight: "bold",
        fontSize: 31,
    }
})

export default HomeScreen;