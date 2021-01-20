import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import { Footer, Navigation } from './components';
import routes from './routers';
import { storage } from './services';
import * as themeActions from './redux/actions/theme';

interface IAppProps {
  theme: string;
  updateTheme: (theme: string) => {};
}

class App extends Component<IAppProps> {
  componentDidMount() {
    const theme = storage.get('theme') || 'light';
    this.props.updateTheme(theme);
  }

  render() {
    const { theme } = this.props;
    const bgColor: string = theme === 'light' ? 'text-dark' : 'bg-black';
    return (
      <div id="App">
        <HashRouter basename="/">
          <Navigation></Navigation>
          <main className={`${bgColor} overflow-auto pt-3 pb-3`}>
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

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateTheme: (theme: string) => dispatch(themeActions.updateTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
