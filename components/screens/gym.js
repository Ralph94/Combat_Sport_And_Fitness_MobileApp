import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, SafeAreaView, Modal, TouchableOpacity, TouchableHighlight } from "react-native";
import { Button, Slider } from "react-native-elements";
import LottieView from "lottie-react-native";


const Gym = ({ navigation }) => {

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
                page: "Our Classes",
                text: "Our Classes",
            },
        ];
    
    const [sliderValue, setSliderValue] = useState(0);
    const sliderText = useMemo(() => MENU_ITEMS[sliderValue].text, [sliderValue]);
    const handleSliderChange = (value) => setSliderValue(value);
    const handleNavigate = () => navigation.navigate(MENU_ITEMS[sliderValue].page);




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
         </View>
         <TouchableOpacity style={styles.buttonContainer}>
             <Text style={styles.Buttontext} onPress={handleNavigate}>Go</Text>
        </TouchableOpacity>
         <View style={styles.HeadertextContainer} onPress={() => setVisible(true)}>
            <Text style={styles.Headertext}>Where Gym meets Community</Text>
        </View>
    <FlatList
       data={[
         {
           key: '1',
           image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/aboutImg.png'),
           text: "Every skill level has a secure and enjoyable learning environment as a top priority, ensuring everyone's progress and comfort.",
         },
         {
           key: '2',
           image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/trainer.jpg'),
           text: "CSF Owner and Head Coach, Coach Zeus, was no stranger to boxing matches as a high schooler. Inspired by Pride Fighting and UFC, he started his MMA training at 23, moving around various gyms, and becoming a kickboxing instructor at Title, UFC, and Caughlin Ranch. Working with his friend and mentor Coach Kelly Anundson, he dedicated six years to becoming proficient in Brazilian Jiu-jitsu. As a Pro MMA fighter and BJJ Brown Belt, Coach Zeus opened the gym with a diverse and safe environment, providing training for hobbyists, competitors, and fighters to achieve their best selves.",
                
         },
         {
           key: '3',
           image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/trainer2.jpg'),
           text: "Coach Aaron 'Antenna' Park began his martial arts journey in 1999 at Northwest Fight Club in Seattle. After training with various schools, including AMC Kickboxing & Pancration and Artic Warriors Combatives Academy, he moved to Nevada where he met Coach Kelly Anundson and started training at CSF. Antenna earned his brown belt in BJJ in 2021 under Coach Kelly. Throughout his career, Antenna competed in kickboxing, wrestling, pancration, and MMA, with a record of 3-3 in Matt Hume's Genesis FC promotion",
         },
         {
           key: '4',
           image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/trainer3.jpg'),
           text: "Coach Kyle developed a passion for grappling at Truckee High School (Class of 2009). Alongside his football achievements, he excelled in wrestling, qualifying for the state tournament four times, placing 3rd as a Junior, and finishing 6th in the Reno World's Open Wrestling. He has coached middle school wrestling for four years and CSF kids for one year. Coach Kyle is a decorated BJJ tournament winner, including a recent victory at Fight To Win, and received his purple belt from Coach Kelly Anundson in 2021.",
         },

         {
           key: '5',
           image: require('C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/CSFLogo.jpg'),
           text: "Combat Sports and Fitness is a martial arts gym located in Reno, Nevada. We offer classes in Brazilian Jiu-jitsu, MMA, Kickboxing, and Kids Martial Arts. We are a family-friendly gym that welcomes all skill levels. Whether you are looking to get in shape, learn self-defense, or compete, we have a class for you. We offer a free trial class to all new students. Come in and try a class today!"
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
             {showButton && <Button title="Our Classes" onPress={toggleFunction} />}
             <Modal visible={visible} animationType="slide">
                 <View style={styles.Modalcontainer}>
                     <Text style={styles.HeaderModaltext}>Feel free to reach out for additional information about our gym, classes, or private sessions.</Text>
                     <FlatList style={styles.schedule}
                         data={[
                             { key: 'Dawn Patrol Gi Class Monday - Wednesday - 6am Mon, Tue, Wed 1 hr' },
                             { key: 'Kickboxing/ Muay Thai Monday-Friday at 12pm' },
                             { key: 'Kids Class Monday - Thursday at 5pm - Mon, Tue, Wed, Thu 1 hr' },
                             { key: 'Adult Gi Class Monday - Thursday at 6pm - Wed, Sat 1 hr' },
                             { key: 'No Gi/Pankration Monday, Tuesday, Thursday, Friday at 6pm Mon, Tue, Thu, Fri 1 hr' },
                             { key: 'Kickboxing/Striking Monday-Thursday at 6pm - Mon, Tue, Wed, Thu 1 hr' },
                             { key: 'MMA Monday and Wednesday at 6pm - Mon, Wed 1 hr' },
                             { key: 'Sparring Tuesday and Thursday at 7pm - Tue, Thu 1 hr' },
                         ]}
                         renderItem={({ item }) => <Text style={styles.BodyModaltext}>{'\u25CF'} {item.key}</Text>}
                     />
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
    },

    HeadertextContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        padding: 20,
        
    },

    Headertext: {
        fontSize: 30.5,
        color: 'rgba(255, 0, 0, 0.5)',
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 20,
        textDecorationLine: 'underline' ,
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


    scrollView: {
        backgroundColor: 'gray',
        marginHorizontal: 15,
        marginVertical: 20,
        padding: 20,
       
  },

    text: {
        fontSize: 42,
        
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
        fontSize: 20,
        borderRadius: 10,
        borderColor: "lime",
        borderWidth: 2,
        padding: 10,
        marginTop: -10,
        
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
        marginBottom: 20,
        marginTop: 20,
        
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


    HeaderModaltext: {
        fontSize: 25.5,
        fontFamily: "SedgwickAveDisplay-Regular",
        color: 'rgba(255, 0, 0, 0.5)',
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
    },

    BodyModaltext: {
        fontSize: 22.5,
        fontFamily: "SedgwickAveDisplay-Regular",
        color: "white",
        textAlign: "center",
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
    },



    



});


export default Gym;
