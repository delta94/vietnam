import { IGovernmentEndpoints } from '../../interfaces';

import getGeneralSecretaries from './get-general-secretaries';
import getMinisters from './get-ministers';
import getMinistries from './get-ministries';
import getNationalAssemblyChairs from './get-national-assembly-chairs';
import getNationalAssemblyMembers from './get-national-assembly-members';
import getPresidents from './get-presidents';
import getPrimeMinisters from './get-prime-ministers';

const government: IGovernmentEndpoints = {
  getGeneralSecretaries,
  getPresidents,
  getPrimeMinisters,
  getNationalAssemblyChairs,
  getNationalAssemblyMembers,
  getMinistries,
  getMinisters
};

export default government;
