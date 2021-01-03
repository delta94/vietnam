# OnePay

- [OnePay](https://www.onepay.vn/)
- [OnePay Documents](https://mtf.onepay.vn/developer/)

## Installation

```sh
npm install onepay
# OR
yarn add onepay
```

## Usage

```ts
import OnePay from 'onepay';

const onePay = new OnePay({
  accessCode: '', // string
  merchant: '', // string
  returnUrl: '', // string
  secretKey: '', // string
});

// Create Payment URL
const order = {
  description: 'test',
  amount: 1000,
  ipAddr: '127.0.0.1',
  type: 'domestic' // options: 'domestic' OR 'international' - default "domestic"
};
const url: string = onePay.createPaymentUrl(order);

// Verify Return URL
const response = onePay.verifyReturnUrl(query);
const { message: '' } = response;
```
