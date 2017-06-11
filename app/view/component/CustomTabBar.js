//component has goToPage, tabs, activeTab and refimport React, { Component } from 'react';
import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  Image,
  Button,
  PixelRatio,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Dimensions from 'Dimensions';

// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width/360;

export default class CustomTabBar extends Component {
  render(){
    return(
      <View>
        <Text>qqq</Text>
      </View>
    );
  }
}
