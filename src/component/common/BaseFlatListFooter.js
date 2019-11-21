import React, { Component } from 'react';

import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet
} from 'react-native';


export class BaseFlatListFooter extends Component{

    constructor(props){
        super(props);

        this.state = {
            isFooterLoading: props.isFooterLoading || false
        }
    }


    render(){
        const  isFooterLoading = this.state.isFooterLoading;
        return (
            <View style={styles.container} >
                <ActivityIndicator
                    animating={isFooterLoading}
                />
                <Text style={styles.tipTextStyle}>加载更多...</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f3ab1e',
    },

    tipTextStyle:{
        textAlign: 'center',
        fontSize: 18,
        color: 'red'
    }

})
