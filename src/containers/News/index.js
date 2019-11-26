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

import { connect } from 'react-redux'
import { accInfo } from '../../models/Account';
import { getMovies } from '../../interfaces/network/ICAccount';


class NewsScreen extends Component{

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
                    onPress={() => {
                        this.updateAccount();
                    }}
                />
            </View>
        );
    }


    updateAccount = () => {
        // this.props.update({
        //     ...accInfo,
        //     favorUrl: 'www.baidu.com'
        // });
        this.props.update();
    }
}

const mapStateToProps = state => {
    return {
        accInfo: state.account,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // update: (info) => dispatch(updateBalanceInfo(info)),
        update: () => dispatch(dispatch(getMovies())), //中间件，执行对store进行dispatch封装
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsScreen)
