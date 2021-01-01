'use strict';

export type SportEnum = 'basketball' | 'futsal' | 'football';
type CityEnum =
  | 'Bến Tre'
  | 'Vĩnh Phúc'
  | 'Phú Thọ'
  | 'Bình Thuận'
  | 'Đồng Nai'
  | 'Vĩnh Long'
  | 'Tiền Giang'
  | 'Kom Tum'
  | 'Lâm Đồng'
  | 'Đồng Tháp'
  | 'Bà Rịa - Vũng Tàu'
  | 'An Giang'
  | 'Bình Định'
  | 'Cần Thơ'
  | 'Đà Nẵng'
  | 'Hà Nội'
  | 'Hồ Chí Minh'
  | 'Cao Bằng'
  | 'Quảng Nam'
  | 'Khánh Hoà'
  | 'Đắk Lắk'
  | 'Bình Dương'
  | 'Hải Phòng'
  | 'Gia Lai'
  | 'Nam Định'
  | 'Hà Tĩnh'
  | 'Nghệ An'
  | 'Quảng Ninh'
  | 'Bình Phước'
  | 'Huế'
  | 'Tây Ninh'
  | 'Hưng Yên'
  | 'Long An'
  | 'Thanh Hoá';
type CompetitionEnum =
  | 'Vietnam Basketball Association (VBA)'
  | 'Vietnam Futsal League (VFL)'
  | 'V.League 1'
  | 'V.League 2'
  | 'Hạng Nhì'
  | 'Hạng Ba';

export interface IClub {
  name: string;
  city: CityEnum;
  sport: SportEnum;
  competition: CompetitionEnum;
}

export const clubs: Array<IClub> = [
  {
    name: 'Cần Thơ Catfish',
    city: 'Cần Thơ',
    sport: 'basketball',
    competition: 'Vietnam Basketball Association (VBA)'
  },
  {
    name: 'Đà Nẵng Dragon',
    city: 'Đà Nẵng',
    sport: 'basketball',
    competition: 'Vietnam Basketball Association (VBA)'
  },
  {
    name: 'Hà Nội Buffaloes',
    city: 'Hà Nội',
    sport: 'basketball',
    competition: 'Vietnam Basketball Association (VBA)'
  },
  {
    name: 'Hồ Chí Minh City Wings',
    city: 'Hồ Chí Minh',
    sport: 'basketball',
    competition: 'Vietnam Basketball Association (VBA)'
  },
  {
    name: 'Sài Gòn Heats',
    city: 'Hồ Chí Minh',
    sport: 'basketball',
    competition: 'Vietnam Basketball Association (VBA)'
  },
  {
    name: 'Thăng Long Warriors',
    city: 'Hà Nội',
    sport: 'basketball',
    competition: 'Vietnam Basketball Association (VBA)'
  },
  {
    name: 'Cao Bằng FC',
    city: 'Cao Bằng',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Kardiachain Sài Gòn FC',
    city: 'Hồ Chí Minh',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Quảng Nam FC',
    city: 'Quảng Nam',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Sahako FC',
    city: 'Hồ Chí Minh',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Sanna Khánh Hòa',
    city: 'Khánh Hoà',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Sanvinest Sanatech Khánh Hòa',
    city: 'Khánh Hoà',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Thái Sơn Bắc',
    city: 'Hà Nội',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Thái Sơn Nam',
    city: 'Hồ Chí Minh',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Tân Hiệp Hưng',
    city: 'Hồ Chí Minh',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'VietFootball FC',
    city: 'Hà Nội',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Đà Nẵng FC',
    city: 'Đà Nẵng',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Hưng Gia Khang Đắk Lắk FC',
    city: 'Đắk Lắk',
    sport: 'futsal',
    competition: 'Vietnam Futsal League (VFL)'
  },
  {
    name: 'Becamex Bình Dương',
    city: 'Bình Dương',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Hà Nội FC',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Hải Phòng FC',
    city: 'Hải Phòng',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Hoàng Anh Gia Lai',
    city: 'Gia Lai',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Dược Nam Hà Nam Định',
    city: 'Nam Định',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Quảng Nam FC',
    city: 'Quảng Nam',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Sài Gòn FC',
    city: 'Hồ Chí Minh',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Hồng Lĩnh Hà Tĩnh',
    city: 'Hà Tĩnh',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'SHB Đà Nẵng',
    city: 'Đà Nẵng',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Sông Lam Nghệ An',
    city: 'Nghệ An',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Than Quảng Ninh',
    city: 'Quảng Ninh',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Thanh Hóa FC',
    city: 'Thanh Hoá',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'TP. Hồ Chí Minh FC',
    city: 'Hồ Chí Minh',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Viettel FC',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'V.League 1'
  },
  {
    name: 'Bình Phước FC',
    city: 'Bình Phước',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Đắk Lắk',
    city: 'Đắk Lắk',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'FC Huế',
    city: 'Huế',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Xi măng Fico Tây Ninh FC',
    city: 'Tây Ninh',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Phố Hiến FC',
    city: 'Hưng Yên',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Long An FC',
    city: 'Long An',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Bình Định FC',
    city: 'Bình Định',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'An Giang FC',
    city: 'An Giang',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Sanna Khánh Hòa BVN',
    city: 'Khánh Hoà',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Đồng Tháp FC',
    city: 'Đồng Tháp',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Bà Rịa - Vũng Tàu FC',
    city: 'Bà Rịa - Vũng Tàu',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'XSKT Cần Thơ FC',
    city: 'Cần Thơ',
    sport: 'football',
    competition: 'V.League 2'
  },
  {
    name: 'Gia Định FC',
    city: 'Hồ Chí Minh',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Lâm Đồng FC',
    city: 'Lâm Đồng',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Phù Đổng FC',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Fishan Khánh Hoà FC',
    city: 'Khánh Hoà',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Tiền Giang FC',
    city: 'Tiền Giang',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Kon Tum FC',
    city: 'Kom Tum',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Công An Nhân Dân FC',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Vĩnh Long FC',
    city: 'Vĩnh Long',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Bình Thuận FC',
    city: 'Bình Thuận',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Hà Nội B',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Nam Định B',
    city: 'Nam Định',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Đồng Nai FC',
    city: 'Đồng Nai',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'PVF',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Trẻ TP. Hồ Chí Minh',
    city: 'Hồ Chí Minh',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Tuấn Tú Phú Thọ FC',
    city: 'Phú Thọ',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Đà Nẵng B',
    city: 'Đà Nẵng',
    sport: 'football',
    competition: 'Hạng Nhì'
  },
  {
    name: 'Hà Nội Sun FC',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'Hạng Ba'
  },
  {
    name: 'Long An B',
    city: 'Long An',
    sport: 'football',
    competition: 'Hạng Ba'
  },
  {
    name: 'Luxury Hạ Long FC',
    city: 'Quảng Ninh',
    sport: 'football',
    competition: 'Hạng Ba'
  },
  {
    name: 'Trẻ Viettel',
    city: 'Hà Nội',
    sport: 'football',
    competition: 'Hạng Ba'
  },
  {
    name: 'Đào Hà Vĩnh Phúc FC',
    city: 'Vĩnh Phúc',
    sport: 'football',
    competition: 'Hạng Ba'
  },
  {
    name: 'Bến Tre FC',
    city: 'Bến Tre',
    sport: 'football',
    competition: 'Hạng Ba'
  }
];
