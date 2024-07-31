import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
 import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            navigation.navigate("Dashboard");
        }, 2000);

        // Cleanup the timeout on component unmount
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Unique Motors</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    text: {
        color: "white",
        fontSize: 40,
    },
});

export default SplashScreen;

// import React, { useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const SplashScreen = () => {
//     const navigation = useNavigation();
//     useEffect(() => {
//         console.log("start spa");
//         setTimeout(() => {
//            navigation.navigate("Dashboard");
//         }, 2000)
//     }, []);
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 height: "100%",
//                 width: "100%",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: "red",
//             }}
//         >
//             <Text style={styles.text}>Foodies</Text>
//         </View>
//     );
// }
// export default SplashScreen;

// const styles = StyleSheet.create({
//     text: {
//         color: "white",
//         fontSize: 60,
//     }
// })
