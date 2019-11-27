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

import { accInfo } from '../../models/Account';
import { getMovies } from '../../interfaces/network/ICAccount';

export default class NewsScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            accInfo
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



    updateAccount = async function getMovies1() {
        let res = await getMovies();
        console.log('.... update account' + JSON.stringify(res));
    }
}


