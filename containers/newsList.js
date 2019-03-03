import { Container, Subscribe } from 'unstated';

import NewsList from '../components/NewsList';

const NewsListWrapper = () => {
  <Subscribe to={[NewsList]}>
    {
      newsList => <NewsList newsList={newsList} />
    }
  </Subscribe>
};
