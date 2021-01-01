'use strict';

import { Request, Response } from 'express';
import * as _ from 'lodash';

import vietnamgovernment from 'vietnamgovernment';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const no = _.get(req, 'query.no', 14);
  const nationalAssemblyChairs = vietnamgovernment.getNationalAssemblyMembers(no);
  return res.json(nationalAssemblyChairs);
};
