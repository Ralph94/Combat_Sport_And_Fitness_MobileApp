import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, SafeAreaView, Modal, TouchableOpacity } from "react-native";
import { Button, Slider } from "react-native-elements";
import LottieView from "lottie-react-native";


const Home = ({ navigation }) => {

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
     

  //const handlePress = () => {
     // setShowButton(false);
     // navigation.navigate("Schedule");
  //};




 return (
  <SafeAreaView style={styles.container}>
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
    <FlatList
      data={[
        {
          key: '1',
          image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/CSFLogo.jpg'),
          text: "Join CSF for martial arts classes that improve confidence, fitness, street smarts, courage, and inner peace. Discover self-transformation in a world of culture and tradition. Join us and be grateful you did - whatever your motivation, we're here to help.",
                 },
                 {
                     key: '2',
                     image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/bodyBG.jpg'),
                     text: "CSF Mixed Martial Arts and BJJ Kids Classes. Brazilian Jiu-jitsu. MMA. Kickboxing.Grappling.All offered to our gym community in a fun, safe environment.Private sessions available, see coach for details.",
                 },
                 {
                     key: '3',
                     image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/footerBG.jpg'),
                     text: "It doesn't matter if you are a novice, enthusiast or a life long martial artist, at Combat Sport and Fitness we will welcome you. Our classes will help to enhance your self-esteem, and give you a community where you can take your practice to the next level. With our wide variety of classes for all skill levels, everyone is truly welcome.",
                    
                 },
                 
                 
      ]}
      renderItem={({ item }) => (
        <View>
          <Image source={item.image} style={styles.logo} />
              <Text style={styles.Bodytext}>{item.text}</Text>
          </View>
          
      )}
         />
         <View style={styles.Buttoncontainer}>
             {showButton && <Button title="Come In For A Class" onPress={toggleFunction} />}
             <Modal visible={visible} animationType="slide">
                 <View style={styles.Modalcontainer}>
                     <Text style={styles.Bodytext}>Contact Us At 775-000-000</Text>
                     <LottieView style={styles.lottie} source={require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/77520-phone-ringing')} autoPlay loop />
                     <Button title="Close" onPress={toggleFunction} />
                 </View>
             </Modal>
             
         </View>
  </SafeAreaView>
);

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        fontFamily: "SedgwickAveDisplay-Regular",
    },

    scrollView: {
        backgroundColor: 'gray',
        marginHorizontal: 15,
        marginVertical: 20,
        padding: 20,
       
  },

    text: {
        fontSize: 42,
        fontFamily: "SedgwickAveDisplay-Regular",
    },


    Slidercontainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        
    },


    Slidertext: {
        fontSize: 25,
        fontFamily: "NotoSerifJP-Bold",
        color: "white",
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 20,
    },


    Bodycontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },

    buttonContainer: {
        backgroundColor: "#000100",
        paddingVertical: 15,
        width: 300,
        borderRadius: 25,
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },

    Buttontext: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "SedgwickAveDisplay-Regular",
        fontSize: 20,
        borderRadius: 10,
        borderColor: "lime",
        borderWidth: 2,
        padding: 10,
        
    },


    logo: {
        width: 300,
        height: 200,
        resizeMode: "contain",
        position: "relative",
        top: 0,
        left: 40,
        right: 0,
        bottom: 0,
    },
    
    Bodytext: {
        fontSize: 22.5,
        fontFamily: "SedgwickAveDisplay-Regular",
        color: "white",
        textAlign: "center",
        marginHorizontal: 10,
        marginBottom: 20.5,

        
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

    button: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    Modalcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,


    },

    lottie: {
        width: 300,
        height: 300,
        resizeMode: "contain",
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        

    },


    



});


export default Home;
