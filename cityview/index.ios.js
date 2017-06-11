/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome'
import {MKColor, MKTextField,MKButton,getTheme} from 'react-native-material-kit'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';

import ProfileScreen from './ProfileScreen'



export default class cityviewApp extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
  let theme = getTheme()
    const { navigate } = this.props.navigation;
    return (
      /*<View style={theme.cardStyle}>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      /> </View> */
      <View>
      <View style={theme.cardStyle}>
  <Image source={require('./devhulk.png')} style={theme.cardImageStyle} />
</View>
  <View style={theme.cardStyle}>
      <Button
        title="Go to DevHulk's Profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
            </View> 
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8a52',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#cc4300',
    marginBottom: 5,
  },
});
const cityview = StackNavigator({
  Home: { screen: cityviewApp },
  Profile: { screen: ProfileScreen },
});
AppRegistry.registerComponent('cityview', () => cityview);
