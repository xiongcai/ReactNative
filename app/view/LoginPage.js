import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dimensions from 'Dimensions'
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width/360;

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    }
  }
  static navigationOptions = {
    //title: '登陆',
    header:{
      back:'返回'
    }
  };
  pressLogin(){}
  pressRegister(){}
  pressforget(){}

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.tiContainer}>
          <TextInput style={styles.tiUser}
            placeholder="输入手机号"
            placeholderTextColor="#e0e0e0"
            color="#0BBE06"
            onChangeText={(text)=>{this.setState({username:text})}}
            value={this.state.username}
          />
          <TextInput style={styles.tiUser}
            secureTextEntry={true}
            placeholder="输入密码"
            placeholderTextColor="#e0e0e0"
            color="#0BBE06"
            onChangeText={(text)=>{this.setState({password:text})}}
            value={this.state.password}
          />
        </View>
        <TouchableWithoutFeedback onPress={this.pressLogin.bind(this)}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtUser}>登陆</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.pressRegister.bind(this)}>
          <View style={styles.txtContainer}>
            <Text style={styles.txtUser}>注册</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.pressforget.bind(this)}>
          <View>
            <Text style={styles.txtforget} >忘记密码？</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    marginTop:40*SCREEN_FIT,
  },
  tiContainer:{
    flexDirection:'column',
    justifyContent:'center',
  },
  tiUser:{
    padding: 0,
    height:30*SCREEN_FIT,
    borderWidth:0.5,
    borderColor:"#0BBE06",
    borderRadius:5*SCREEN_FIT,
    margin:5*SCREEN_FIT,
    paddingLeft:5*SCREEN_FIT,
  },
  txtContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:40*SCREEN_FIT,
    backgroundColor:'#0BBE06',
    margin:5*SCREEN_FIT,
    borderWidth:0.5,
    borderColor:"#0BBE06",
    borderRadius:12.5*SCREEN_FIT,
  },
  txtUser:{
    fontSize:16,
    color:'white',
    textAlign:'center',
  },
  txtforget:{
    fontSize:16,
    color:'#0BBE06',
    textAlign:'right',
    marginRight:5*SCREEN_FIT,
  },
})
