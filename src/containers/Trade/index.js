import React, { Component } from 'react';

import {
    View,
    Text,
    FlatList
} from 'react-native';


export default class TradeScreen extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{color:'#1234fa'}}>
                <FlatList
                    style={{backgroundColor:'green', height:'100%'}}
                    data={[{name: 'a'}, {name: 'b'},{name: 'c'}, {name: 'd'}]}
                    renderItem={({item, i}) => <Text style={{textAlign:'center'}}>{item.name} + tradeList</Text>}
                >
                </FlatList>
            </View>
        );
    }
}
