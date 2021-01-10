import React, { Component } from 'react';

import { Doc } from '../../components';

interface ILicensePlatesProps {}

interface ILicensePlatesState {}

export default class LicensePlates extends Component<ILicensePlatesProps, ILicensePlatesState> {
  render() {
    return (
      <div id="LicensePlates" className="container">
        <Doc group={'licensePlates'} header={'License Plates'}></Doc>
      </div>
    );
  }
}
