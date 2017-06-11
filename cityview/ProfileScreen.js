import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import React, { Component } from 'react';

export default class ProfileScreen extends Component {
   static navigationOptions = {
    title: 'ProfileScreen',
  }; 
  render () {
    return (
      <View> 
        <Text>Test ProfileScreen</Text>
      </View>
    )
  }
  
}


