import React from 'react';
import { View } from 'react-native';
import {
  Body,
  Header,
  Title
} from 'native-base';

class GlobalHeader extends React.Component {
  render() {
    return (
      <View>
        <Header>
          <Body>
            <Title>Globit</Title>
          </Body>
        </Header>
      </View>
    );
  }
}

export default GlobalHeader;
