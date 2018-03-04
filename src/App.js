import React, { Component } from 'react';

import { HashRouter, Router, Route ,IndexRoute} from 'react-router-dom'

import LoginPageContainer from './component/login/loginPageContainer.js'
import FlightListContainer from './component/flights/flightListContainer.js'
import flightsApp from './reducers/index.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
let store = createStore(flightsApp)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Route exact path="/" component={LoginPageContainer} />
            <Route path="/flights" component={FlightListContainer} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
