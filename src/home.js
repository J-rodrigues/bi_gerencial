import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

import AppStyles from './styles';

export default class Home extends Component {
  render() {
      return (
        <View style={{marginTop: 100}}>
          <Text>Home</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c52827'
  }
})
