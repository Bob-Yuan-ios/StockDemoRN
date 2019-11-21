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

import { connect } from 'react-redux'
import { updateBalanceInfo } from '../../actions/Account';

import { accInfo } from '../../models/Account';

class NewsScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            accInfo
        };
    }

    componentDidUpdate(props){
        //this.preProps
    }

    UNSAFE_componentWillUpdate(props){
        // this.props
        alert(JSON.stringify(props.accInfo));
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
        this.props.update({
            ...accInfo,
            favorUrl: 'www.baidu.com'
        });
    }
}

const mapStateToProps = state => {
    return {
        accInfo: state.account,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: (info) => dispatch(updateBalanceInfo(info)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsScreen)
