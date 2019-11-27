/*  ********** 参数传递 ************
 *  1、路由跳转：传递参数
 *  2、父子组件：props
 *  3、通知
 *  4、react-redux
 *  ******************************* */

import React, { Component } from 'react';

import {
    View,
    Button
} from 'react-native';

import { getMovies } from '../../interfaces/network/ICAccount';

export default class NewsScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            accInfo: {}
        };
    }

    componentDidUpdate(props){
        //this.preProps
        console.log('componentDidUpdate...' + JSON.stringify(props.accInfo));
    }

    UNSAFE_componentWillUpdate(props){
        // this.props
        console.log('UNSAFE_componentWillUpdate...' + JSON.stringify(props.accInfo));
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="refresh"
                    onPress={this.updateAccount}
                />
            </View>
        );
    }

    // 通过箭头函数，绑定this
    // 可实现UI上的加载刷新
    updateAccount = async () => {

        this.setState({
            refresh: true
        });

        let res = await getMovies();

        let model = {};
        if (0 === res.status) model = res.object;

        this.setState({
            refresh: false,
            accInfo: model
        });

        console.log('.... update account:' + JSON.stringify(res));
    }
}


