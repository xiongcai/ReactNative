import React, { Component } from 'react';
import { StyleSheet, Text, Image, PixelRatio, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import Button from '../component/Button';

export default class extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.imageIcon} source={require('../../image/pp_icon_avatar_default.png')}/>
        <View style={styles.textContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.textName}>name</Text>
            <Image style={styles.LevelIcon} source={require('../../image/pp_circle_type_user_info_icon.png')}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textDesc}>circleInfo1</Text>
            <Text style={styles.textDesc}>circleInfo2</Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.textTag}>activity</Text>
            <Text style={styles.textTag}>topic</Text>
            <Text style={styles.textTag}>starCome</Text>
            <Text style={styles.textTag}>rank</Text>
          </View>
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
    //justifyContent:'center',
    padding:10,
    backgroundColor:'white'
  },
  textContainer:{
    flex:1,

    justifyContent:'center'
  },
  topContainer:{
    flexDirection:'row',
    height:30,
    alignItems:'center',

  },
  infoContainer:{
    flexDirection:'row',
    alignItems:'center',
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
  LevelIcon:{
    height: 14,
    width: 29,
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
  textTag:{
    fontSize:8,
    color:'#999',
    borderWidth:0.5,
    borderColor:'#999',
    borderRadius:8,
    padding:2,
    marginRight:10,
    marginTop:4,
  },
});
