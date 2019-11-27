import React, { Component } from 'react';

import {
    View,
    FlatList
} from 'react-native';

import {
    NewsFlatItem
} from '../../component/newsflatItem';

import {
    getNewsList,
    NEWS_LIST_TYPE_CAIJING
} from '../../interfaces/network/ICNews';

export default class NewsScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            refreshing: false,
            dataArr: []
        };

        setTimeout(()=>{
            this.updateNews();
        }, 1000);
    }

    _keyExtractor = (item, index) => index + "";

    _onPressItem = (props) => {
        console.log('catch click NewsFlatItem info:' + JSON.stringify(props));
        this.props.navigation.navigate('NewsDetail',
            {
                url: props.url,
                title: props.title
            });
    };

    // prop传递参数
    _renderItem = ({item}) => {
        return (
            <NewsFlatItem
                {...item}
                onPressItem={this._onPressItem}
            />
        )
    }

    render() {
        const dataArr = this.state.dataArr || [];
        console.log('dataArr.....' + dataArr.length);
        return (
            <View style = {{height: '100%'}}>
                <FlatList
                    data = {dataArr}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                >
                </FlatList>
            </View>
        );
    }


    // 数据只在此页面使用，使用普通的数据刷新　
    updateNews = async () => {

        this.setState({
            refreshing: true
        });

        let res = await getNewsList(NEWS_LIST_TYPE_CAIJING);

        let model = {};

        // UI上面的显示
        if (0 === res.status) model = res.object;

        this.setState({
            refreshing: false,
            dataArr: model
        });
    }
}


