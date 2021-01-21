import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

interface IFooterProps {
  themeBorderTop: string;
  themePrimaryBackgroundColor: string;
}

class Footer extends Component<IFooterProps> {
  render() {
    const { themeBorderTop, themePrimaryBackgroundColor } = this.props;

    const d = new Date();
    const year = d.getFullYear();
    return (
      <footer
        id="Footer"
        className={`${themePrimaryBackgroundColor} ${themeBorderTop} pt-3 pb-3 text-white text-center`}>
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
  const themeBorderTop: string = _.get(state, 'theme.borderTop', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  return { themeBorderTop, themePrimaryBackgroundColor };
};

export default connect(mapStateToProps)(Footer);
