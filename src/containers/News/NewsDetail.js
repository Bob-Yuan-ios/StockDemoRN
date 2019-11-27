import React, { Component } from 'react';

import {
    Button
} from 'react-native';

import {
    WebView
} from 'react-native-webview';

export default class NewsDetail extends Component{

    static navigationOptions = ({ navigation, navigationOptions }) => {

        const title = navigation.getParam('title', '新闻详情');
        return {
            title: title,
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerRight: () => (
                <Button
                    onPress={() => alert(title)}
                    title="Detail"
                    color="#1f1e2d"
                />
            ),
        };
    };

    render() {
        const {params} = this.props.navigation.state;
        console.log('detail...' + JSON.stringify(params));

        return (
            <WebView
                source={{uri: params.url}}
                style={{marginTop: 20}}
            />
        );
    }
}
