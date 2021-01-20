import React, { Component } from 'react';
import { connect } from 'react-redux';

interface IFooterProps {
  theme: string;
}

class Footer extends Component<IFooterProps> {
  render() {
    const { theme } = this.props;
    const bgColor: string = theme === 'light' ? 'bg-danger' : 'bg-black';
    const border: string =
      theme === 'light' ? 'border-top border-danger' : 'border-top border-white';

    const d = new Date();
    const year = d.getFullYear();
    return (
      <footer id="Footer" className={`${bgColor} ${border} pt-3 pb-3 text-white text-center`}>
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

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

export default connect(mapStateToProps)(Footer);
