/*  ********** 参数传递 ************
 *  1、路由跳转：传递参数
 *  2、父子组件：props
 *  3、通知
 *  4、react-redux
 *  ******************************* */

import React, { Component } from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';


export default class NewsScreen extends Component{

    constructor(props){
        super(props);
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('NewsDetail', {
                            itemId: '86',
                            params: {uId:"123"},
                        });
                    }}
                />
            </View>
        );
    }
}
