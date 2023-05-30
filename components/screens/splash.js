import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { Button, Slider } from "react-native-elements";


function Splash({ navigation }) {
  const animationValue = new Animated.Value(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  Animated.timing(animationValue, {
    toValue: 1,
    duration: 1200,
    useNativeDriver: true,
  }).start();
  }, []);
  
 
  



  const handlePress = () => {
    setLoading(true);
    
    setTimeout(() => {
      navigation.navigate("Home");
    setLoading(false);
  }, 3000);
};




  return (
    <View style={styles.container}>
    <Animated.Image
      source={require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/logo.png')}
      style={[
        styles.logo,
        {
          opacity: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0],
              }),
            },
            {
              scale: animationValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.2, 1],
              }),
            },
          ],
        },
      ]}
      />
      <Button
      title="Lets Begin!"
      loading={loading}
      onPress={handlePress}
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
      titleStyle={styles.titleStyle}
    />
      </View>
    );
  };






const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  
  logo: { width: 300, height: 200 },
    
  title: { fontSize: 30, fontWeight: "bold", marginVertical: 20 },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    color: "gray",
    fontFamily: "NotoSerifJP-Bold",
  },

    
  buttonStyle: {
    backgroundColor: "#00a680",
    borderRadius: 5,
    height: 50,
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
    fontFamily: "NotoSerifJP-Bold",
  },

  containerStyle: {
    width: "100%",
    marginTop: 30.5,
  },

  titleStyle: {
    fontSize: 20,
    fontFamily: "NotoSerifJP-Bold",
  },



  thumbStyle: {
    height: 30,
    width: 30,
    backgroundColor: "transparent",
    borderColor: "#00a680",
    borderWidth: 2,
    borderRadius: 15,
  },

  trackStyle: {
    height: 10,
    borderRadius: 5,
  },

});
    
export default Splash;