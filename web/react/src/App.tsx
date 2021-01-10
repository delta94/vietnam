import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import routes from './routers';
import { Footer, Navigation } from './components';

class App extends Component {
  render() {
    return (
      <div id="App">
        <HashRouter basename="/">
          <Navigation></Navigation>
          <div className="pt-3 pb-5">
            {routes.map((route, index) => {
              const { path, component } = route;
              return <Route key={index} path={`/${path}`} component={component} exact></Route>;
            })}
          </div>
          <Footer></Footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
