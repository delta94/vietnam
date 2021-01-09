'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const province_id = _.get(req, 'query.province_id', '');
  const districts = await mapsService.getDistricts(province_id);
  return res.json(districts);
};
