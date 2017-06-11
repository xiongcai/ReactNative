import React, { Component } from 'react';
import { StyleSheet, PixelRatio, View, } from 'react-native';
import Dimensions from 'Dimensions';
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width / 360;

export default class SeparatorComponent extends Component {

  render() {
    return (
      <View style={[styles.line,{height: this.props.padding}]}></View>
      );
  }
}
const styles = StyleSheet.create({
  line: {
    backgroundColor: '#e7e7e7',
  },
});
