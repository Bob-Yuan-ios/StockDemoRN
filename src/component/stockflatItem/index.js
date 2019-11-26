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
                    <View style={styles.leftContainer}>
                        <Text stlye={styles.titleTextStyle}>
                            {props.name}
                        </Text>
                        <Text style={styles.subTextStyle}>
                            {props.code}
                        </Text>
                    </View>

                    <Text stlye={styles.titleTextStyle}>
                        {props.trade}
                    </Text>

                    <View style={styles.rightContainer}>
                        <Text stlye={styles.titleTextStyle}>
                            {props.changepercent}
                        </Text>
                        <Text style={styles.subTextStyle}>
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
        backgroundColor: THEME_COLOR,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    leftContainer: {
        flexDirection: 'row',
        width: '33.3%'
    },

    rightContainer:{
        flexDirection: 'column',
        width: '33.3%'
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
    }
});

