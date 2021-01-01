'use strict';

import familyNames from './data/family-names';
import firstNames from './data/first-names';
import names from './data/names';
import proverbs from './data/proverbs';
import words from './data/words';
import stopWords from './data/stop-words';

export default {
  words,
  stopWords,
  specialCharacters: [
    // Lowercase
    { character: 'a', regex: /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g },
    { character: 'e', regex: /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g },
    { character: 'i', regex: /ì|í|ị|ỉ|ĩ/g },
    { character: 'o', regex: /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g },
    { character: 'u', regex: /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g },
    { character: 'y', regex: /ỳ|ý|ỵ|ỷ|ỹ/g },
    { character: 'd', regex: /đ/g },
    // Uppercase
    { character: 'A', regex: /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g },
    { character: 'E', regex: /È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g },
    { character: 'I', regex: /Ì|Í|Ị|Ỉ|Ĩ/g },
    { character: 'O', regex: /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g },
    { character: 'U', regex: /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g },
    { character: 'Y', regex: /Ỳ|Ý|Ỵ|Ỷ|Ỹ/g },
    { character: 'D', regex: /Đ/g }
  ],
  numberText: {
    base: ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'],
    baseTen: [
      'mười',
      'hai mươi',
      'ba mươi',
      'bốn mươi',
      'năm mươi',
      'sáu mươi',
      'bảy mươi',
      'tám mươi',
      'chín mươi'
    ],
    baseHundred: [
      'không trăm',
      'một trăm',
      'hai trăm',
      'ba trăm',
      'bốn trăm',
      'năm trăm',
      'sáu trăm',
      'bảy trăm',
      'tám trăm',
      'chín trăm'
    ]
  },
  proverbs,
  names,
  firstNames,
  familyNames
};
