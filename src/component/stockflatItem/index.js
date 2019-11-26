import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from  'react-native';

import {
    THEME_COLOR,
    TITLE_COLOR,
    CONTENT_COLOR,
    TITLE_FONT_SIZE,
    CONTENT_FONT_SIZE,
    SCREEN_MARGIN_SPACE
} from '../../constant/CommonConfig';

export class StockFlatItem extends Component{

    constructor(props){
        super(props);


        this.state = {

            titleCon: props.titleCon || '主标题-Stock',
            subCon: props.subCon || '副标题-Stock',
            imgUrl: '',
        };
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };


    render(){
        const state = this.state;
        return (
            <View style={styles.container}>
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
        marginTop: 10,
        paddingLeft: SCREEN_MARGIN_SPACE,
        paddingRight: SCREEN_MARGIN_SPACE,
        marginBottom: 5,
        backgroundColor: THEME_COLOR,
        borderColor: 'black',
        borderWidth: 1,
    },

    titleTextStyle: {
        color: TITLE_COLOR,
        fontSize: TITLE_FONT_SIZE,
        height: 21,
    },

    subTextStyle: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_FONT_SIZE,
        height: 18,
    },

    imgStyle: {
        backgroundColor: '#1f1fea',
    }

});

