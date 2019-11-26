import React, { Component } from 'react';

import {
    Text,
    TouchableHighlight
} from 'react-native';


export default class StockDetail extends Component{
    render() {
        return (
            <TouchableHighlight
                onPress={this._onPressItem}
            >
                <Text>
                    StockDetail
                </Text>
            </TouchableHighlight>
        );
    }
}
