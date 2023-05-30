import React, { useState, useMemo, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Animated, TouchableWithoutFeedback } from "react-native";
import { Button, Slider } from "react-native-elements";


const Schedule = ({ onPress, navigation }) => {
      const [visible, setVisible] = useState(false);
      const [showButton, setShowButton] = useState(true);
 
  


    const toggleFunction = () => {
        setShowButton(false);
        setVisible(!visible)
        
    }

  const MENU_ITEMS =
    [
      {
        key: '1',
        page: "Home",
        text: "Home",
      },
      {
        key: '2',
        page: "Schedule",
        text: "Schedule",
      },
      {
        key: '3',
        page: "Gym",
        text: "Our Gym",
      },
      {
        key: '4',
        page: "Contact",
        text: "Contact",
      },
      {
        key: '5',
        page: "Our_classes",
        text: "Our Classes",
      },
    ];
    const [sliderValue, setSliderValue] = useState(0);
    const sliderText = useMemo(() => MENU_ITEMS[sliderValue].text, [sliderValue]);
    const handleSliderChange = (value) => setSliderValue(value);
    const handleNavigate = () => navigation.navigate(MENU_ITEMS[sliderValue].page);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };


  return (
    <View style={styles.container}>
       <View style={styles.Slidercontainer}>
      <Slider
                 value={sliderValue}
                 onValueChange={handleSliderChange}
                 maximumValue={MENU_ITEMS.length - 1}
                 minimumTrackTintColor="#FFFFFF"
                 maximumTrackTintColor="#000000"
                 thumbTintColor="#FFFFFF"
                 step={1}
                 style={{ width: 300 }}
             />
             <Text style={styles.Slidertext}>{sliderText}</Text>
             <TouchableOpacity style={styles.buttonContainer} onPress={handleNavigate}>
             <Text style={styles.Buttontext}>Go</Text>
           </TouchableOpacity>
    </View>
        <View style={styles.button}>
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View
          style={[
            {
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              width: 100,
              height: 100,
              borderRadius: 100,
            },
            animatedStyle,
          ]}>
        <Text style={styles.text}>Gym Schedule</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.Text}>Schedule is 9-5</Text>
        <Text style={styles.Text2}>Monday - Friday</Text>
        <Text style={styles.Text2}>Closed Sat & Sun</Text>
        <Text style={styles.Text3}>"Train hard, fight easy. Consistent discipline builds champions."</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000100',
    height: '100%',
    width: '100%',
    
  },

  button: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    height: 60,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // for Android
    cursor: 'pointer',
    position: 'relative',
    top: -100 * 1.7,
    justifyContent: 'center',
  },
  

  text: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    position: 'relative',
    top: 30,
  },

  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 100 * 3.5,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'white',
    scale: 2.5,
    opacity: 1,
    backgroundColor: '#000100',


  },

    buttonContainer: {
    backgroundColor: "#000100",
    width: 300,
    borderRadius: 25,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
   
  },

  Buttontext: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 10,
    borderColor: "lime",
    borderWidth: 2,
    padding: 10,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    

    
  },

  Text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50 * 2,
    position: 'relative',
    top: 0,
  },

  Text2: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50 * 1,
  },

  Text3: {
    fontSize: 25,
    color: 'rgba(255, 0, 0, 0.5)',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  thumbStyle: {
        height: 10,
        width: 10,
        backgroundColor: "transparent",
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 15,
    },
    
    trackStyle: {
        height: 5,
        borderRadius: 5,
        backgroundColor: "green",
  },
    
     Slidercontainer: {
        alignItems: "center",
        justifyContent: "center",
       marginVertical: 0,
       position: 'relative',
        top: -100 * 2.5,
        
    },


    Slidertext: {
        fontSize: 25,
        color: "white",
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 20,
    },


});

export default Schedule;
