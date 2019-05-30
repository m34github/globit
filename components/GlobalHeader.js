import React from 'react';
import {
  Body,
  Header,
  Title,
  View
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
