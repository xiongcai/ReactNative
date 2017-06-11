import React, { Component } from 'react';
import { StyleSheet, Navigator, Text, Image, Button, FlatList, PixelRatio, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PicTextFeed from '../component/PicTextFeed';
import SeparatorComponent from '../component/SeparatorComponent';
import CircleItem from '../component/CircleItem';
import HeadlineInfoPage from './HeadlineInfoPage';

const TAG = "Headline:";
export default class HeadlinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
    this._reachEnd = this._reachEnd.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._onItemClick = this._onItemClick.bind(this);
  }

  static navigationOptions = {
    title: '看点',
  }

  _onRefresh() {
    console.log(TAG + "_onRefresh");
  }
  _reachEnd() {
    console.log(TAG + "_reachEnd");
  }
  _renderItem(index,item) {
    return <PicTextFeed key={index} onItemClick={this._onItemClick}/>;
  }
  _onItemClick() {
    console.log(TAG+"_onItemClick");
    const {navigate} = this.props.navigation;
    navigate('HeadlineInfoPage');
  }
  render() {
    let data = [1, 2, 3, 4];
    return (
      <View>
        <View style={styles.line}/>
          <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      refreshing={false}
      onRefresh={this._onRefresh}
      onEndReached={this._reachEnd}
      ItemSeparatorComponent={()=><SeparatorComponent padding={20}/>}
      //ListHeaderComponent={HeaderComponent}
      //ListFooterComponent={FooterComponent}
      renderItem={(index,item) => this._renderItem(index,item)}
      >
          </FlatList>
       </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#e7e7e7',
  },
})
