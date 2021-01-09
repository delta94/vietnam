'use strict';

import * as _ from 'lodash';
import { Request, Response } from 'express';

import { technologiesService } from '../../services';

export default async (req: Request, res: Response) => {
  const type_id: string = _.get(req, 'query.type_id', '');
  const technologies: string | Array<any> = await technologiesService.getTechnologies(type_id);
  return res.json(technologies);
};
