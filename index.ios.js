/** * Sample React Native App * https://github.com/facebook/react-native * @flow */import React, { Component } from 'react';import {    AppRegistry,    StyleSheet,    Text,    View ,    Image} from 'react-native';var BadgeData = require('./BadgeData.json');var Dimensions = require('Dimensions');var {width}  = Dimensions.get('window');// 定义一些全局变量var cols = 3;var boxW = 100 ;var vMargin = (width - cols * boxW)/(cols + 1);var hMargin = 25;class BViewDemo extends Component {  render() {    return (        <View style={styles.container}>          {this.renderAllBadge()}        </View>    );  }  renderAllBadge() {    var allBadge = [];    for(var  i =0;i<BadgeData.data.length;i++){      var badge = BadgeData.data[i];      allBadge.push(          <View key={i} style={ styles.outViewStyle }>            <Image source={{uri:badge.icon}} style={styles.imageStyle } />            <Text style={ styles.titleStyle } > {badge.title} </Text>          </ View>      );    }    return allBadge;  }}const styles = StyleSheet.create({  container: {    //flex:1,    //backgroundColor:'#F5FCFF',    // 确定主轴的方向    flexDirection:'row' ,    //换行显示    flexWrap:'wrap'  },  outViewStyle:{    backgroundColor:'red',    // 侧轴对齐方式    alignItems:'center' ,    width:boxW ,    height:boxW ,    marginLeft: vMargin ,    marginTop: hMargin  },  imageStyle:{    width:80,    height:80  },  titleStyle:{  marginTop:1  }});AppRegistry.registerComponent('BViewDemo', () => BViewDemo);