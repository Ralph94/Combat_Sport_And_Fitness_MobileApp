import React, { useState, useMemo, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Animated, TouchableWithoutFeedback, Image, TextInput, Modal, Dimensions } from "react-native";
import { Button, Slider } from "react-native-elements";
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import reactnative_CSS from 'css-to-react-native';



function Our_classes() {
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
            <tr>
              <th>Classes</th>
              <th>Schedule</th>
              <th>Days</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>Gi Jiu Jitsu</td>
              <td>Monday - Wednesday 6am</td>
              <td>Mon, Tue, Wed</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>Kickboxing/ Muay Thai</td>
              <td>Monday-Friday at 12pm</td>
              <td>Mon, Tue, Wed, Thu, Fri</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>Kids Class</td>
              <td>Monday - Thursday at 5pm</td>
              <td>Mon, Tue, Wed, Thu</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>Adult's Gi</td>
              <td>Wednesday at 6PM and Saturday at 9AM</td>
              <td>Wed, Sat</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>No Gi/Pankration</td>
              <td>Monday, Tuesday, Thursday, Friday at 6pm</td>
              <td>Mon, Tue, Thu, Fri</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>Kickboxing/Striking</td>
              <td>Monday-Thursday at 6pm</td>
              <td>Mon, Tue, Wed, Thu</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>MMA</td>
              <td>Monday and Wednesday at 6pm</td>
              <td>Mon, Wed</td>
              <td class="duration">1 hr</td>
            </tr>
            <tr>
              <td>Sparring</td>
              <td>Tuesday and Thursday at 7pm</td>
              <td>Tue, Thu</td>
              <td class="duration">1 hr</td>
            </tr>
          </table>
          <br>
          <div class="image-container">
            <img src="https://static.wixstatic.com/media/5be382_a61cd53c57864ce9b19154bee079d636~mv2.jpg/v1/fill/w_195,h_163,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5be382_a61cd53c57864ce9b19154bee079d636~mv2.jpg" alt="logo">
          </div>
        </body>
      </html>
    `
  };

  const { width } = Dimensions.get("window");

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
      <View>
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
        <Text>{sliderText}</Text>
      </View>
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
}

export default Our_classes;
