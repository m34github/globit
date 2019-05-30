import { Container } from 'unstated';
import axios from 'axios';
import cheerio from 'react-native-cheerio';

class NewsDetailContainer extends Container {
  state = {
    isLoaded: false,
    article: null
  };

  getNewsDetail = article => {
    axios({
      method: 'get',
      url: article.url
    })
    .then(res => {
      const $ = cheerio.load(res.data);
      this.setState({
        isLoaded: true,
        article: $('.group').text()
      });
    })
  };
}

export default NewsDetailContainer;
