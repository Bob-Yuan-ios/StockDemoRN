import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
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

    render(){
        const props = this.props;
        return (
            <TouchableHighlight
                onPress={this._onPressItem}
            >
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
            </TouchableHighlight>
        );
    }

    _onPressItem = () => {
        this.props.onPressItem(this.props);
    };
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

