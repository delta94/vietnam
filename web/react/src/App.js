import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import routes from './routers';
import { Footer, Navigation } from './components';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="pt-5 pb-5">
          <div className="pt-3 pb-3">
            <HashRouter basename="/">
              <Navigation></Navigation>
              {routes.map((route, index) => {
                const { path, component } = route;
                return <Route key={index} path={`/${path}`} component={component} exact></Route>;
              })}
              <Footer></Footer>
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
