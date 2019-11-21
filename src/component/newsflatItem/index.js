import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image
} from  'react-native';

import {
    THEME_COLOR
} from '../../constant/CommonConfig';

export class NewsFlatItem extends Component{

    constructor(props){
        super(props);

        this.state = {
            titleCon: '主标题',
            subCon: '副标题',
            imgUrl: '',
        };
    }

    render(){
        const state = this.state;
        return (
            <View style={{backgroundColor: THEME_COLOR}}>
                <Image style={styles.imgStyle}>
                </Image>
                <Text stlye={styles.titleTextStyle}>
                    {state.titleCon}
                </Text>
                <Text style={styles.subTextStyle}>
                    {state.subCon}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'yellow',
    },


    titleTextStyle: {
        color: '#1f1fea',
        fontSize: 16,
        height: 21,
    },

    subTextStyle: {
        color: '#1f1fea',
        fontSize: 14,
        height: 14,
    },

    imgStyle: {
        backgroundColor: '#1f1fea',
    }
});

