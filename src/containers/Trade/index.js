import React, { Component } from 'react';

import { NewsFlatItem } from '../../component/newsflatItem';
import BaseFlatList from '../../component/common/BaseFlatList';


export default class TradeScreen extends Component{



    render() {
        const  params =  {requestMethod:'NewsList'};
         return (
            <BaseFlatList
                params = {params}
                ItemCom = {NewsFlatItem}
            />
        );
    }
}
