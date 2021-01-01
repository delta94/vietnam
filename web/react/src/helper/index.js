export const capitalize = (s = '') => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const addZero = (x = 0) => {
  return x > 9 ? x.toString() : `0${x}`;
};

export const numberFormatter = (x = 0) => {
  return x
    .toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const processPeriod = period => {
  const now = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;
  const oneYear = oneDay * 365;
  const oneMonth = oneDay * 30;
  const oneWeek = oneDay * 7;
  let unit = oneWeek;
  if (period.includes('Y')) {
    unit = oneYear;
  } else if (period.includes('M')) {
    unit = oneMonth;
  } else if (period.includes('W')) {
    unit = oneWeek;
  }

  const time = parseInt(period[0]) || 2;
  const from = now - unit * time;

  return { from, to: now };
};

export const deepClone = (o = {}) => {
  return JSON.parse(JSON.stringify(o));
};
