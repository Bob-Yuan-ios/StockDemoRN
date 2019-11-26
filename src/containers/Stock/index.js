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

    _keyExtractor = (item, index) => index + "";


    _onPressItem = (props) => {
        console.log('catch click item info:' + JSON.stringify(props));
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

        console.log('dataArr.....' + dataArr.length);
        return (
            <View style = {{backgroundColor:'#1234fa', height: '100%'}}>
                <FlatList
                    keyExtractor = {this._keyExtractor}
                    style = {{backgroundColor:'gray'}}
                    data = {dataArr}
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

        let pageNum = 1;
        this.setState({
            refreshing: true,
            reachLast: false,
            pageNum,
        });

        this.props.loadStockList(pageNum);

        setTimeout(() => {
            this.setState({
                refreshing: false,
            })

        }, 1500);
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

        setTimeout(() => {

            this.setState({
                isFooterLoading: false,
            })

        }, 2000);
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

