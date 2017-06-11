import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, Image, Button, PixelRatio, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import Dimensions from 'Dimensions';

// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width / 360;

export default class CircleItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <View>
        <Text style={{
        marginTop: 100
      }}>圈子明星:</Text>
      </View>
      );
  }
}
