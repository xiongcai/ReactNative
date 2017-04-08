import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dimensions from 'Dimensions';
import LoginPage from './LoginPage';
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width/360;
export default class MinePage extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    tabBar: {
      label: '我的',
      icon: ({ tintColor }) => (
        <Image
          source={require('../image/pp_mine.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  }
  render(){
    return(
      <Text style={styles.container}>我的</Text>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  icon:{
    height:30*SCREEN_FIT,
    width:30*SCREEN_FIT,
    //bottom:-5*SCREEN_FIT,
    //top:3*SCREEN_FIT,
  }
})
