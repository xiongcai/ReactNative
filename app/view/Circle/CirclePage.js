import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, Image, Button, PixelRatio, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { StackNavigator } from 'react-navigation';
import TabContent from './TabContent';

export default class CirclePage extends Component {
  constructor(props) {
    super(props);

  }
  static navigationOptions = {
    title:'圈子',
  // ({ navigation }) => ({
    //  headerRight: (
    //      <TouchableOpacity style={styles.searchBar}>
     //
    //          <Text style={{ fontSize: 15, color: '#333333' }}> 返回</Text>
    //      </TouchableOpacity>
    //  ),
    //  headerLeft: (
    //      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
     //
    //          <Text style={{ fontSize: 15, color: '#333333' }}> 福州 鼓楼</Text>
    //      </TouchableOpacity>
    //  ),
    //  headerStyle: { backgroundColor: 'white' },
 // })
  };
  render() {
    let tabNames = ['已加入', '感兴趣'];
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarBackgroundColor='white'
        tabBarActiveTextColor='#0BBE06'
        tabBarInactiveTextColor='#555555'
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
      >
      {tabNames.map((item, i) => (
        <TabContent tabLabel={item} key={i} tabTag={item}/>
      ))}
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
   },
  tabBarUnderline: {
    backgroundColor: '#0BBE06',
    //width: 20,
    height: 1,
  },
  tabBarText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 13,
  },
  line: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
  },
});
