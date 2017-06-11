import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  PixelRatio,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dimensions from 'Dimensions';
import AutoExpandTextInput from '../component/AutoExpandTextInput';
import Button from '../component/Button';

const TAG="Publish: ";
class PublishPage extends Component {
  constructor(props){
    super(props);
    this._onChangeHeight=this._onChangeHeight.bind(this);
    this._pressPublish=this._pressPublish.bind(this);
  }
  static navigationOptions = {
    title:'发布',
  }

  _onChangeHeight(before, after){
     console.log('before: ' + before + ' after: ' + after);
  }

  _pressPublish(){
    console.log(TAG+"pressPublish");
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.line}/>
        <View style={styles.pubContainer}>
          <Text style={styles.textCircle}>发布到圈子：</Text>
          <View style={styles.circleContainer}>
            <Text style={styles.textCircle}>请选择</Text>
            <Image style={styles.arrow} source={require('../../image/pp_arrow.png')}></Image>
          </View>
        </View>
        <View style={styles.sayContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>标题: </Text>
            <TextInput style={styles.tiTitle}
              placeholder="4-23字（选填）"
              maxLength={46}
              numberOfLines = {2}
              placeholderTextColor="#999999"
              color="#333333"
            />
          </View>
          <AutoExpandTextInput
            placeholder="说说你想说的"
            placeholderTextColor="#999999"
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
            minHeight={35}
            initalHeight={50}
            maxHeight={300}
            onChangeHeight={this._onChangeHeight}
            style={styles.tiUser}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.picContainer}>
            <Image style={styles.expImg} source={require('../../image/pp_publish_pic.png')}></Image>
            <Image style={styles.expImg} source={require('../../image/pp_expression.png')}></Image>
          </View>
          <Button buttonStyle={styles.buttonStyle} textStyle={styles.textPublish}  text='发布' onClickFun={this._pressPublish} ></Button>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#f0f0f0',
  },
  pubContainer:{
    flexDirection:'row',
    alignItems:'center',
    height:44,
    backgroundColor:'white',
    paddingLeft:10,
    paddingRight:10,
  },
  circleContainer:{
    position:'absolute',
    height:44,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    right:0,
  },
  titleContainer:{
    flexDirection:'row',
    height:35,
    alignItems:'center',
  },
  sayContainer:{
    backgroundColor:'white',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
  },
  content:{
    height:100,
  },
  bottomContainer:{
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    marginTop:10,
    height:90,
    paddingLeft:10,
  },
  picContainer:{
    flexDirection:'row',
    height:40,
    width:100,
    backgroundColor:'#eeeeee',
    justifyContent:'space-around',
    alignItems:'center',
  },
  icon:{
    height: 30,
    width: 30,
  },
  arrow:{
    height: 14,
    width: 11,
    marginLeft:5,
    marginRight: 10,
  },
  expImg:{
    height:35,
    width:35,
    marginLeft:10,
  },
  textCircle:{
    fontSize:14,
    color:'#333333',
  },
  textTitle:{
    fontSize:16,
    color:'#333333',
  },
  tiTitle:{
    height:35,
    width:Dimensions.get('window').width-60,
  },
  tiUser:{
    fontSize:16,
    marginBottom:10,
  },
  textPublish:{
    fontSize:14,
    color:'white',
  },
  buttonStyle:{
    position:'absolute',
    right:20,
    height:25,
    width:55,
    borderRadius:12.5,
    borderWidth:1,
    borderColor:'#0bbe06',
    backgroundColor:'#0bbe06',
  },
  line: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
  },
});
export default PublishPage;
