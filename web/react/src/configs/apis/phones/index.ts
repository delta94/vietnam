import { IPhonesEndpoints } from '../../interfaces';

import getPrefixes from './get-prefixes';
import getProviders from './get-providers';

const phones: IPhonesEndpoints = { getPrefixes, getProviders };

export default phones;
