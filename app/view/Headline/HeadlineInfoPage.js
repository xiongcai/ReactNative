import React, { Component } from 'react';
import { StyleSheet, PixelRatio, View, } from 'react-native';

export default class extends Component {

  render() {
    return (
      <View style={styles.line}>
        <Text>1111</Text>
      </View>
      );
  }
}
const styles = StyleSheet.create({
  line: {
    height: 20 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
  },
});
