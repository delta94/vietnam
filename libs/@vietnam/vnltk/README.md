# Vietnam Sports

## Installation

```sh
npm install @vietnam/sports
# OR
yarn add @vietnam/sports
```

## Usage

```ts
import { vnltk } from 'vnapis';

// Convert Number to Text
const text = vnltk.convertNumberToText(1995); // một nghìn chín trăm chín mươi lăm

// Convert Vietnamese into Latin Characters
const result = await vnltk.latinize('Việt Nam'); // Viet Nam

// Get proverbs
const proverbs = vnltk.getProverbs();

// Get names
const names = vnltk.getNames();

// Get first names
const firstNames = vnltk.getFirstNames();

// Get family names
const familyNames = vnltk.getFamilyNames();

// Get stop words
const stopWords = vnltk.getStopWords();

// Get words
const words = vnltk.getWords();
```
