import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

import Header from './Header.jsx';
import Waiter from './Waiter.jsx';
import Footer from './Footer.jsx';
import styles from '../styles';

class NewsList extends React.Component {
  componentDidMount() {
    // this.props.newsList.getNewsList();
    this.props.newsList.getNewsListDummy();
  }

  render() {
    if (!this.props.newsList.state.isLoaded) {
      return <Waiter />;
    }

    console.log(this.props.newsList.state.articles);

    return (
      <>
        <Header />

        <section className={styles.newsList.main}>
          {this.props.newsList.state.articles.map((article, i) => (
            <section key={i} className={styles.newsList.cardSection}>
              <Card
                className={styles.newsList.card}
                onClick={() => {
                  location.href = `/news/detail/?url=${article.url}&image=${
                    article.urlToImage
                  }`;
                }}
              >
                <CardContent className={styles.newsList.cardContent}>
                  <Typography variant="body1">
                    {this.props.newsList.sliceHead(article.title)}
                  </Typography>
                  <Typography variant="caption">
                    {article.source.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  className={styles.newsList.cardMedia}
                  image={article.urlToImage}
                />
              </Card>
            </section>
          ))}
        </section>

        <Footer value="news" />
      </>
    );
  }
}

export default NewsList;
