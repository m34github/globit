import { StatusBar } from 'react-native';

const app = {
  root: {
    paddingTop: StatusBar.currentHeight
  }
};

const globalLoader = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const newsList = {
  content: {
    padding: 12
  }
};

const style = {
  app,
  globalLoader,
  newsList
};
export default style;
