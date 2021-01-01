'use strict';

export interface IProvider {
  id: string;
  name: string;
  prefixes: Array<string>;
}

export const providers: Array<IProvider> = [
  {
    id: 'viettel',
    name: 'Viettel',
    prefixes: ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039']
  },
  {
    id: 'mobifone',
    name: 'Mobifone',
    prefixes: ['089', '090', '093', '070', '076', '077', '078', '079']
  },
  {
    id: 'vinaphone',
    name: 'Vinaphone',
    prefixes: ['081', '082', '083', '084', '085', '088', '091', '094']
  },
  { id: 'vietnamobile', name: 'Vietnamobile', prefixes: ['056', '058', '092'] },
  { id: 'Gmobile', name: 'Gmobile', prefixes: ['059', '099'] }
];
