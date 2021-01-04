'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { ghn } from '../../../../libs';

export default async (req: Request, res: Response) => {
  const province_id: number = _.get(req, 'query.province_id', 0);
  const districts: any = await ghn.address.getDistricts(province_id);
  return res.json(districts);
};
