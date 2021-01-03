import React, { Component } from 'react';

class HomeFooter extends Component {
  render() {
    const d = new Date();
    const year = d.getFullYear();
    return (
      <div id="HomeFooter">
        <footer className="fixed-bottom bg-danger pt-3 pb-3 text-white text-center shadow">
          &copy;{' '}
          <a
            href="https://www.linkedin.com/in/hieudoanm/"
            target="_blank"
            rel="noreferrer"
            className="text-white">
            HIEU DOAN
          </a>{' '}
          {year}
        </footer>
      </div>
    );
  }
}

export default HomeFooter;
