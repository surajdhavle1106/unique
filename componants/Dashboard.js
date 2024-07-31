import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const Dashboard = () => {
  
  return (
      <View
          style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
          }}
      >
          <Text style={styles.text}>Universal </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        
    },
    text: {
        color: "black",
        fontSize: 40,
    },
});

export default Dashboard
