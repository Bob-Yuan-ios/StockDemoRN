import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image
} from  'react-native';

import {
    THEME_COLOR,
    SCREEN_MARGIN_SPACE
} from '../../constant/CommonConfig';

export class NewsFlatItem extends Component{

    render(){
        const props = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.imgStyle}>
                </Image>
                <Text stlye={styles.titleTextStyle}>
                    {props.titleCon}
                </Text>
                <Text style={styles.subTextStyle}>
                    {props.subCon}
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

