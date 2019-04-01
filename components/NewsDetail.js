import React from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';

import GlobalHeader from './GlobalHeader';

class NewsDetail extends React.Component {
  state = {
    article: this.props.navigation.state.params.article
  };

  render() {
    return (
      <Container>
        <GlobalHeader />

        <Text>{this.state.article.content}</Text>
      </Container>
    );
  }
}

export default NewsDetail;
