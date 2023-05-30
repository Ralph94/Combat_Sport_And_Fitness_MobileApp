import React, { useState, useMemo, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Animated, TouchableWithoutFeedback, Image, TextInput, Modal } from "react-native";
import { Button, Slider } from "react-native-elements";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import reactnative_CSS from 'css-to-react-native';


function Our_classes({ navigation }) {
  const source = {
    html: `

    
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Classes</title>
    
  </head>
  <body>
    <table>
      <tr style="background-color: black; width:100%;">
        <th style="text-align:center; color: green; font-size: 17.5px;">Classes</th>
        <th style="text-align:center; color: green; font-size: 17.5px;">Schedule</th>
        <th style="text-align:center; color: green; font-size: 17.5px;">Days</th>
        <th style="text-align:center; color: green; font-size: 17.5px;">Duration</th>
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">Gi Jiu Jitsu</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;">Monday - Wednesday 6am</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;">Mon, Tue, Wed</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">Kickboxing/ Muay Thai</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Monday-Friday at 12pm</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Mon, Tue, Wed, Thu, Fri</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">Kids Class</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Monday - Thursday at 5pm</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Mon, Tue, Wed, Thu</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
        
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">Adult's Gi</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Wednesday at 6PM and Saturday at 9AM</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Wed, Sat</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
        
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">No Gi/Pankration</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Monday, Tuesday, Thursday, Friday at 6pm</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Mon, Tue, Thu, Fri</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
        
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">Kickboxing/Striking</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Monday-Thursday at 6pm</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Mon, Tue, Wed, Thu</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
        
      </tr>
      <tr>
        <td style="width: 100%; text-align:center; color: green; font-size: 15px; font-weight: bold;">MMA</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;">Monday and Wednesday at 6pm</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Mon, Wed</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr</td>
        
      </tr>
      <tr>
        <td style=" text-align:center; color: green; font-size: 15px; font-weight: bold;">Sparring</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Tuesday and Thursday at 7pm</td>
        <td style="font-weight: bold; color: #000100; font-size: 15.5px;"">Tue, Thu</td>
        <td style="color: red; font-weight: bold; position: relative; left: 30px;">1 hr
        </td>

      </tr>
    </table>
    <br>
    <div style="text-align: center; font-size: 20px; font-weight: bold; background-color: black; color: green; width: 100%; height: 100%; border-radius: 10px;">
    <img src="https://static.wixstatic.com/media/5be382_a61cd53c57864ce9b19154bee079d636~mv2.jpg/v1/fill/w_195,h_163,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5be382_a61cd53c57864ce9b19154bee079d636~mv2.jpg" alt="logo" style="width: 200px; height: 150px; border-radius: 200px;">
    </div>
  </body>
</html>
    

    `
  };

  const { width } = useWindowDimensions();
  const MENU_ITEMS = [
    { key: "1", page: "Home", text: "Home" },
    { key: "2", page: "Schedule", text: "Schedule" },
    { key: "3", page: "Gym", text: "Our Gym" },
    { key: "4", page: "Contact", text: "Contact" },
    { key: "5", page: "Our_classes", text: "Our Classes" }
  ];

  const [sliderValue, setSliderValue] = useState(0);
  const sliderText = useMemo(() => MENU_ITEMS[sliderValue].text, [sliderValue]);
  const handleSliderChange = value => setSliderValue(value);
  const handleNavigate = () => navigation.navigate(MENU_ITEMS[sliderValue].page);

  return (
    <View>
      <View style={styles.container}>
        <Slider
          value={sliderValue}
          onValueChange={handleSliderChange}
          maximumValue={MENU_ITEMS.length - 1}
          minimumTrackTintColor="#000100"
          maximumTrackTintColor="#000000"
          thumbTintColor="lime"
          step={1}
          style={styles.Slidercontainer}
        />
        <Text style={styles.Slidertext}>{sliderText}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.Buttontext} onPress={handleNavigate}>Go</Text>
      </TouchableOpacity>
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
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

  


  Slidercontainer: {
    width: 300,
    height: 40,
    position: "relative",
    top: 0,
    left: 30.5,
    right: 0,
    bottom: 0,
    color: "green",


  },


  Slidertext: {
    fontSize: 25.5,
    color: "green",
    textAlign: "center",
    marginBottom: -20,
    fontWeight: "bold",
    position: "relative",
    top: -5,
    left: 50,
    right: 0,
    bottom: 0,

  },


  buttonContainer: {
    paddingVertical: 15,
    width: 85.5,
    height: 85.5,
    borderRadius: 25,
    position: "relative",
    top: 1.1,
    left: 160,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,

  },

  Buttontext: {
    color: "#FFFFFF",
    backgroundColor: "#000100",
    textAlign: "center",
    fontSize: 15.5,
    borderRadius: 10,
    borderColor: "lime",
    borderWidth: 2,
    padding: 10,

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

 

 







});
export default Our_classes;