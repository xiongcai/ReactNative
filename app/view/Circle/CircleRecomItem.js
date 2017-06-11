import React, { Component } from 'react';
import { StyleSheet, Text, Image, PixelRatio, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import Button from '../component/Button';

export default class extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.imageIcon} source={require('../../image/pp_icon_avatar_default.png')}/>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>name</Text>
          <View style={styles.countContainer}>
            <Text style={styles.textDesc}>joinedCount</Text>
            <Text style={styles.textDesc}>contentCount</Text>
          </View>
          <Text style={styles.textDesc}>desc</Text>
        </View>
        <Button/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    height:80,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    padding:10,
  },
  textContainer:{
    flex:1,
    justifyContent:'center'
  },
  countContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  imageIcon:{
    height: 60,
    width:60,
    marginRight:10,
  },
  textName:{
    fontSize:16,
    color:'#333333',
  },
  textDesc:{
    fontSize:12,
    color:'#999',
    marginRight:10,
  },

});
