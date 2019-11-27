import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from  'react-native';

import {
    TITLE_COLOR,
    CONTENT_COLOR,
    TITLE_FONT_SIZE,
    CONTENT_FONT_SIZE,
    SCREEN_MARGIN_SPACE,
    ITEM_MARGIN_SPACE,
    SCREEN_WIDTH
} from '../../constant/CommonConfig';

// import PropTypes from 'prop-types';

export class NewsFlatItem extends Component{

    render(){
        const props = this.props;

        return (
            <TouchableHighlight
                onPress={this._onPressItem}
            >
                <View style={styles.container}>
                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.thumbImgStyle}
                            source={{uri: props.thumbnail_pic_s}}
                        />
                    </View>


                    <View style={styles.txtContainer}>
                        <Text stlye={styles.titleStyle}>
                            {props.title}
                        </Text>
                        <Text style={styles.conStyle}>
                            {props.author_name}  {props.date}
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
        padding: SCREEN_MARGIN_SPACE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    },


    imgContainer: {
        height: '100%',
        justifyContent: 'center',
    },

    thumbImgStyle: {
        width: 120,
        height: 40,
    },

    txtContainer:{
        width:  SCREEN_WIDTH - 120 - SCREEN_MARGIN_SPACE * 2,
        padding: ITEM_MARGIN_SPACE,
    },

    titleStyle: {
        color: TITLE_COLOR,
        fontSize: TITLE_FONT_SIZE,
        margin: ITEM_MARGIN_SPACE
    },

    conStyle: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_FONT_SIZE,
        margin: ITEM_MARGIN_SPACE
    },

});


/**
 * 属性参数
 属性名称： React.PropTypes.array,
 属性名称： React.PropTypes.bool,
 属性名称： React.PropTypes.func,
 属性名称： React.PropTypes.number,
 属性名称： React.PropTypes.object,
 属性名称： React.PropTypes.string,
 */
// NewsFlatItem.propTypes = {
//     date: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author_name: PropTypes.string.isRequired,
//     thumbnail_pic_s: PropTypes.string.isRequired,
// }
