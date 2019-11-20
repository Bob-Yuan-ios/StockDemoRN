
import NewsList from './News/index';
import NewsDetail from './News/NewsDetail';

import StockList from './Stock/index';
import StockDetail from './Stock/StockDetail';

import TradeList from './Trade/index';
import TradeDetail from './Trade/TradeDetail';

import UserCenterList from './UserCenter/index';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// 注册单个页面的StackNavigator
const NewsStack = createStackNavigator({
    NewList: NewsList,
    NewsDetail: NewsDetail,
});

const StockStack = createStackNavigator({
    StockList: StockList,
    StockDetail: StockDetail,
});

const TradeStack = createStackNavigator({
    TradeList: TradeList,
    TradeDetail: TradeDetail,
});

const UserCenterStack = createStackNavigator({
    UserCenter: UserCenterList,
});

// 注册整个底部tabNavigator
const TabBarNav = createBottomTabNavigator(
    {
        News: NewsStack,
        Stock: StockStack,
        Trade: TradeStack,
        UserCenter: UserCenterStack
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },

    }
);

// 生成应用程序的根视图
export default RootStackContainer = createAppContainer(TabBarNav); // Use this
