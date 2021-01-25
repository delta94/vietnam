import { IInformationEndpoints } from '../../interfaces';

import getPhonesPrefixes from './get-phones-prefixes';
import getPhonesProviders from './get-phones-providers';

const information: IInformationEndpoints = { getPhonesPrefixes, getPhonesProviders };

export default information;
