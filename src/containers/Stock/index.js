import React, { Component } from 'react';

import {
    View,
    FlatList,
} from 'react-native';

import { StockFlatItem } from '../../component/stockflatItem';
import { BaseFlatListFooter } from '../../component/common/BaseFlatListFooter';


export default class StockScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            refreshing: false,
            isFooterLoading: false,
            reachLast: false,

            dataArr: [
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
            ]
        };

    }

    _keyExtractor = (item, index) => index + "";


    _onPressItem = () => {
        alert('This is a button!');
    };

    // prop传递参数
    _renderItem = ({item}) => {
        return (
            <StockFlatItem
                {...item}
                id={item.id}
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
        return (
            <View style = {{backgroundColor:'#1234fa', height: '100%'}}>
                <FlatList
                    keyExtractor = {this._keyExtractor}
                    style = {{backgroundColor:'gray'}}
                    data = {state.dataArr}
                    renderItem = {this._renderItem}
                    refreshing = {state.refreshing}
                    onRefresh = {this._onRefreshData}
                    onEndReached = {this._onEndReached}
                    onEndReachedThreshold = {0.01}
                    ListFooterComponent = {this._footerComponent}
                >
                </FlatList>
            </View>
        );
    }


    // 上拉刷新
    _onRefreshData = () => {
        console.log('触发顶部刷新...');

        this.setState({
            refreshing: true,
            reachLast: false,
        });


        setTimeout(() => {
            let dataNewArray = [
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
            ]
            this.setState({
                dataArr: dataNewArray,
                refreshing: false,
            })

        }, 1500);
    }

    // 下拉加载更多
    _onEndReached = () => {

        console.log('触发尾部刷新...');

        //如果数据加载完成，则直接结束；具体根据返回数据的最后一条标示判断
        if (true === this.state.reachLast) return;

        this.setState({
            isFooterLoading: true,
        });

        setTimeout(() => {
            let dataNewArray = [
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
                {titleCon: 'asf', subCon: '28.19'},
                {titleCon: 'asf', subCon: '3.84'},
                {titleCon: 'asf', subCon: '30.49'},
            ]

            this.setState({
                dataArr: dataNewArray,
                isFooterLoading: false,
                reachLast: true
            })

        }, 2000);
    }
}
