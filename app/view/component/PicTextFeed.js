import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, Image, Button, PixelRatio, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dimensions from 'Dimensions';
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width / 360;
export default class PicTextFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let likeImg = null;
    if (this.props.like) {
      likeImg = <Image style={styles.imgBottom} source={require('../../image/pp_like.png')}></Image>
    } else {
      likeImg = <Image style={styles.imgBottom} source={require('../../image/pp_unlike.png')}></Image>
    }
    return (
      <TouchableOpacity onPress={this.props.onItemClick}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.userContainer}>
            <Image style={styles.icon} source={require('../../image/pp_userIcon.png')}></Image>
            <View style={{
        marginLeft: 10 * SCREEN_FIT
      }}>
              <Text style={styles.textName}>oOo星光熠熠oOo</Text>
              <View style={{
        flexDirection: 'row'
      }}>
                <Text style={styles.textCount}>昨天23:00</Text>
                <Text style={[styles.textCount, {
        marginLeft: 10 * SCREEN_FIT
      }]}>431人阅读</Text>
              </View>
            </View>
          </View>
          <Text numberOfLines={2} style={[styles.textDesc, {
        marginTop: 8 * SCREEN_FIT
      }]}>不明真相的吃瓜群众围观；同名男星杨洋的介绍!!!!!</Text>
          <Text numberOfLines={2} style={[styles.textStar, {
        marginTop: 5 * SCREEN_FIT
      }]}>杨洋，1991年9月9日出生于上海，中国内地男演员</Text>
          <View style={styles.picContainer}>
            <Image style={styles.img} source={require('../../image/ex1.jpg')}></Image>
            <Image style={styles.img} source={require('../../image/ex2.jpg')}></Image>
            <Image style={styles.img} source={require('../../image/ex3.jpg')}></Image>
          </View>
          <View style={styles.fromContainer}>
            <Text style={styles.textStar}>来自泡泡圈：</Text>
            <Text style={styles.textCircle}>旋风少女</Text>
          </View>
          <View style={styles.line}/>
          <View style={styles.bottomContainer}>
            <View style={styles.childContainer}>
              <Image style={styles.imgBottom} source={require('../../image/pp_unshare.png')}></Image>
              <Text style={styles.textBottom}>分享</Text>
              <View style={styles.verticalLine}/>
            </View>
            <View style={styles.childContainer}>
              <Image style={styles.imgBottom} source={require('../../image/pp_comments.png')}></Image>
              <Text style={styles.textBottom}>27</Text>
              <View style={styles.verticalLine}/>
            </View>
            <View style={styles.childContainer}>
              {likeImg}
              <Text style={styles.textBottom}>102</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  userContainer: {
    flexDirection: 'row',
    height: 62 * SCREEN_FIT,
    alignItems: 'center',
  },
  fromContainer: {
    flexDirection: 'row',
    marginTop: 5 * SCREEN_FIT,
    marginBottom: 5 * SCREEN_FIT,
  },
  bottomContainer: {
    flexDirection: 'row',
    height: 35 * SCREEN_FIT,
    alignItems: 'center',
  },
  childContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picContainer: {
    flexDirection: 'row',
    marginTop: 5 * SCREEN_FIT,
  },
  icon: {
    width: 40 * SCREEN_FIT,
    height: 40 * SCREEN_FIT,
  },
  img: {
    flex: 1,
  },
  imgBottom: {
    width: 20 * SCREEN_FIT,
    height: 20 * SCREEN_FIT,
  },
  innerContainer: {
    paddingLeft: 10 * SCREEN_FIT,
    paddingRight: 10 * SCREEN_FIT,
    backgroundColor: 'white',
  },
  textName: {
    fontSize: 14,
    color: 'black',
  },
  textCount: {
    fontSize: 10,
    color: '#999999',
  },
  textDesc: {
    fontSize: 16,
    color: 'black',
  },
  textStar: {
    fontSize: 12,
    color: '#333333',
  },
  textCircle: {
    fontSize: 12,
    color: '#0BBE06',
  },
  textBottom: {
    fontSize: 12,
    color: '#333333',
  },
  line: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
  },
  verticalLine: {
    height: 20 / PixelRatio.get(),
    width: 1 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
    marginLeft: 20 * SCREEN_FIT,
  }
});
