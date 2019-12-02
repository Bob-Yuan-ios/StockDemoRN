import React, { Component } from 'react';

import { NewsFlatItem } from '../../component/newsflatItem';
import BaseFlatList from '../../component/common/BaseFlatList';


export default class TradeScreen extends Component{

    render() {
         return (
            <BaseFlatList
                ItemCom = {NewsFlatItem}
            />
        );
    }
}
