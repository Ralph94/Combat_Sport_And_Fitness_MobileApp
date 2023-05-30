import React, { useState, useMemo, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Animated, TouchableWithoutFeedback, Image, TextInput, Modal } from "react-native";
import { Button, Slider } from "react-native-elements";
function Contact({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  }

  const handleFormSubmit = () => {
    // Here you can do something with the form data
    // For example, you can send an email or save the data to a database
    // After that, you can clear the input values and close the modal
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');

     // Show the Thank You message in a pop-up box
    setShowModal(true);

    // Hide the Thank You message after 5 seconds
    setTimeout(() => {
      setShowModal(false);
    }
      , 5000);

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

  return (
    <View style={styles.container}>
      <Image source={require("C:/Users/Raffp/Desktop/React Native Projects/SportsApp/SportsApp/assets/imgs/contactBG.jpg")} style={styles.Image} />
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Hit Us Up Anytime</Text>
      </View>
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
      <View style={styles.bodyContainer}>
        <View style={styles.nametextContainer}>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              showSoftInputOnFocus={false} 
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              showSoftInputOnFocus={false} 
            />
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              showSoftInputOnFocus={false} 
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
              showSoftInputOnFocus={false} 
            />
          </View>
          <TextInput
            style={styles.messageInput}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline={true}
            showSoftInputOnFocus={false}  
          />
          <TouchableOpacity onPress={handleFormSubmit}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: 'green' }}>Submit</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={handleModal}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <View style={{ backgroundColor: 'white', padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Thank you we will reach out to you soon!</Text>
                <TouchableOpacity onPress={handleModal} style={{ marginTop: 20 }}>
                  <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000100",
        alignItems: "center",
        justifyContent: "center",
    },

    headerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 10,
    },

    bodyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 50,
    },

    Image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },

    text: {
        color: 'rgba(255, 0, 0, 0.5)',
        fontSize: 30,
        fontWeight: "bold",
    },

    nametextContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 60,
        left: 0,
        width: "100%",
        height: "100%",

    },


    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    },
    
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: '#000100',
    width: 150,
    },
  
  messageInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlignVertical: 'top',
    fontSize: 20,
    fontWeight: "bold",
    color: '#000100',
    width: 300,
    },
  
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -18,
        padding: 10,
        
    },

    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'green',
  },
    
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderRadius: 10,
    position: 'relative',
    top: 0,
    left: 0,
    width: "100%",
    
  },

  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderRadius: 10,
    position: 'relative',
    top: 0,
    left: 0,
    width: "100%",


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
      marginVertical: 20,
      position: "relative",
      top: -100 * 1.9,
      left: 0,
      width: "100%",
      height: "100%",

        
    },


    Slidertext: {
        fontSize: 25,
        fontFamily: "NotoSerifJP-Bold",
        color: "white",
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 20,
  },
    
  buttonContainer: {
        paddingVertical: 15,
        width: 300,
        borderRadius: 25,
        position: "relative",
        top: -100 * 5.5,
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




    

   




});







export default Contact;