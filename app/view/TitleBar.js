import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Dimensions from 'Dimensions'
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width/360;
export default class LoginPage extends Component {
  constructor(props){
    super(props);

  }
