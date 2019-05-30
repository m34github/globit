import React from 'react';
import { Provider } from 'unstated';
import { AppLoading, Font } from "expo";
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';

import AppContainer from './components/AppContainer';
import style from './style';

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
        <Container style={style.app.root}>
          <AppContainer />
        </Container>
      </Provider>
    );
  }
}

export default App;
