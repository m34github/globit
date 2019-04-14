import React from 'react';
import { Subscribe } from 'unstated';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Right,
  Text,
  Thumbnail,
  View
} from 'native-base';

import NewsListContainer from '../containers/NewsListContainer';
import GlobalHeader from './GlobalHeader';
import GlobalLoader from './GlobalLoader';
import GlobalFooter from './GlobalFooter';
import style from '../style';

class NewsListComponent extends React.Component {
  componentDidMount() {
    const { newsList } = this.props;

    newsList.getNewsList();
  }

  render() {
    const { navigation, newsList } = this.props;

    if (!newsList.state.isLoaded) {
      return (
        <GlobalLoader />
      );
    }

    return (
      <Container>
        <GlobalHeader />

        <Content style={style.newsList.content}>
          <View>
            {
              newsList.state.news.articles.map((article, i) => (
                <Card key={i}>
                  <CardItem button onPress={() => {
                    navigation.push('NewsDetail', { article });
                  }}>
                    <Body>
                      <Text>{article.title}</Text>
                    </Body>
                    <Right>
                      <Thumbnail square large source={{ uri: article.urlToImage }} />
                    </Right>
                  </CardItem>
                </Card>
              ))
            }
          </View>
        </Content>

        <GlobalFooter />
      </Container>
    );
  }
}

const NewsList = props => (
  <Subscribe to={[NewsListContainer]}>
    { newsList => <NewsListComponent navigation={props.navigation} newsList={newsList} /> }
  </Subscribe>
);

export default NewsList;
