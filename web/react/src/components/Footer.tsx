import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const d = new Date();
    const year = d.getFullYear();
    return (
      <div id="Footer">
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
