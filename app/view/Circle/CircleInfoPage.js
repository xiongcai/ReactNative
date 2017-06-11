//圈子详情页
import React, { Component } from 'react';
import { StyleSheet, Text, Image, Button, PixelRatio, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import Dimensions from 'Dimensions';
const TAG="CircleInfoPage: ";
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width / 360;

export default class CircleInfoPage extends Component {
  constructor(props) {
    super(props);
    const {state} = this.props.navigation;
    console.log(state.routeName);
  }
  render() {

    return (
      <View>
        <Text style={{
        marginTop: 100
      }}>圈子详情:</Text>
      </View>
      );
  }
}
