import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import NewsList from './components/NewsList.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/news/list" component={NewsList} />
          <Redirect to="/news/list" />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
