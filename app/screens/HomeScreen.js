import React, { useState, useEffect } from 'react';
// import { useFonts } from "expo-font";
// import { Inter_900Black } from "@expo-google-fonts/inter";
// import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function HomeScreen({ AppState }) {
	const { allBooks, setAllBooks } = AppState;

	const handlePress = (element) => {
		setAllBooks(element);
	}
	// const [fontsLoaded] = useFonts({
	// 	Inter_900Black,
	// 	InterSemiBoldItalic:
	// 		"https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
	// 	MontserratBold: require("../app/assets/font/Montserrat-Bold.ttf"),
	// 	MontserratRegular: require("../app/assets/font/Montserrat-Regular.ttf"),
	// });

	// useEffect(() => {
	// 	async function prepare() {
	// 		await SplashScreen.preventAutoHideAsync();
	// 	}
	// 	prepare();
	// }, []);

	// const onLayout = useCallback(async () => {
	// 	if (fontsLoaded) {
	// 		await SplashScreen.hideAsync();
	// 	}
	// }, [fontsLoaded]);

	// if (!fontsLoaded) return null;

	return (
		<ScrollView>
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
					We're glad to see you just{" "}
					<Text style={styles.subtitleIn}>16 days</Text> after your last visit
					and can't wait to help you find your next page turner!
				</Text>
				{/* <View style={styles.footerNav}>
					<View style={styles.footerIcons}>
						<Image source={require("../assets/home.png")} />
						<Text>Home</Text>
					</View>
					<View style={styles.footerIcons}>
						<Image source={require("../assets/compas.png")} />
						<Text>Browse</Text>
					</View>
					<View style={styles.footerIcons}>
						<Image source={require("../assets/heart.png")} />
						<Text>wishlist</Text>
					</View>
					<View style={styles.footerIcons}>
						<Image source={require("../assets/user.png")} />
						<Text>profile</Text>
					</View>
				</View> */}
				<View>
					<Text style={styles.bookList}>Explore Books</Text>
					<ScrollView horizontal={true} style={{ marginVertical: 20 }}>
						{allBooks.map((element, index) => {
							// const IMG = (imgUrl) => {
							// 	return require (`../data/${imgUrl}`)
							// }
							return (
								<TouchableOpacity key={index.id} onPress={() => handlePress(element)} accessibilityLabel="books">
									<View testID="book">
										<Image
											source={{ uri: element.imgUrl }}
											style={styles.bookImage}
										/>
										<Text>{element.title}</Text>
										<Text>{element.author}</Text>
									</View>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
	},

	footerNav: {},

	footerIcons: {},

	navContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginBottom: 40,
		borderBottomColor: "#eee",
		borderBottomWidth: 5,
		paddingBottom: 10,
	},

	navHome: {
		fontSize: 20,
		fontWeight: "bold",
	},

	navIcons: {
		flexDirection: "row",
	},

	navItem: {
		marginRight: 20,
	},

	subtitle: {
		fontSize: 18,
		marginTop: 8,
	},

	subtitleIn: {
		fontWeight: "bold",
	},

	titleText: {
		fontWeight: "bold",
		fontSize: 31,
	},

	// Styling of the Book items

	bookList: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
	},

	bookImage: {
		width: 250,
		height: 400,
		marginRight: 20,
		borderRadius: 20,
	},
});