import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import TabBarItem from './view/TabBarItem';

import HeadlinePage from './view/Headline/HeadlinePage';
import PublishPage from './view/Publish/PublishPage';
import CirclePage from './view/Circle/CirclePage';
import MinePage from './view/Mine/MinePage';

import CircleInfoPage from './view/Circle/CircleInfoPage';

const lightContentScenes = ['Headline', 'Mine'];
const Tab = TabNavigator({
  Headline:{
      screen:HeadlinePage,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '看点',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./image/pp_headline.png')}
            selectedImage={require('./image/pp_headline.png')}
          />
        )
      }),
      labelStyle:{marginBottom:3},
      style:{marginBottom:3},
      tabStyle:{marginBottom:3}
    },
  Publish:{
      screen:PublishPage,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '发布',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./image/pp_publish.png')}
            selectedImage={require('./image/pp_publish.png')}
          />
        )
      }),
    },
  Circle:{
      screen:CirclePage,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '圈子',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./image/pp_circle.png')}
            selectedImage={require('./image/pp_circle.png')}
          />
        )
      }),
    },
  Mine:{
      screen:MinePage,
     navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./image/pp_mine.png')}
            selectedImage={require('./image/pp_mine.png')}
          />
        )
      }),
    },
},
 {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#0bbe06',
    inactiveTintColor: '#979797',
    style: { backgroundColor: '#ffffff',paddingBottom:5 },
  },
 }
);

const Navigator = StackNavigator({
  Tab: { screen: Tab },
  CircleInfoPage: { screen: CircleInfoPage },
},
{
  navigationOptions: {
  headerStyle: { backgroundColor: '#ffffff',marginTop:-10, },
  headerBackTitle: null,
  headerTintColor: '#333333',
  showIcon: true,
  },
});

export default class App extends Component{
  constructor(props){
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getCurrentRouteName(route);
    }
    return route.routeName;
  }

  render(){
    return(
      <Navigator
        onNavigationStateChange={
          (prevState, currentState) => {
             const currentScene = ()=>this.getCurrentRouteName(currentState);
             const previousScene = ()=>this.getCurrentRouteName(prevState);
             if (previousScene !== currentScene) {
               if (lightContentScenes.indexOf(currentScene) >= 0) {
                 StatusBar.setBarStyle('light-content');
               } else {
                 StatusBar.setBarStyle('dark-content');
              }
            }
          }
        }
      />
    );
  }
}
