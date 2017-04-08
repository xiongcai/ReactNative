import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import MainPage from './view/MainPage';
import LoginPage from './view/LoginPage';
import HeadlinePage from './view/HeadlinePage';
import PublishPage from './view/PublishPage';
import CirclePage from './view/CirclePage';
import MinePage from './view/MinePage';
  const App = TabNavigator({
    HeadlinePage:{screen:HeadlinePage},
    PublishPage:{screen:PublishPage},
    CirclePage:{screen:CirclePage},
    MinePage:{screen:MinePage},
  },
  {
    tabBarOptions: {
    activeTintColor: '#e91e63',
    tabBarPosition:'bottom',
    },
  });
  export default ()=><App/>;
  // export default class App extends Component{
  //   constructor(props){
  //     super(props);
  //
  //   }
  /*属性获取指定路由对象的配置信息，从而改变场景的动画或者手势
  *一个是当前的路由，一个是当前的路由栈
  *//*
  configureScene(route,routeStack){
    return Navigator.SceneConfigs.PushFromRight;
  }
  //导航栏可以根据指定的路由来渲染场景
  renderScene(route,navigator){
    //route里其实就是我们传递的name,page
    let Page = route.page;
    return <Page {...route.params} navigator={navigator}/>;
  }
  render(){
    let defaultName = 'MainPage';
    let defaultPage = MainPage;
    let initialRoute={
      name: defaultName,
      page: defaultPage,
    }
    return(
      <Navigator
        ref={view=>this.navigator=view}
        initialRoute={initialRoute}//启动时加载的路由,默认initialRouteStack中最后一项
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        />
    );
  }*/
//}
