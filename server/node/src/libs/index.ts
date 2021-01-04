'use strict';

import SSI from './stock/ssi';
import TanViet from './stock/tanviet';

import Utils from './utils';
import TaskQueueProcessor from './task-queue-processor';

import GHN from './giaohangnhanh';

export const ssi: SSI = new SSI();
export const tanViet: TanViet = new TanViet();

export const taskQueueProcessor: TaskQueueProcessor = new TaskQueueProcessor();
export const utils: Utils = new Utils();

const GIAO_HANG_NHANH_API: string = process.env.GIAO_HANG_NHANH_API || '';
export const ghn: GHN = new GHN(GIAO_HANG_NHANH_API, { test: true });
