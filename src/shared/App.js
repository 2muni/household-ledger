import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import { Header, } from 'components/Base/Header';
import { Daily } from 'pages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Daily}/>
          <Route path="/daily" component={Daily}/>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;