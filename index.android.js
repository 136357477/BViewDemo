/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View ,
} from 'react-native';

export class BViewDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor:'red' ,height:30}}>第1个</Text>
                <Text style={{backgroundColor:'green',height:40}}>第二个</Text>
                <Text style={{backgroundColor:'blue',height:50}}>第三个</Text>
                <Text style={{backgroundColor:'yellow',height:60}}>第四个</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'purple',
        //主轴方向
        flexDirection:'row',
        marginTop:25 ,
        // 主轴对齐方式
        justifyContent:'space-around',
        //侧轴对齐方式
        alignItems:'center'
    }
});

export class BViewDemo2 extends Component {
    render() {
        return (
            <View style={styles1.container}>
                <Text style={{backgroundColor:'red' , width:80 }}>第一个</Text>
                <Text style={{backgroundColor:'green', width:90}}>第二个</Text>
                <Text style={{backgroundColor:'blue', width:100}}>第三个</Text>
                <Text style={{backgroundColor:'yellow', width:110}}>第四个</Text>
            </View>
        );
    }
}
const styles1 = StyleSheet.create({
    container: {
        backgroundColor:'purple',
        //主轴方向
        flexDirection:'row',
        marginTop:25 ,
        // 主轴对齐方式
        justifyContent:'flex-start',
        //侧轴对齐方式
        alignItems:'center' ,
        flexWrap:'wrap'
    }
});

export class BViewDemo3 extends Component {
    render() {
        return (
            <View style={styles2.container}>
                <Text style={{backgroundColor:'red' , flex:1 ,height:60,alignSelf:'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor:'green', flex:2,height:70,alignSelf:'flex-end'}}>第二个</Text>
                <Text style={{backgroundColor:'blue',flex:2,height:80}}>第三个</Text>
                <Text style={{backgroundColor:'yellow',flex:1,height:90}}>第四个</Text>
            </View>
        );
    }
}
const styles2 = StyleSheet.create({
    container: {
        backgroundColor:'purple',
        //主轴方向
        flexDirection:'row',
        marginTop:25 ,
        // 主轴对齐方式
        justifyContent:'flex-start',
        //侧轴对齐方式
        alignItems:'center'
    }
});

// 引入外部类库
var Dimensions = require('Dimensions');
export class BViewDemo4 extends Component {
    render() {
        return (
            <View style={styles3.outViewStyle}>
                <Text>
                    当前屏幕宽度:{Dimensions.get('window').width}
                </Text>
                <Text>
                    当前屏幕高度:{Dimensions.get('window').height}
                </Text>
                <Text>
                    当前屏幕分辨率:{Dimensions.get('window').scale}
                </Text>
            </View>
        );
    }
}
const styles3 = StyleSheet.create({
    outViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center' ,
        backgroundColor:'red'
    }
});


AppRegistry.registerComponent('BViewDemo', () => BViewDemo4);
