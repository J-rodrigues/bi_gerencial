import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight as Touchable,
  View,
  Image,
  Dimensions
} from 'react-native'

//Plugins
import {
  Grid,
  Col,
  Row
} from 'react-native-elements';

import {
  Actions
} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons'

//components
import AppStyles from './styles';


export default class Menu extends Component {

  _toBi = (closeDrawer) => {
    Actions.bigerencial();
    closeDrawer();
  }

  render() {
    let {closeDrawer} = this.props

    return (
        <Grid>
          <Col style={{flex: 1}}>
            <Row>
              <Col style={styles.boxMenu}>
                <Text style={styles.textName}>
                  John Doe
                </Text>
              </Col>
            </Row>
            <Row style={styles.row}>
              <Touchable onPress={()=>this._toBi(closeDrawer)} underlayColor={'transparent'}>
                <View style={[AppStyles.inline, styles.line]}>
                  <Icon name={'ios-undo'} size={25} color={"gray"} />
                  <Text style={styles.controlText}>Test</Text>
                </View>
              </Touchable>
              <Touchable>
                <View style={[AppStyles.inline, styles.line]}>
                  <Icon name={'ios-help-circle-outline'} size={25} color={"gray"} />
                  <Text style={styles.controlText}>Test</Text>
                </View>
              </Touchable>
            </Row>
            <View style={[AppStyles.hr]} />
            <Row style={styles.row}>
              <Text style={styles.allLabels}>All labels</Text>
              <Touchable>
                <View style={[AppStyles.inline, styles.line]}>
                  <Icon name={'md-unlock'} size={25} color={"gray"} />
                  <Text style={styles.controlText}>Test</Text>
                </View>
              </Touchable>
              <Touchable>
                <View style={[AppStyles.inline, styles.line]}>
                  <Icon name={'md-lock'} size={25} color={"gray"} />
                  <Text style={styles.controlText}>Test</Text>
                </View>
              </Touchable>
            </Row>
            <View style={[AppStyles.hr]} />
            <Row style={styles.row}>
              <Touchable>
                <View style={[AppStyles.inline, styles.line]}>
                  <Icon name={'md-checkbox-outline'} size={25} color={"gray"} />
                  <Text style={styles.controlText}>Test</Text>
                </View>
              </Touchable>
              <Touchable>
                <View style={[AppStyles.inline, styles.line]}>
                  <Icon name={'ios-barcode'} size={25} color={"gray"} />
                  <Text style={styles.controlText}>Test</Text>
                </View>
              </Touchable>
            </Row>
          </Col>
        </Grid>
    )
  }
}

const styles = StyleSheet.create({
  controlText: {
    color: 'gray',
    marginLeft: 35,
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold"
  },
  line: {
    marginBottom: 25
  },
  textName: {
    margin: 20,
    color: 'white',
    fontSize: 16
  },
  boxMenu: {
    backgroundColor: '#c52827',
    flex: 1,
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'column',
    padding: 15
  },
  allLabels: {
    marginBottom: 30,
    fontWeight: "400",
    color: 'gray'
  }
})
