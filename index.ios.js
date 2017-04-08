import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import RootApp from './app/root';
import App from './app/app';
import LoginPage from './app/view/LoginPage';
AppRegistry.registerComponent('AnimatedTest', () => App);



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  Easing,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

export default class AnimatedTest extends Component {
  constructor(props){
    super(props);
    this.spinValue = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.springValue = new Animated.Value(0.3);

    //parallel
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);

  }
  componentDidMount(){
    this.spin();
    this.animate();
    this.spring();
    this.animateTogether();
  }
  spin(){
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue,
    {
      toValue:1,//终值
      duration:500,//一次动画的持续时间
      easing:Easing.liner,//缓冲函数如：linear, ease, quad, cubic, sin, elastic, bounce, back, bezier, in, out, inout
      //delay://延迟执行的时间
    }).start(()=>this.spin())
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }
  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        /**
         * tension(number), 和 friction (number)
         * toValue (number), overshootClamping (boolean),
         * restDisplacementThreshold (number), restSpeedThreshold (number),
         * velocity (number), bounciness (number), speed (number)
         *//*
        toValue: 1,//必选
        friction: 1
      }
    ).start()
  }
  animateTogether(){
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
    ]).start();
  }
  render() {
    const spin=this.spinValue.interpolate({
      inputRange:[0,1],
      outputRange:['0deg','360deg']
    });
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    });

    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    })
    const spinText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    const introButton = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 400]
    })
    return (
      <View style={styles.container}>
        <Animated.View
         style={{
           marginLeft,
           height: 30,
           width: 40,
           backgroundColor: 'red'}} />
        <Animated.View
       style={{
         opacity,
         marginTop: 10,
         height: 30,
         width: 40,
         backgroundColor: 'blue'}} />
       <Animated.View
       style={{
         marginLeft: movingMargin,
         marginTop: 10,
         height: 30,
         width: 40,
         backgroundColor: 'orange'}} />
       <Animated.Text
       style={{
         fontSize: textSize,
         marginTop: 10,
         color: 'green'}} >
         Animated Text!
       </Animated.Text>
       <Animated.View
       style={{
         transform: [{rotateX}],
         marginTop: 50,
         height: 30,
         width: 40,
         backgroundColor: 'black'}}>
       <Text style={{color: 'white'}}>Hello from TransformX</Text>
       </Animated.View>
       <Text
       style={{marginBottom: 100}}
       onPress={this.spring.bind(this)}>Spring</Text>
       <Animated.Image
         style={{
           width:227,
           height:200,
           transform:[{rotate:spin},{scale: this.springValue}]
         }}
         source={{uri:'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        <Animated.View
        style={{ transform: [{scale: scaleText}] }}>
        <Text>Welcome</Text>
        </Animated.View>
        <Animated.View
        style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
        <Text
          style={{fontSize: 20}}>
          to the App!
        </Text>
        </Animated.View>
        <Animated.View
        style={{top: introButton, position: 'absolute'}}>
          <TouchableHighlight
            onPress={this.animateTogether.bind(this)}
            style={styles.button}>
            <Text
              style={{color: 'white', fontSize: 20}}>
              Click Here To Start
            </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    backgroundColor:'green',
  }
});

AppRegistry.registerComponent('AnimatedTest', () => AnimatedTest);*/
