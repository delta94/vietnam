# Vietnam Phones

## Installation

```sh
npm install @vietnam/phones
# OR
yarn add @vietnam/phones
```

## Usage

```ts
import phones from '@vietnam/phones';

// Get Providers
const providers = phones.getProviders();

// Get Prefixes
const prefixes = phones.getPrefixes();

// Get Provider from Phone Number
const provider: string = phones.getProviderFromPhoneNumber('0904050607'); // Mobifone - empty string if cannot find provider
```
