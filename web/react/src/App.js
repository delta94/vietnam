import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { Banks, Finance, Government, Home, Maps, News, Sports, Uong, Vietcetera } from './pages';
import { Navigation, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <div className="pb-5">
          <div className="pb-5">
            <HashRouter basename="/">
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/banks" component={Banks}></Route>
              <Route exact path="/finance" component={Finance}></Route>
              <Route exact path="/government" component={Government}></Route>
              <Route exact path="/maps" component={Maps}></Route>
              <Route exact path="/news" component={News}></Route>
              <Route exact path="/sports" component={Sports}></Route>
              <Route exact path="/uong" component={Uong}></Route>
              <Route exact path="/vietcetera" component={Vietcetera}></Route>
            </HashRouter>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
