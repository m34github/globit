import React from 'react';
import { Subscribe } from 'unstated';
import {
  Container,
  Content,
  Text
} from 'native-base';

import NewsDetailContainer from '../containers/NewsDetailContainer';
import GlobalHeader from './GlobalHeader';
import GlobalLoader from './GlobalLoader';
import GlobalFooter from './GlobalFooter';

class NewsDetailComponent extends React.Component {
  componentDidMount() {
    const { newsDetail } = this.props;
    const { article } = this.props.context.navigation.state.params;

    newsDetail.getNewsDetail(article);
  }

  render() {
    const { newsDetail } = this.props;

    if (!newsDetail.state.isLoaded) {
      return (
        <GlobalLoader />
      );
    }

    return (
      <Container>
        <GlobalHeader />

        <Content>
          <Text>{ newsDetail.state.article }</Text>
        </Content>

        <GlobalFooter />
      </Container>
    );
  }
}

const NewsDetail = props => (
  <Subscribe to={[NewsDetailContainer]}>
    { newsDetail => <NewsDetailComponent context={props} newsDetail={newsDetail} /> }
  </Subscribe>
);

export default NewsDetail;
