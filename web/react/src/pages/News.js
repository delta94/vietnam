import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { NewsFeed, NewsSources, NewsTrends } from '../components';

class News extends Component {
  render() {
    return (
      <div id="News">
        <main className="container mt-3">
          <Tabs defaultActiveKey="feed" className="nav-justified">
            <Tab eventKey="feed" title="Feed">
              <NewsFeed></NewsFeed>
            </Tab>
            <Tab eventKey="sources" title="Sources">
              <NewsSources></NewsSources>
            </Tab>
            <Tab eventKey="trends" title="Trends">
              <NewsTrends></NewsTrends>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default News;
