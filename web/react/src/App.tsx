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
          <main className="overflow-auto pt-3 pb-3">
            {routes.map((route, index) => {
              const { path, component } = route;
              return <Route exact key={index} path={`/${path}`} component={component}></Route>;
            })}
          </main>
          <Footer></Footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
