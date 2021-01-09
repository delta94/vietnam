'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { mapsService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const level_en: string = _.get(req, 'query.level_en', '');
  const macro_region_en: string = _.get(req, 'query.macro_region_en', '');
  const provinces = await mapsService.getProvinces({ level_en, macro_region_en });
  return res.json(provinces);
};
