import { createStackNavigator, createAppContainer } from "react-navigation";

import NewsList from './NewsList';
import NewsDetail from './NewsDetail';

const AppNavigator = createStackNavigator(
  {
    NewsList,
    NewsDetail
  },
  {
    initialRouteName: 'NewsList',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
