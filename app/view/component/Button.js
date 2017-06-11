import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPressOut={this.props.onClickFun}>
        <View style={[{overflow: 'hidden', alignItems:'center', justifyContent:'center',}, this.props.buttonStyle]}>
          <Text allowFontScaling = {false} style={this.props.textStyle}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

module.exports = Button;
