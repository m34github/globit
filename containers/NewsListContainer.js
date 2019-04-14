import { Container } from 'unstated';
import axios from 'axios';

class NewsListContainer extends Container {
  state = {
    apiKey: '43394ce4de5a4f15980c93668c28af85',
    country: 'us',
    isLoaded: false,
    news: null
  };

  getNewsList = () => {
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?apiKey=${this.state.apiKey}&country=${this.state.country}`,
    })
    .then(res => {
      this.setState({
        news: res.data,
        isLoaded: true
      });
    });
  };
}

export default NewsListContainer;
