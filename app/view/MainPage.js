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
var styles = StyleSheet.create({
  imgUser:{
    height:45*SCREEN_FIT,
    width:45*SCREEN_FIT,
    marginTop:-10*SCREEN_FIT,
  }
});
export default class MainPage extends Component {
  constructor(props){
    super(props);

    console.log('navigate');
    this.onPressRight=this.onPressRight.bind(this);
    //alert('navigate '+navigate)
  }
  static navigationOptions = {
    title: '主页',
    header:{
      right:(
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginPage')}>
          <Image style={styles.imgUser} source={require('../image/pp_icon_avatar_default.png')}/>
        </TouchableOpacity>),
    }
  };
  componentDidMount(){

  }

  onPressRight(){
    alert('navigate ');
     const { navigate } = this.props.navigation;
     alert('navigate '+navigate);
     navigate('LoginPage');
  }

  render() {
    console.log("render");
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Button
          title="Go to Login Tab"
          onPress={() => navigate('LoginPage')}
        />
      </View>
    );
  }
}

  /*
  pressButton(){
    const { navigator } = this.props;
    if(navigator){
      navigator.push({
        name:'LoginPage',
        page:LoginPage,
      });
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Text>这是首页</Text>
        <TouchableOpacity onPress={this.pressButton.bind(this)}>
          <Text>点我跳转</Text>
        </TouchableOpacity>
      </View>
    );
  }
}*/
