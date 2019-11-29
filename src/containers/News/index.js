import React, { Component } from 'react';

import {
    View,
    Text,
    FlatList
} from 'react-native';

import {
    NewsFlatItem
} from '../../component/newsflatItem';

import {
    getNewsList,
    NEWS_LIST_TYPE_CAI_JING,
    NEWS_LIST_TYPE_KE_JI,
    NEWS_LIST_TYPE_TOU_TIAO,
    NEWS_LIST_TYPE_YU_LE
} from '../../interfaces/network/ICNews';


export default class NewsScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            refreshing: false,
            dataArr: [],
            errTip: 'No Data...'
        };

        setTimeout(()=>{
            this.updateNews();
        }, 1000);
    }

    _keyExtractor = (item, index) => index + "";

    _onPressItem = (props) => {
        console.log('catch click news flat item info:' + JSON.stringify(props));
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
        const errTip = this.state.errTip;
        console.log('errTip.....' + errTip);
        return (
            <View style = {{height: '100%', justifyContent:'center', alignItems: 'center'}}>
                {
                    dataArr.length ?

                        <FlatList
                            data = {dataArr}
                            renderItem = {this._renderItem}
                            keyExtractor = {this._keyExtractor}
                        >
                        </FlatList>

                        :

                        <Text style={{fontSize: 30, color: 'red'}}>
                            {errTip}
                        </Text>
                }

            </View>
        );
    }

    getType = () => {
        let key = this.props.navigation.state.key;
        let relDic = {
            "财经" : NEWS_LIST_TYPE_CAI_JING,
            "科技" : NEWS_LIST_TYPE_KE_JI,
            "头条" : NEWS_LIST_TYPE_TOU_TIAO,
            "娱乐" : NEWS_LIST_TYPE_YU_LE,
        }

        return relDic[key] || '';
    }

    // 数据只在此页面使用，使用普通的数据刷新　
    updateNews = async () => {

        // let type = this.getType();
        // console.log('updateNews....:' + type);
        // if (!type.length || NEWS_LIST_TYPE_TOU_TIAO !== type) return;
        //
        // this.setState({
        //     refreshing: true
        // });
        //
        // let res = await getNewsList(type);
        //
        //
        // // UI上面的显示
        // if (0 === res.status){
        //     this.setState({
        //         refreshing: false,
        //         dataArr: res.object,
        //         errTip: ''
        //     });
        // } else {
        //     this.setState({
        //         refreshing: false,
        //         dataArr: [],
        //         errTip: res.object
        //     });
        // }

    }
}


