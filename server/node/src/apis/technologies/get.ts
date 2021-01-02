'use strict';

import { Request, Response } from 'express';

import { technologiesService } from '../../services';

export default async (req: Request, res: Response) => {
  const technologies: string | Array<any> = await technologiesService.getTechnologies();
  return res.json(technologies);
};
