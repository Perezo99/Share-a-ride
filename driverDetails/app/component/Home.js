import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <ImageBackground source={require('../img/map.jpg')} style={styles.container}>
      <View style={styles.menuItems}>
            <Image
             source={require('../img/menu.png')}
            style={styles.menu}
            />
            <Image
             source={require('../img/bell.png')}
            style={styles.bell}
            />
        </View>
        <View style= {styles.center}>

          </View>

          <View style= {styles.bottom}>
              <View style= {styles.rectangle}>
                  <View style={styles.circle}>

                  </View>
                  <View style={styles.text}>
                      <Text style={styles.Destination}>
                  Destination:  <Text style={styles.bold}>
                              Port.....
                      </Text>
                    </Text>
                    <Text style={styles.Destination}>
                    Status:      <Text style={styles.pending}>
                                 Pending
                        </Text>
                  </Text>
                  </View>
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
  menuItems: {
     height: '10%',
     marginBottom: 90,
     flexDirection: 'row',
   },
   menu : {
     height: 20,
     marginRight: 300,
   },
   center: {
     height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '20%',
  },
  rectangle: {
    marginTop: 10,
    marginBottom: 40,
    width: 310,
    height: 140,
    backgroundColor: '#eaebed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  circle:{
    width: 80,
    height: 80,
    borderRadius: 80/2,
    backgroundColor: '#1d2d47',
    marginTop: 25,
    marginLeft: 20,
    flexDirection: 'row',
  },
  text: {
     marginTop: 25,
     marginLeft: 65,
     fontWeight: '700',
  },
  Destination: {
    fontWeight: '900',
    marginTop: 10,
    color: 'black'
  },
  bold: {
    color: 'blue',
  },
  pending:{
    color: 'grey',
  },
});
