import React from 'react';

import NewsScreen from './News';
import NewsDetail from './News/NewsDetail';

import StockScreen from './Stock';
import StockDetail from './Stock/StockDetail';

import TradeScreen from "./Trade";
import TradeDetail from './Trade/TradeDetail';

import UserCenterScreen from './UserCenter';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation-tabs';


//////////////////////注册页//////////////////////////////////////////////////
// 动态构建标签栏
let data: Array = ['头条', '财经', '科技', '娱乐'];

const  tabPages = () => {
    let pages = {};

    data.map((value, index) => {
        pages[value] = {
            screen: ({navigation}) => {
                return <NewsScreen navigation={navigation} />
            },
            navigationOptions: {
                tabBarLabel: value,
            }
        }
    });

    return pages;
}

const tradeNav = createMaterialTopTabNavigator(
    tabPages(),
    {
        initialRouteName: data[0],
        tabBarOptions: {
            lazy: true,
            activeTintColor: 'yellow',
            inactiveTintColor: 'white',
        },
    }
);


const NewsStack = createStackNavigator({
    NewList: tradeNav,
    NewsDetail: NewsDetail,
},{
    initialRouteName: 'NewList',
});


//stackNavigator头部设置
NewsStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        tabBarLabel: '资讯',
        tabBarVisible
    });

};
////////////////////////////////////////////////////////////////////////////

////////////////////////行情页///////////////////////////////////////////////
const StockStack = createStackNavigator({
    StockList: StockScreen,
    StockDetail: StockDetail,
},{
    initialRouteName: 'StockList',
});


StockStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        tabBarLabel: '行情',
        tabBarVisible
    });

};
/////////////////////////////////////////////////////////////////////////////


///////////////////////////交易页////////////////////////////////////////////
const TradeStack = createStackNavigator({
    TradeList: TradeScreen,
    TradesDetail: TradeDetail,
},{
    initialRouteName: 'TradeList',
});

TradeStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        tabBarLabel: '交易',
        tabBarVisible
    });

};
//////////////////////////////////////////////////////////////////////////////


////////////////////////////个人中心///////////////////////////////////////////
const UserCenterStack = createStackNavigator({
    UserCenter: UserCenterScreen,
},{
    initialRouteName: 'UserCenter',
});


UserCenterStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        tabBarLabel: '个人中心',
        tabBarVisible
    });

};
//////////////////////////////////////////////////////////////////////////////


// 注册整个底部tabNavigator ////////////////////////////////////////////////////
const TabBarNav = createBottomTabNavigator(
    {
        News: NewsStack,
        Stock: StockStack,
        Trade: TradeStack,
        UserCenter: UserCenterStack
    },
    {
        initialRouteName: 'News',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

// 生成应用程序的根视图
export default RootStackContainer = createAppContainer(TabBarNav);
///////////////////////////////////////////////////////////////////////////////
