import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Platform
} from 'react-native';

import {
  Actions,
  Scene,
  Router,
  Reducer
} from 'react-native-router-flux';

//Telas
import drawer from './drawer'
import BiGerencial from './biGerencial'

export default class Index extends Component {
  render() {
      return (
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} leftButtonIconStyle={styles.btnColor}>
          <Scene key="root">
            <Scene key="tabbar" component={drawer}>
              <Scene key="drawer" tabs={true}>
                <Scene key="bigerencial" component={BiGerencial} title="BI GERENCIAL" />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#c52827',
    borderBottomWidth: 0
  },
  navTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
    fontFamily: 'Roboto'
  },
  btnColor: {
    tintColor:'white'
  }
})
