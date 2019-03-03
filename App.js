import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading, Font } from "expo";
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';
import { Provider } from 'unstated';

import AppContainer from './components/AppContainer';

class App extends React.Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({
      isReady: true
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
      );
    }

    return (
      <Provider>
        <Container style={style.rootView}>
          <AppContainer />
        </Container>
      </Provider>
    );
  }
}

const style = {
  rootView: {
    paddingTop: StatusBar.currentHeight
  }
};

export default App;
