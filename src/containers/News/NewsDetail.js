import React, { Component } from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';


export default class NewsDetail extends Component{

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: navigation.getParam('itemId', 'UserInfo'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerRight: () => (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Detail"
                    color="#1f1e2d"
                />
            ),
        };
    };

    render() {

        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>
                   currentUser: {JSON.stringify(navigation.getParam('params', '001'))}
               </Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('NewsList')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
