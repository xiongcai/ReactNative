import React, { Component } from 'react';
import { StyleSheet, PixelRatio, Text,View, } from 'react-native';

export default class extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.header}</Text>
      </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 30 ,
    paddingLeft:10,
    backgroundColor: 'white',
    justifyContent:'center',
  },
  header:{
    fontSize:14,
    color:'#999',
  },
});
