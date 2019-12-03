import React, { Component } from 'react';

import {
    View,
    FlatList
} from 'react-native';

import { BaseFlatListFooter } from './BaseFlatListFooter';
import {
    getNewsList,
    NEWS_LIST_TYPE_CAI_JING
} from '../../interfaces/network/ICNews';


export default class BaseFlatList extends Component{

    constructor(props){
        super(props);

        this.state = {
            refreshing: false,
            isFooterLoading: false,
            reachLast: false,
            pageNum: 1,
            dataArr: []
        };


        setTimeout(()=>{
            this.updateNews().then().catch();
        }, 1000);
    }


    UNSAFE_componentWillUpdate(props){

        //因为状态更新，导致多触发刷新
        if (this.state.refreshing){
            this.setState({
                refreshing: false
            });
            return;
        }

        if (this.state.isFooterLoading){
            this.setState({
                isFooterLoading: false
            });
        }
    }

    _keyExtractor = (item, index) => index + "";


    _onPressItem = (props) => {
        console.log('catch click Component info:' + JSON.stringify(props));
    };

    // prop传递参数
    _renderItem = ({item}) => {
        const  ItemCom = this.props.ItemCom;
        console.log('...item' + JSON.stringify(item));

        return (
            <ItemCom
                {...item}
                onPressItem={this._onPressItem}
            />
        )
    }

    _footerComponent = () => {

        const props = {
            isFooterLoading : this.state.isFooterLoading,
            reachLast : this.state.reachLast,
        };

        return (
            <BaseFlatListFooter
                {...props}
            />
        )
    }

    render() {
        const state = this.state;
        const dataArr = state.dataArr || [];

        const show = false;

        return (
            <View style = {{height: '100%'}}>
                <FlatList
                    keyExtractor = {this._keyExtractor}
                    data = {dataArr}
                    renderItem = {this._renderItem}
                    refreshing = {state.refreshing}
                    onRefresh = {this._onRefreshData}
                    onEndReached = {this._onEndReached}
                    onEndReachedThreshold = {0.01}
                    ListFooterComponent = {show ? this._footerComponent : <View/>}
                >
                </FlatList>
            </View>
        );
    }


    // 上拉刷新
    _onRefreshData = () => {

        let pageNum = 1;
        this.setState({
            refreshing: true,
            reachLast: false,
            pageNum,
        });

        console.log('... ' + JSON.stringify(this.props));
        this.updateNews().then().catch();
    }

    // 下拉加载更多
    _onEndReached = () => {

        // //如果数据加载完成，则直接结束；具体根据返回数据的最后一条标示判断
        // if (true === this.state.reachLast) return;
        //
        // let pageNum = this.state.pageNum;
        // pageNum = pageNum + 1;
        //
        // this.setState({
        //     isFooterLoading: true,
        //     pageNum
        // });
        //
        // this.updateNews().then().catch();
    }

    updateNews = async () =>{


        let res = null;

        const params = this.props.params;

        if (params === undefined || params.requestMethod === undefined) return;

        console.log('params...' + JSON.stringify(params));

        switch (params.requestMethod){
            case 'NewsList':{
                res = await getNewsList(NEWS_LIST_TYPE_CAI_JING);
                break;
            }
            default:
                break;
        }

        // UI上面的显示
        if (0 === res.status){
            this.setState({
                refreshing: false,
                dataArr: res.object,
                errTip: ''
            });
        } else {
            this.setState({
                refreshing: false,
                dataArr: [],
                errTip: res.object
            });
        }
    }
}

