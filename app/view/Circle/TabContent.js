import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, Image, Button, FlatList, PixelRatio, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CircleJoinedItem from './CircleJoinedItem';
import CIrcleRecomItem from './CircleRecomItem';
import SeparatorComponent from '../component/SeparatorComponent';
import HeaderComponent from '../component/HeaderComponent';
import FooterComponent from '../component/FooterComponent';

const TAG = "TabContent: ";
export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
    this._reachEnd = this._reachEnd.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }
  _onRefresh() {
    console.log(TAG + "_onRefresh");
  }
  _reachEnd() {
    console.log(TAG + "_reachEnd");
  }
  _renderItem(item) {
    if (this.props.tabTag === '已加入') {
      return <CircleJoinedItem key={item.key}/>;
    } else if (this.props.tabTag === '感兴趣') {
      return <CIrcleRecomItem key={item.key}/>;
    }
  }
  render() {
    let data = [1, 2, 3, 4];
    let header;
    if (this.props.tabTag === '已加入') {
      header='我的圈子';
      //data=this.state.data.;
    } else if (this.props.tabTag === '感兴趣') {
      header='推荐圈子';
      //data=this.state.data.;
    }
    console.log(TAG+"33333");
    return(
      <View>
        <FlatList
    data={data}
    keyExtractor={(item, index) => index}
    refreshing={false}
    onRefresh={this._onRefresh}
    onEndReached={this._reachEnd}
    ItemSeparatorComponent={()=><SeparatorComponent padding={1}/> }
    ListHeaderComponent={()=><HeaderComponent header={header}/>}
    ListFooterComponent={()=><FooterComponent footer={'查看全部'}/>}
    renderItem={(index,item) => this._renderItem(index,item)}
    >
        </FlatList>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'red',
    marginTop:100,
    overflow: 'hidden'
  },
});
