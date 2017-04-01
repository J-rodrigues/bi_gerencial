import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight as Touchable,
  View,
  Dimensions,
  TouchableHighlight,
  Switch,
  Image
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

var ImagePicker = require('react-native-image-picker');



export default class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      modoNoturno: false,
      painelComercial: false,
    }
  }

  _toBi = (closeDrawer) => {
    Actions.bigerencial();
    closeDrawer();
  }

  _tirarFoto() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
          skipBackup: true,
          path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
        let source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        if(response.fileName){
          this.setState({
            avatarSource: source,
            base64: response.data.toString()
          });
        }
    });
  }

  render() {
    let {closeDrawer} = this.props

    return (
        <Grid>
          <Col>
            <Row size={3}>
              <Col style={styles.boxMenu}>
                <TouchableHighlight onPress={()=> this._tirarFoto()} underlayColor={'transparent'}>
                  {this.state.avatarSource != null ?
                    <Image source={this.state.avatarSource}
                      style={styles.perfilImagem} resizeMode="contain" />
                    :
                    <Image source={{uri: 'https://leafii.com/images/defaultProfilePic.png'}}
                        style={styles.perfilImagem} resizeMode="contain"/>
                   }
                  </TouchableHighlight>
                <Text style={styles.textName}>
                  John Doe
                </Text>
              </Col>
            </Row>
            <Row size={1.5}>
              <Col>
                <Row>
                  <Col size={8}>
                    <Text style={styles.textLabel}>modo noturno</Text>
                  </Col>
                  <Col size={2} style={{alignItems: 'center'}}>
                  <Switch
                      onValueChange={(value) => this.setState({modoNoturno: value})}
                      style={{marginTop: 10, marginBottom: 5}}
                      value={this.state.modoNoturno} />
                  </Col>
                 </Row>
                 <Row>
                   <Col size={8}>
                     <Text style={styles.textLabel}>Altualização do painel comercial</Text>
                   </Col>
                   <Col size={2} style={{alignItems: 'center'}}>
                     <Switch
                         onValueChange={(value) => this.setState({painelComercial: value})}
                         style={{marginTop: 10, marginBottom: 5}}
                         value={this.state.painelComercial} />
                   </Col>
                  </Row>
              </Col>
            </Row>
            <View style={AppStyles.hr} />
            <Row size={3}>
              <Col>
                <TouchableHighlight>
                  <View style={[AppStyles.inline, styles.line]}>
                    <Icon name={'md-bookmark'} size={25} color={"gray"} />
                    <Text style={styles.controlText}>Test</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight>
                  <View style={[AppStyles.inline, styles.line]}>
                    <Icon name={'md-add'} size={25} color={"gray"} />
                    <Text style={styles.controlText}>Test</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight>
                  <View style={[AppStyles.inline, styles.line]}>
                    <Icon name={'md-briefcase'} size={25} color={"gray"} />
                    <Text style={styles.controlText}>Test</Text>
                  </View>
                </TouchableHighlight>
              </Col>
            </Row>
            <View style={AppStyles.hr} />
            <Row size={1.5}>
              <Col>

              </Col>
            </Row>
          </Col>
        </Grid>
    )
  }
}

const styles = StyleSheet.create({
  perfilImagem: {
    height: 60,
    width: 60,
    borderRadius: 40,
    marginLeft: 20
  },
  controlText: {
    color: 'gray',
    marginLeft: 35,
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold"
  },
  line: {
    margin: 15,
    alignItems: 'center'

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
  },
  textLabel: {
    margin: 10
  }
})
