/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import{} from 'react-native-vector-icons';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var {width,height} = Dimensions.get('window');
type Props = {};

class Home extends Component{
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={{flex: 0.08,
                  alignSelf: 'flex-end',
                  paddingRight: 20,
                marginTop: 30,
                backgroundColor: '#F8FBFC',
              }} onPress={()=>navigate('Monthview')}>skip</Text>
       <View style={{flex: 1,
                     justifyContent: 'flex-end',
                     alignItems: 'center',
                     width: width,
                     backgroundColor: '#F8FBFC',
                     borderBottomLeftRadius: 40,
                     borderBottomRightRadius: 40,
                     paddingBottom: 30,}}>
         <Text style={styles.welcome}>Hi There! Welcome to</Text>
         <Image style={{resizeMode: 'center'}} source={require('./img/logo.png')} />
       </View>
       <View style={{flex: 1,ustifyContent: 'center',alignItems: 'center', width:width}}>
         <Greetings name='Vishang Soni' styles={styles.instructions}/>
         <Text style={styles.instructions}>
           Very simple Things To-Do List.  Helps you
         </Text>
         <Text style={styles.instructions}>
           to manage yourdaily life, without any
         </Text>
         <Text style={styles.instructions}>
           hassle!
         </Text>
       </View>
    </View>

    );
  }
}

Home.navigationOptions = {
  headerMode : 'none',
  header : null
}

// TODO:
//Tabbed navigation
//Daily/Monthly Swich button
//Calender
//Scrolable Detail area

class Monthview extends Component{
  render(){
    return(
      <Text>This is montheview</Text>
    );
  }
}

Monthview.navigationOptions = {
  headerMode : 'none',
  header : null
}

class Album extends Component{
  render(){
    return(
      <Text>This is Album</Text>
    );
  }
}

const App = createStackNavigator({
  Home : {screen: Home},
  Monthview : {screen: Monthview}
});
const bottomNab = createMaterialBottomTabNavigator({
  Home : {screen: Home},
  Monthview : {screen: Monthview},
  Album: { screen: Album }
}, {
  initialRouteName: 'Home',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});


export default bottomNab;

class Greetings extends Component {
  render(){
    return(
      <Text styles={styles.instructions}>Hello,{this.props.name}</Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    alignSelf: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    //textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
