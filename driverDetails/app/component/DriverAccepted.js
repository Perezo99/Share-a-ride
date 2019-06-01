import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';


type Props = {};
export default class DriverAccepted extends Component<Props> {
  render() {
    return (
      <ImageBackground  source={require('../img/map.jpg')} style={styles.container}>
 <View style= {styles.center}>

    <View style={styles.square}>

<TouchableOpacity>
     <Image
         source={require('../img/aro.png')}
        style={styles.menu}

     />
   </TouchableOpacity>


   <Image source={require('../img/hazard.jpeg')}
           style={styles.circle} />


   <View style={styles.text}>
       <Text style={styles.name}> Yusuf </Text>
       <Text style={styles.number}> +234 xxx xxx xxxx </Text>
      <Text style={styles.status}> Status : <Text style={styles.AcceptedText}>Accepted</Text> </Text>
       </View>


 <TouchableOpacity style={styles.redbutton}>
   <Text style={styles.buttonText}> Cancel Ride </Text>
 </TouchableOpacity>


 </View>
</View>
 </ImageBackground>

     );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  center: {
height: '90%',
},
square: {
width: 450,
height: 800,
backgroundColor: '#eaebed',
marginTop: 30,
borderRadius: 70,
},
menu : {
height: 15,
marginRight: 20,
marginTop: 50,
marginLeft: 60,
flexDirection: 'row',
},
circle:{
width: 130,
height: 130,
borderRadius: 130/2,
backgroundColor: '#1d2d47',
marginTop: 15,
marginLeft: 170,

},
text: {
 flexDirection: 'column',
 marginRight: 75,
 fontWeight: '700',
marginLeft: 20,

},
name: {
marginLeft: 180,
marginBottom: 0,
marginTop: 35,
marginRight: 50,
fontWeight: 'bold',
fontSize: 20,
color: 'black',

},
number:{
  marginLeft: 160,
  marginBottom: 10,
  marginTop: 10,
  marginRight: 0,
},
status: {
  marginLeft: 150,
  marginBottom: 10,
  marginTop: 10,
  marginRight: 5,
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
},
button: {
backgroundColor: '#0f912a',
width: 150,
paddingVertical: 12,
marginTop: 30,
marginLeft: 80,
borderRadius: 50
},
redbutton: {
backgroundColor: '#d11d06',
width: 150,
paddingVertical: 12,
marginTop: 30,
marginLeft: 170,
borderRadius: 50
},
buttonText : {
fontSize: 16,
fontWeight: '500',
 color : 'white',
 textAlign: 'center',
  },
  AcceptedText: {
    color: '#2cd11d',
  },
});
