'use strict';

import SSI from './stock/ssi';
import TanViet from './stock/tanviet';

import Utils from './utils';
import TaskQueueProcessor from './task-queue-processor';

export const ssi: SSI = new SSI();
export const tanViet: TanViet = new TanViet();

export const taskQueueProcessor: TaskQueueProcessor = new TaskQueueProcessor();
export const utils: Utils = new Utils();
