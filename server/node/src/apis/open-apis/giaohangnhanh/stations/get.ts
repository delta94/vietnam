'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { ghn } from '../../../../libs';

export default async (req: Request, res: Response) => {
  const district_id: number = _.get(req, 'query.district_id', 0);
  const ward_code: string = _.get(req, 'query.ward_code', '');
  const options = { district_id, ward_code, offset: 0, limit: 10000 };
  const stations: any = await ghn.address.getStations(options);
  return res.json(stations);
};
