import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { Provider } from 'unstated';

import NewsList from './containers/NewsList';
import NewsDetail from './containers/NewsDetail';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/news/list" component={NewsList} />
            <Route path="/news/detail" component={NewsDetail} />
            <Redirect to="/news/list" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
