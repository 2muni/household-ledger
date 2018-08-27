import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Daily } from 'pages';

class App extends Component {
    render() {
        return (
          <div>
              <Route exact path="/" component={Daily}/>
              <Route path="/daily" component={Daily}/>
          </div>
        );
    }
}

export default App;