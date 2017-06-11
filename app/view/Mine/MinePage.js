import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, Image, Button, PixelRatio, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabContent from '../Circle/TabContent';
import Dimensions from 'Dimensions';

// 标注图是720宽度
const SCREEN_FIT = Dimensions.get('window').width / 360;
class MinePage extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '我的',
    // tabBar: {
    //   label: '我的',
    //   icon: ({tintColor}) => (
    //     <Image
    //     source={require('../image/pp_mine.png')}
    //     style={[styles.icon, {
    //       tintColor: tintColor
    //     }]}
    //     />
    //   ),
    // },
    // header: {
    //   style: {
    //     backgroundColor: 'white'
    //   }
    // }
  }
  render() {
        let titles = ['享美食', '住酒店', '爱玩乐', '全部']
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠', '成人情趣'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '大宝剑', '电影院', '美发', '美甲'],
            []
        ]

        return (
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
            // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
            >
                {titles.map((title, i) => (
                    <TabContent
                        tabLabel={titles[i]}
                        key={i}
                        types={types[i]}
                        navigation={this.props.navigation} />
                ))}
            </ScrollableTabView>
        );
    }
  // render() {
  //   let tabNames = ['已加入', '感兴趣'];
  //   return (
  //     <View>
  //     <View style={styles.line}/>
  //     <ScrollableTabView
  //       style={styles.container}
  //       tabBarBackgroundColor='white'
  //       tabBarActiveTextColor='#0BBE06'
  //       tabBarInactiveTextColor='#555555'
  //       tabBarTextStyle={styles.tabBarText}
  //       tabBarUnderlineStyle={styles.tabBarUnderline}
  //     >
  //     {tabNames.map((item, i) => (
  //       <TabContent tabLabel={item} key={i}/>
  //     ))}
  //     </ScrollableTabView>
  //
  //     </View>
  //     );
  // }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20 * SCREEN_FIT,
  },
  icon: {
    height: 30 * SCREEN_FIT,
    width: 30 * SCREEN_FIT,
    bottom: 3 * SCREEN_FIT,
  },
  line: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
  },
});
export default MinePage;
