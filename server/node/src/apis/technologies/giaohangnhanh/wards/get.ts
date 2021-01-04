'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { ghn } from '../../../../libs';

export default async (req: Request, res: Response) => {
  const district_id: number = _.get(req, 'query.district_id', 0);
  const wards: any = await ghn.address.getWards(district_id);
  return res.json(wards);
};
