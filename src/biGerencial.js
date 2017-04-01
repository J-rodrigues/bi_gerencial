import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

//Plugins
import {
  Grid,
  Col,
  Row
} from 'react-native-elements';

import AppStyles from './styles';

export default class BiGerencial extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0
    }
  }

  componentDidMount = () => {

  }

 returnDados = () => {
   let data = []
   for (var i = 0; i < 10; i++) {
      data.push(
       <View key={i} style={styles.boxDados}>
         <Text style={styles.textDados}>Vendas</Text>
         <View style={AppStyles.hrWhite} />
         <Text style={styles.textDados}>3.03030</Text>
       </View>
     )
   }
   return data;
 }
  render() {
      return (
        <Grid>
          <Col style={{marginTop: 54}}>
            <Row size={1}>
              <ScrollView style={[AppStyles.inline, styles.containerBox]} horizontal={true}>
                {this.returnDados()}
              </ScrollView>
            </Row>
            <Row size={9}>
              <Col style={AppStyles.containerBox}>
                <Row style={[AppStyles.inline, AppStyles.containerBox, {marginTop: 40}]}>
                  <View style={[AppStyles.hrBi, {width: 120}]} />
                  <Text style={{textAlign: 'center'}}>FEEDNEWS</Text>
                  <View style={[AppStyles.hrBi, {width: 120}]} />
                </Row>
                <Row>
                  <View>                  
                    <Image source={require('./Card-Azul.png')} style={styles.card} resizeMode="contain"/>
                  </View>
                </Row>
              </Col>
            </Row>
          </Col>
        </Grid>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  textDados: {
    color: '#00b300',
    margin: 5
  },
  boxDados: {
    justifyContent: 'center'
  },
  containerBox: {
    backgroundColor: '#00004d'
  },
  card: {
    width: 350,
    height: 180
  }
})
