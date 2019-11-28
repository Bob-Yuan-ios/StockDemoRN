import React, { Component } from 'react';

import {
    View
} from 'react-native';

export default class TradeScreen extends Component{

    constructor(props){
        super(props);
    }

    _keyExtractor = (item, index) => index + "";

    render() {
        return (
            <View
                style={{backgroundColor:'yellow', height:'100%'}}
            />
        );
    }

}

