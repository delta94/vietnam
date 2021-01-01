'use strict';

import cafebiz from './configs/cafebiz';
import dantri from './configs/dantri';
import forbesvietnam from './configs/forbesvietnam';
import laodong from './configs/laodong';
import nhandan from './configs/nhandan';
import soha from './configs/soha';
import thanhnien from './configs/thanhnien';
import tinhte from './configs/tinhte';
import tuoitre from './configs/tuoitre';
import vietnamnet from './configs/vietnamnet';
import vnexpress from './configs/vnexpress';
import vtv from './configs/vtv';

export default {
  sources: [
    cafebiz,
    dantri,
    forbesvietnam,
    laodong,
    nhandan,
    soha,
    thanhnien,
    tinhte,
    tuoitre,
    vietnamnet,
    vnexpress,
    vtv
  ],
  time: {
    fullDays: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    fullMonths: [
      'january',
      'febuary',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ],
    shortDays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    shortMonths: [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec'
    ]
  }
};
