import React from 'react';
import { Container, Subscribe } from 'unstated';
import axios from 'axios';

import NewsListComponent from '../components/NewsList.jsx';
import newsApiConfig from '../.env/news-api.config.json';

class NewsListContainer extends Container {
  state = {
    isLoaded: false,
    newsApiKey: newsApiConfig.key,
    articles: []
  };

  getNewsList = () => {
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?language=en&sources=techcrunch&sortBy=publishedAt&apiKey=${
        this.state.newsApiKey
      }`
    }).then(res => {
      this.setState({
        isLoaded: true,
        articles: res.data.articles
      });
    });
  };

  getNewsListDummy = () => {
    axios.get('/assets/news.json').then(res => {
      this.setState({
        isLoaded: true,
        articles: res.data
      });
    });
  };

  sliceHead = text => {
    if (text.length > 60) {
      return text.slice(0, 57) + '...';
    } else {
      return text;
    }
  };
}

const NewsList = () => {
  return (
    <Subscribe to={[NewsListContainer]}>
      {newsList => <NewsListComponent newsList={newsList} />}
    </Subscribe>
  );
};

export default NewsList;
