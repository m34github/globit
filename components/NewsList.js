import React from 'react';
import { Text } from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Tab,
  Tabs,
  Thumbnail
} from 'native-base';
import axios from 'axios';

import GlobalHeader from './GlobalHeader';
import Loader from './Loader';

class NewsList extends React.Component {
  state = {
    news: {},
    isReady: false
  };

  getNews = () => {
    params = {
      apiKey: '43394ce4de5a4f15980c93668c28af85',
      country: 'us'
    };

    axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?apiKey=${params.apiKey}&country=${params.country}`,
    })
    .then(res => {
      this.setState({
        news: res.data,
        isReady: true
      });
    });
  };

  componentDidMount() {
    this.getNews();
  }

  render() {
    if (!this.state.isReady) {
      return ( <Loader /> );
    }

    return (
      <Container>
        <GlobalHeader />

        <Content style={style.cardList}>
          {
            this.state.news.articles.map((article, i) => (
              <Card key={i}>
                <CardItem button onPress={() => {
                  this.props.navigation.push('NewsDetail', { article });
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
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Icon type="MaterialIcons" name="description" />
            </Button>
            <Button>
              <Icon type="MaterialCommunityIcons" name="tag-multiple" />
            </Button>
            <Button>
              <Icon type="MaterialIcons" name="bookmark" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const style = {
  cardList: {
    padding: 12
  }
};

export default NewsList;
