import React from 'react';
import { Container, Subscribe } from 'unstated';
import cheerio from 'cheerio';

import NewsDetailComponent from '../components/NewsDetail.jsx';

class NewsDetailContainer extends Container {
  state = {};

  scrape = url => {
    axios({
      method: 'get',
      url: url
    }).then(res => {
      console.log(res.data);
    });
  };
}

const NewsDetail = () => {
  return (
    <Subscribe to={[NewsDetailContainer]}>
      {newsDetail => <NewsDetailComponent newsDetail={newsDetail} />}
    </Subscribe>
  );
};

export default NewsDetail;
