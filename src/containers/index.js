
import NewsScreen from './News';
import NewsDetail from './News/NewsDetail';

import StockScreen from './Stock';
import StockDetail from './Stock/StockDetail';

import TradeScreen from './Trade';
import TradeDetail from './Trade/TradeDetail';

import UserCenterScreen from './UserCenter';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// 注册单个页面的StackNavigator
const NewsStack = createStackNavigator({
    NewList: NewsScreen,
    NewsDetail: NewsDetail,
},{
    initialRouteName: 'NewList',
});

const StockStack = createStackNavigator({
    StockList: StockScreen,
    StockDetail: StockDetail,
},  {
    initialRouteName: 'StockList',
});

const TradeStack = createStackNavigator({
    TradeList: TradeScreen,
    TradeDetail: TradeDetail,
},  {
    initialRouteName: 'TradeList',
});

const UserCenterStack = createStackNavigator({
    UserCenter: UserCenterScreen,
},  {
    initialRouteName: 'UserCenter',
});


//stackNavigator头部设置
NewsStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        title: 'Welcome',
        headerTintColor:'#1f1eff',
        tabBarLabel: '资讯',
        tabBarVisible
    });

};

StockStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        headerTintColor:'#1f1eff',
        tabBarLabel: '行情',
        tabBarVisible
    });

};


TradeStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        title: 'Welcome',
        headerTintColor:'#1f1eff',
        tabBarLabel: '交易',
        tabBarVisible
    });

};

UserCenterStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible;
    tabBarVisible = (navigation.state.index > 0) ? false : true;

    return ({
        title: 'Welcome',
        headerTintColor:'#1f1eff',
        tabBarLabel: '个人中心',
        tabBarVisible
    });

};

// 注册整个底部tabNavigator
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
export default RootStackContainer = createAppContainer(TabBarNav); // Use this
