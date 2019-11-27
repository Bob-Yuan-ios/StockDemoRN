import React, { Component } from 'react';

import {
    View,
    FlatList,
} from 'react-native';

import { StockFlatItem } from '../../component/stockflatItem';
import { BaseFlatListFooter } from '../../component/common/BaseFlatListFooter';

import { connect } from 'react-redux';
import { getStockList } from '../../interfaces/network/ICStock';

class StockScreen extends Component{

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
            this._onRefreshData();
        }, 1000);
    }

    UNSAFE_componentWillUpdate(props){

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
        console.log('catch click StockFlatItem info:' + JSON.stringify(props));
    };

    // prop传递参数
    _renderItem = ({item}) => {
        return (
            <StockFlatItem
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
        const dataArr = this.props.dataArr || this.state.dataArr;

        const show = dataArr.length;

        console.log('dataArr.....' + dataArr.length);
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
        console.log('触发顶部刷新...');

        let pageNum = 1;
        this.setState({
            refreshing: true,
            reachLast: false,
            pageNum,
        });

        this.props.loadStockList(pageNum);
    }

    // 下拉加载更多
    _onEndReached = () => {

        console.log('触发尾部刷新...');

        //如果数据加载完成，则直接结束；具体根据返回数据的最后一条标示判断
        if (true === this.state.reachLast) return;

        console.log('加载更多数据...');

        let pageNum = this.state.pageNum;
        pageNum = pageNum + 1;

        this.setState({
            isFooterLoading: true,
            pageNum
        });

        this.props.loadStockList(pageNum);
    }
}

const mapStateToProps = state => {
    return {
        dataArr: state.stockList.symbol
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadStockList : (pageNum) => dispatch(dispatch(getStockList(pageNum))),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockScreen)

