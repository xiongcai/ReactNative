import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  PropTypes,
  PixelRatio,
  View,
} from 'react-native';
import Dimensions from 'Dimensions';
// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width/360;
export default class AutoExpandTextInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height:this.props.initalHeight,
      maxHeight: this.props.maxHeight,
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === '') {
      this.setState({
        text: event.nativeEvent.text,
        height: this.props.minHeight,
      });
    }
  }

  _onChange = (event) => {
    let curHeight = event.nativeEvent.contentSize.height;
    if (curHeight < this.props.minHeight || curHeight > this.state.maxHeight) return;
    if (this.state.height !== curHeight) {
      if (this.props.onChangeHeight) {
        this.props.onChangeHeight(this.state.height, curHeight);
      }
    }
    this.setState({
      height: curHeight,
    });
  }
  render() {
    return (
      <TextInput
        {...this.props}
        multiline={true}
        autoCorrect={true}
        onChange={this._onChange}
        onChangeText={(text) => {
          this.setState({text});
        }}
        style={[styles.default, this.props.style,{height:this.state.height}]}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  default: {
    textAlignVertical:'center',
    paddingBottom:5*SCREEN_FIT,
    //paddingTop:5*SCREEN_FIT,
  },
});
