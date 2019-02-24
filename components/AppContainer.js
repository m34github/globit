import { createStackNavigator, createAppContainer } from "react-navigation";

import NewsList from './NewsList';

const AppNavigator = createStackNavigator(
  {
    NewsList: NewsList
  },
  {
    initialRouteName: 'NewsList',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
