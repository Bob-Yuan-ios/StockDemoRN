import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from  'react-native';

import {
    THEME_COLOR,
    TITLE_COLOR,
    CONTENT_COLOR,
    TITLE_FONT_SIZE,
    CONTENT_FONT_SIZE,
    SCREEN_MARGIN_SPACE,
    ITEM_MARGIN_SPACE
} from '../../constant/CommonConfig';



export class StockFlatItem extends Component{

    render(){
        const props = this.props;
        return (
            <TouchableHighlight
                onPress={this._onPressItem}
            >
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Text stlye={styles.symbolName}>
                            {props.name}
                        </Text>
                        <Text style={styles.symbolCode}>
                            {props.code}
                        </Text>
                    </View>

                    <View style={styles.centerContainer}>
                        <Text stlye={styles.curPrice}>
                            {props.trade}
                        </Text>
                    </View>

                    <View style={styles.rightContainer}>
                        <Text stlye={styles.percentChange}>
                            {props.changepercent}
                        </Text>
                        <Text style={styles.priceChange}>
                            {props.pricechange}
                        </Text>
                    </View>
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
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    },

    leftContainer: {
        height: '100%',
        flexDirection: 'row',
        width: '33.3%',
        alignItems: 'center',
    },

    centerContainer: {
        height: '100%',
        flexDirection: 'row',
        width: '33.3%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rightContainer:{
        height: '100%',
        flexDirection: 'column',
        width: '33.3%',
        alignItems: 'center'
    },

    symbolName: {
        color: TITLE_COLOR,
        fontSize: TITLE_FONT_SIZE,
        height: 21,
        backgroundColor: 'yellow'
    },

    symbolCode: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_FONT_SIZE,
        marginLeft: ITEM_MARGIN_SPACE,
        height: 14,
    },

    curPrice: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_FONT_SIZE,
        height: 18,
    },

    priceChange: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_FONT_SIZE,
        height: 18,
    },

    percentChange: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_FONT_SIZE,
        height: 18,
    }
});

