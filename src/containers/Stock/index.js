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
            opacity: 0,
            refreshing: false,
            isFooterLoading: false,
            dataArr: [
                {titleCon: '万科A(000001)', subCon: '23.12'},
                {titleCon: '京东方(000002)', subCon: '3.91'},
                {titleCon: '中心通讯(000003)', subCon: '32.16'}
            ]
        };

    }

    _keyExtractor = (item, index) => index + "";


    _onPressItem = (id: string) => {
        alert('This is a button!' + id);
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

    render() {
        const state = this.state;
        return (
            <View style={{backgroundColor:'#1234fa'}}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    style = {{backgroundColor:'gray', height:'100%'}}
                    data = {state.dataArr}
                    renderItem = {this._renderItem}
                    onScroll = {(e)=>{this.onScroll(e)}}
                    refreshing = {state.refreshing}
                    onRefresh = {this.loadData}
                >
                </FlatList>
            </View>
        );
    }



    loadData = () => {
        this.setState({
            refreshing: true
        });


        setTimeout(() => {
            let dataNewArray = [
                {titleCon: '万科A(000001)', subCon: '23.12'},
                {titleCon: '京东方(000002)', subCon: '3.91'},
                {titleCon: '中心通讯(000003)', subCon: '32.16'},
                {titleCon: '万科A(000004)', subCon: '23.12'},
                {titleCon: '京东方(000005)', subCon: '3.91'},
                {titleCon: '中心通讯(000006)', subCon: '32.16'}
            ]
            this.setState({
                dataArr: dataNewArray,
                refreshing: false,
            })

        }, 1500);
    }

    _onEndReached(){
        this.setState({
            isFooterLoading: true
        });

        setTimeout(() => {
            let dataNewArray = [
                {titleCon: '万科A(000001)', subCon: '23.12'},
                {titleCon: '京东方(000002)', subCon: '3.91'},
                {titleCon: '中心通讯(000003)', subCon: '32.16'},
                {titleCon: '万科A(000004)', subCon: '23.12'},
                {titleCon: '京东方(000005)', subCon: '3.91'},
                {titleCon: '中心通讯(000006)', subCon: '32.16'},
                {titleCon: '万科A(000007)', subCon: '23.12'},
                {titleCon: '京东方(000008)', subCon: '3.91'},
                {titleCon: '中心通讯(000009)', subCon: '32.16'}
            ]
            this.setState({
                dataArr: dataNewArray,
                isFooterLoading: false
            })
        }, 2000);
    }



    onScroll = (e) => {
        let offsetY = e.nativeEvent.contentOffset.y;
        if(offsetY < 10){
            this.setState({
                opacity: 0
            })
        }else if(offsetY <= 70 && offsetY >= 10){
            this.setState({
                opacity: offsetY/100
            })
        }else{
            this.setState({
                opacity: 1
            })
        }
    }
}


// ListFooterComponent={<BaseFlatListFooter {...state}/>}
// onEndReached={()=>{
//     this._onEndReached();
// }}
