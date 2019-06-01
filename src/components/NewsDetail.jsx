import React from 'react';
import qs from 'query-string';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from '../styles';

class NewsDetail extends React.Component {
  componentDidMount() {
    const { url } = qs.parse(location.search);
    this.props.newsDetail.scrape(url);
  }

  render() {
    return (
      <>
        <Header />

        <section className={styles.newsDetail.main}>
          <section
            style={{
              background: `url(${
                qs.parse(location.search).image
              }) center / cover`,
              width: '100vw',
              height: '20vh'
            }}
          />
          Hello
        </section>

        <Footer value="news" />
      </>
    );
  }
}

export default NewsDetail;
