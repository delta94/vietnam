import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import routes from './routers';
import { HomeFooter, HomeNavigation } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pb-5">
          <div className="pb-5">
            <HashRouter basename="/">
              <HomeNavigation></HomeNavigation>
              {routes.map((route, index) => {
                const { path, component } = route;
                return <Route key={index} exact path={`/${path}`} component={component}></Route>;
              })}
              <HomeFooter></HomeFooter>
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
