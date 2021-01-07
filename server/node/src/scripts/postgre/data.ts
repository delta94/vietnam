import { tables } from '../../models/postgre';

const {
  banks: { name: table, schema }
} = tables;

export { table, schema };

export const rows: Array<any> = [
  {
    code: 'ABB',
    name: 'Ngân hàng An Bình',
    name_en: 'An Binh Bank',
    name_short: '',
    url: 'https://abbank.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'ACB',
    name: 'Ngân hàng Á Châu',
    name_en: 'Asia Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://acb.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'AGRIBANK',
    name: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam',
    name_en: 'Vietnam Bank for Agriculture and Rural Development',
    name_short: 'Agribank',
    url: 'https://agribank.com.vn',
    type: 'Ngân Hàng Thương Mại Nhà Nước',
    type_en: 'State-owned Bank'
  },
  {
    code: 'BAB',
    name: 'Ngân hàng Bắc Á',
    name_en: 'Bac A Bank',
    name_short: 'BacABank',
    url: 'https://baca-bank.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'BID',
    name: 'Ngân hàng Thương mại Cổ phần Đầu tư và Phát triển Việt Nam',
    name_en: 'JSC Bank for Investment and Development of Vietnam',
    name_short: 'BIDV',
    url: 'https://bidv.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'BVB',
    name: 'Ngân hàng Bản Việt',
    name_en: 'Viet Capital Bank',
    name_short: 'VietCapitalBank',
    url: 'https://vietcapitalbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'CB',
    name: 'Ngân hàng Xây dựng',
    name_en: 'Construction Bank',
    name_short: '',
    url: 'https://cbbank.vn',
    type: 'Ngân Hàng Thương Mại Nhà Nước',
    type_en: 'State-owned Bank'
  },
  {
    code: 'CTG',
    name: 'Ngân hàng Công thương Việt Nam',
    name_en: 'Vietnam Bank for Industry and Trade',
    name_short: 'Vietinbank',
    url: 'https://vietinbank.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'EIB',
    name: 'Ngân hàng Xuất Nhập khẩu Việt Nam',
    name_en: 'Vietnam Export Import Commercial Joint Stock Bank',
    name_short: 'Eximbank',
    url: 'https://eximbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'GPBANK',
    name: 'Ngân hàng Dầu Khí Toàn Cầu',
    name_en: 'Global Petro Bank',
    name_short: 'GPBank',
    url: 'https://gpbank.com.vn',
    type: 'Ngân Hàng Thương Mại Nhà Nước',
    type_en: 'State-owned Bank'
  },
  {
    code: 'HDB',
    name: 'Ngân hàng thương mại cổ phần Phát triển Nhà Thành phố Hồ Chí Minh',
    name_en: 'Ho Chi Minh City Development Bank',
    name_short: 'HDBank',
    url: 'https://hdbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'KLB',
    name: 'Ngân Hàng Kiên Long',
    name_en: 'Kien Long Commercial Joint Stock Bank',
    name_short: 'KienLongBank',
    url: 'https://kienlongbank.com',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'LPB',
    name: 'Ngân hàng Bưu điện Liên Việt',
    name_en: 'Lien Viet Postal Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://lienvietpostbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'MB',
    name: 'Ngân hàng Quân đội',
    name_en: 'Military Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://mbbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'MSB',
    name: 'Ngân hàng Hàng Hải Việt Nam',
    name_en: 'Vietnam Maritime Joint - Stock Commercial Bank',
    name_short: '',
    url: 'https://msb.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'NAB',
    name: 'Ngân hàng thương mại cổ phần Nam Á',
    name_en: 'Nam A Bank',
    name_short: 'Nam A Bank',
    url: 'https://namabank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'NCB',
    name: 'Ngân hàng Quốc Dân',
    name_en: 'National Citizen Bank',
    name_short: '',
    url: 'https://ncb-bank.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'OCB',
    name: 'Ngân hàng Phương Đông',
    name_en: 'Orient Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://ocb.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'OCEANBANK',
    name: 'Ngân hàng Đại Dương',
    name_en: 'Ocean Bank',
    name_short: 'Oceanbank',
    url: 'https://oceanbank.vn',
    type: 'Ngân Hàng Thương Mại Nhà Nước',
    type_en: 'State-owned Bank'
  },
  {
    code: 'PGB',
    name: 'Ngân hàng Xăng dầu Petrolimex',
    name_en: 'Petrolimex Commercial Joint Stock Bank',
    name_short: 'PG Bank',
    url: 'https://pgbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'SCB',
    name: 'Ngân hàng TMCP Sài Gòn',
    name_en: 'Sai Gon Commercial Bank',
    name_short: '',
    url: 'https://scb.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'SGB',
    name: 'Ngân hàng Sài Gòn Công Thương',
    name_en: 'Saigon Bank for Industry and Trade',
    name_short: 'Saigonbank',
    url: 'https://saigonbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'SHB',
    name: 'Ngân hàng Sài Gòn - Hà Nội',
    name_en: 'Saigon - Hanoi Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://shb.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'SSB',
    name: 'Ngân hàng Đông Nam Á',
    name_en: 'South East Asia Bank',
    name_short: '',
    url: 'https://seabank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'STB',
    name: 'Ngân hàng Sài Gòn Thương Tín',
    name_en: 'Sai Gon Thuong Tin Commercial Joint Stock Bank',
    name_short: 'Sacombank',
    url: 'https://sacombank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'TCB',
    name: 'Ngân hàng Kỹ Thương Việt Nam',
    name_en: 'VietNam Technological and Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://techcombank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'TPB',
    name: 'Ngân hàng Tiên Phong',
    name_en: 'Tien Phong Bank',
    name_short: 'TPBank',
    url: 'https://tpb.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'VBB',
    name: 'Ngân hàng Việt Nam Thương Tín',
    name_en: 'Vietnam Thuong Tin Commercial Joint Stock Bank',
    name_short: 'VietBank',
    url: 'https://vietbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'VCB',
    name: 'Ngân hàng Ngoại thương Việt Nam',
    name_en: 'Joint Stock Commercial Bank for Foreign Trade of Vietnam',
    name_short: 'Vietcombank',
    url: 'https://vietcombank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'VIB',
    name: 'Ngân hàng Quốc tế',
    name_en: 'Vietnam International and Commercial Joint Stock Bank',
    name_short: '',
    url: 'https://vib.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'VPB',
    name: 'Ngân hàng Việt Nam Thịnh Vượng',
    name_en: 'Vietnam Prosperity Bank',
    name_short: 'VPBank',
    url: 'https://vpbank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'BAOVIETBANK',
    name: 'Ngân hàng Bảo Việt',
    name_en: 'Bao Viet Bank',
    name_short: 'BaoVietBank',
    url: 'https://baovietbank.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'PVCOMBANK',
    name: 'Ngân hàng Đại chúng Việt Nam',
    name_en: 'Vietnam Public Joint Stock Commercial Bank',
    name_short: 'PVcombank',
    url: 'https://pvcombank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'DAB',
    name: 'Ngân hàng thương mại cổ phần Đông Á',
    name_en: 'DongA Bank',
    name_short: 'Đông Á Bank',
    url: 'https://dongabank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  },
  {
    code: 'VIETABANK',
    name: 'Ngân hàng Việt Á',
    name_en: 'Viet A Bank',
    name_short: 'VietABank',
    url: 'https://vietabank.com.vn',
    type: 'Ngân Hàng Thương Mại Cổ Phần',
    type_en: 'Private Joint-Stock Commercial Bank'
  }
];
