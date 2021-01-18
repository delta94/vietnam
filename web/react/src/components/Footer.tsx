import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const d = new Date();
    const year = d.getFullYear();
    return (
      <footer id="Footer" className="bg-danger pt-3 pb-3 text-white text-center">
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
    );
  }
}