import { tables } from '../../models/postgre';

const {
  historyDynasties: { name: table, schema }
} = tables;

export { table, schema };

export const rows: Array<any> = [
  {
    temple_name: 'Ngô Vương',
    birth_name: 'Ngô Quyền',
    birth: 0,
    death: 0,
    start_year: 939,
    end_year: 944,
    dynasty: 'Ngô'
  },
  {
    temple_name: '',
    birth_name: 'Dương Tam Kha',
    birth: 0,
    death: 0,
    start_year: 944,
    end_year: 950,
    dynasty: 'Ngô'
  },
  {
    temple_name: 'Đinh Tiên Hoàng',
    birth_name: 'Đinh Bộ Lĩnh',
    birth: 0,
    death: 0,
    start_year: 968,
    end_year: 979,
    dynasty: 'Đinh'
  },
  {
    temple_name: 'Đinh Phế Đế',
    birth_name: 'Đinh Toàn / Đinh Tuệ',
    birth: 0,
    death: 0,
    start_year: 979,
    end_year: 980,
    dynasty: 'Đinh'
  },
  {
    temple_name: 'Lê Đại Hành',
    birth_name: 'Lê Hoàn',
    birth: 0,
    death: 0,
    start_year: 980,
    end_year: 1005,
    dynasty: 'Tiền Lê'
  },
  {
    temple_name: 'Lê Trung Tông',
    birth_name: 'Lê Long Việt',
    birth: 0,
    death: 0,
    start_year: 1005,
    end_year: 1005,
    dynasty: 'Tiền Lê'
  },
  {
    temple_name: 'Lê Ngọa Triều',
    birth_name: 'Lê Long Đĩnh / Lê Chí Trung',
    birth: 0,
    death: 0,
    start_year: 1005,
    end_year: 1009,
    dynasty: 'Tiền Lê'
  },
  {
    temple_name: 'Lý Thái Tổ',
    birth_name: 'Lý Công Uẩn',
    birth: 974,
    death: 1028,
    start_year: 1010,
    end_year: 1028,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Thái Tông',
    birth_name: 'Lý Phật Mã / Lý Đức Chính',
    birth: 1000,
    death: 1054,
    start_year: 1028,
    end_year: 1054,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Thánh Tông',
    birth_name: 'Lý Nhật Tôn',
    birth: 1023,
    death: 1072,
    start_year: 1054,
    end_year: 1072,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Nhân Tông',
    birth_name: 'Lý Càn Đức',
    birth: 1066,
    death: 1127,
    start_year: 1072,
    end_year: 1127,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Thần Tông',
    birth_name: 'Lý Dương Hoán',
    birth: 1116,
    death: 1138,
    start_year: 1128,
    end_year: 1138,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Anh Tông',
    birth_name: 'Lý Thiên Tộ',
    birth: 1136,
    death: 1175,
    start_year: 1138,
    end_year: 1175,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Cao Tông',
    birth_name: 'Lý Long Trát or Lý Long Cán',
    birth: 1173,
    death: 1210,
    start_year: 1175,
    end_year: 1210,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Huệ Tông',
    birth_name: 'Lý Hạo Sảm',
    birth: 1194,
    death: 1226,
    start_year: 1211,
    end_year: 1226,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Lý Chiêu Hoàng',
    birth_name: 'Lý Phật Kim / Lý Thiên Hinh',
    birth: 1218,
    death: 1278,
    start_year: 1224,
    end_year: 1225,
    dynasty: 'Lý'
  },
  {
    temple_name: 'Trần Thái Tông',
    birth_name: 'Trần Cảnh',
    birth: 0,
    death: 0,
    start_year: 1225,
    end_year: 1258,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Thánh Tông',
    birth_name: 'Trần Hoàng',
    birth: 0,
    death: 0,
    start_year: 1258,
    end_year: 1278,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Nhân Tông',
    birth_name: 'Trần Khâm',
    birth: 0,
    death: 0,
    start_year: 1279,
    end_year: 1293,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Anh Tông',
    birth_name: 'Trần Thuyên',
    birth: 0,
    death: 0,
    start_year: 1293,
    end_year: 1314,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Minh Tông',
    birth_name: 'Trần Mạnh',
    birth: 0,
    death: 0,
    start_year: 1314,
    end_year: 1329,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Hiến Tông',
    birth_name: 'Trần Vượng',
    birth: 0,
    death: 0,
    start_year: 1330,
    end_year: 1341,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Dụ Tông',
    birth_name: 'Trần Hạo',
    birth: 0,
    death: 0,
    start_year: 1342,
    end_year: 1369,
    dynasty: 'Trần'
  },
  {
    temple_name: '',
    birth_name: 'Dương Nhật Lễ',
    birth: 0,
    death: 0,
    start_year: 1369,
    end_year: 1370,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Nghệ Tông',
    birth_name: 'Trần Phủ',
    birth: 0,
    death: 0,
    start_year: 1371,
    end_year: 1372,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Duệ Tông',
    birth_name: 'Trần Kính',
    birth: 0,
    death: 0,
    start_year: 1372,
    end_year: 1377,
    dynasty: 'Trần'
  },
  {
    temple_name: '',
    birth_name: 'Trần Hiện',
    birth: 0,
    death: 0,
    start_year: 1377,
    end_year: 1388,
    dynasty: 'Trần'
  },
  {
    temple_name: 'Trần Thuận Tông',
    birth_name: 'Trần Ngung',
    birth: 0,
    death: 0,
    start_year: 1388,
    end_year: 1398,
    dynasty: 'Trần'
  },
  {
    temple_name: '',
    birth_name: 'Trần An',
    birth: 0,
    death: 0,
    start_year: 1398,
    end_year: 1400,
    dynasty: 'Trần'
  },
  {
    temple_name: '',
    birth_name: 'Hồ Quý Ly',
    birth: 1336,
    death: 1407,
    start_year: 1400,
    end_year: 1401,
    dynasty: 'Hồ'
  },
  {
    temple_name: '',
    birth_name: 'Hồ Hán Thương',
    birth: 0,
    death: 1407,
    start_year: 1401,
    end_year: 1407,
    dynasty: 'Hồ'
  },
  {
    temple_name: '',
    birth_name: 'Trần Ngỗi',
    birth: 0,
    death: 0,
    start_year: 1407,
    end_year: 1409,
    dynasty: 'Hậu Trần'
  },
  {
    temple_name: '',
    birth_name: 'Trần Quý Khoáng',
    birth: 0,
    death: 0,
    start_year: 1409,
    end_year: 1414,
    dynasty: 'Hậu Trần'
  },
  {
    temple_name: 'Lê Thái Tổ',
    birth_name: 'Lê Lợi',
    birth: 0,
    death: 0,
    start_year: 1428,
    end_year: 1433,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: 'Lê Thái Tông',
    birth_name: 'Lê Nguyên Long',
    birth: 0,
    death: 0,
    start_year: 1433,
    end_year: 1442,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: 'Lê Nhân Tông',
    birth_name: 'Lê Bang Cơ',
    birth: 0,
    death: 0,
    start_year: 1442,
    end_year: 1459,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Nghi Dân',
    birth: 0,
    death: 0,
    start_year: 1459,
    end_year: 1460,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: 'Lê Thánh Tông',
    birth_name: 'Lê Tư Thành / Lê Hạo',
    birth: 0,
    death: 0,
    start_year: 1460,
    end_year: 1497,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: 'Lê Hiến Tông',
    birth_name: 'Lê Tranh / Lê Tăng / Lê Huy',
    birth: 0,
    death: 0,
    start_year: 1497,
    end_year: 1504,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: 'Lê Túc Tông',
    birth_name: 'Lê Thuần',
    birth: 0,
    death: 0,
    start_year: 1504,
    end_year: 1504,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Tuấn / Lê Huyên',
    birth: 0,
    death: 0,
    start_year: 1505,
    end_year: 1509,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Oanh',
    birth: 0,
    death: 0,
    start_year: 1510,
    end_year: 1516,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Quang Trị',
    birth: 0,
    death: 0,
    start_year: 1516,
    end_year: 1516,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: 'Lê Chiêu Tông',
    birth_name: 'Lê Y / Lê Huệ',
    birth: 0,
    death: 0,
    start_year: 1516,
    end_year: 1522,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Bảng',
    birth: 0,
    death: 0,
    start_year: 1518,
    end_year: 1519,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Do',
    birth: 0,
    death: 0,
    start_year: 1519,
    end_year: 1519,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Xuân / Lê Lự',
    birth: 0,
    death: 0,
    start_year: 1522,
    end_year: 1527,
    dynasty: 'Hậu Lê - Lê Sơ'
  },
  {
    temple_name: '',
    birth_name: 'Lê Ninh',
    birth: 0,
    death: 0,
    start_year: 1533,
    end_year: 1548,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Huyên',
    birth: 0,
    death: 0,
    start_year: 1548,
    end_year: 1556,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Bang',
    birth: 0,
    death: 0,
    start_year: 1556,
    end_year: 1573,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Đàm',
    birth: 0,
    death: 0,
    start_year: 1573,
    end_year: 1599,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Tân',
    birth: 0,
    death: 0,
    start_year: 1599,
    end_year: 1619,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Kỳ',
    birth: 0,
    death: 0,
    start_year: 1619,
    end_year: 1643,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Hựu',
    birth: 0,
    death: 0,
    start_year: 1643,
    end_year: 1649,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Kỳ',
    birth: 0,
    death: 0,
    start_year: 1649,
    end_year: 1662,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Vũ',
    birth: 0,
    death: 0,
    start_year: 1663,
    end_year: 1671,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Cối / Lê Duy Khoái',
    birth: 0,
    death: 0,
    start_year: 1672,
    end_year: 1675,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Cáp / Lê Duy Hiệp',
    birth: 0,
    death: 0,
    start_year: 1675,
    end_year: 1705,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Đường',
    birth: 0,
    death: 0,
    start_year: 1706,
    end_year: 1729,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Phường',
    birth: 0,
    death: 0,
    start_year: 1729,
    end_year: 1732,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Tường',
    birth: 0,
    death: 0,
    start_year: 1732,
    end_year: 1735,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Thận / Lê Duy Chấn',
    birth: 0,
    death: 0,
    start_year: 1735,
    end_year: 1740,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Diêu',
    birth: 0,
    death: 0,
    start_year: 1740,
    end_year: 1786,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: '',
    birth_name: 'Lê Duy Khiêm / Lê Duy Kỳ',
    birth: 0,
    death: 0,
    start_year: 1786,
    end_year: 1788,
    dynasty: 'Hậu Lê - Lê Trung Hưng'
  },
  {
    temple_name: 'Mạc Thái Tổ',
    birth_name: 'Mạc Đăng Dung',
    birth: 1483,
    death: 1541,
    start_year: 1527,
    end_year: 1529,
    dynasty: 'Hậu Lê - Mạc'
  },
  {
    temple_name: 'Mạc Thái Tông',
    birth_name: 'Mạc Đăng Doanh',
    birth: 1500,
    death: 1540,
    start_year: 1530,
    end_year: 1540,
    dynasty: 'Hậu Lê - Mạc'
  },
  {
    temple_name: 'Mạc Hiến Tông',
    birth_name: 'Mạc Phúc Hải',
    birth: 0,
    death: 1546,
    start_year: 1541,
    end_year: 1546,
    dynasty: 'Hậu Lê - Mạc'
  },
  {
    temple_name: 'Mạc Tuyên Long',
    birth_name: 'Mạc Phúc Nguyên',
    birth: 1561,
    death: 1547,
    start_year: 1547,
    end_year: 1561,
    dynasty: 'Hậu Lê - Mạc'
  },
  {
    temple_name: 'Mạc Anh Tổ',
    birth_name: 'Mạc Mậu Hợp',
    birth: 1560,
    death: 1592,
    start_year: 1562,
    end_year: 1592,
    dynasty: 'Hậu Lê - Mạc'
  },
  {
    temple_name: 'Mạc Cảnh Tông',
    birth_name: 'Mạc Toàn',
    birth: 0,
    death: 1592,
    start_year: 1592,
    end_year: 1592,
    dynasty: 'Hậu Lê - Mạc'
  },
  {
    temple_name: 'Thái Đức Hoàng Đế',
    birth_name: 'Nguyễn Nhạc',
    birth: 0,
    death: 0,
    start_year: 1788,
    end_year: 1788,
    dynasty: 'Tây Sơn'
  },
  {
    temple_name: 'Quang Trung Hoàng Đế',
    birth_name: 'Nguyễn Huệ',
    birth: 0,
    death: 0,
    start_year: 1788,
    end_year: 1792,
    dynasty: 'Tây Sơn'
  },
  {
    temple_name: 'Cảnh Thịnh Hoàng Đế',
    birth_name: 'Nguyễn Quang Toản',
    birth: 0,
    death: 0,
    start_year: 1792,
    end_year: 1802,
    dynasty: 'Tây Sơn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Ánh',
    birth: 0,
    death: 0,
    start_year: 1802,
    end_year: 1820,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Đảm',
    birth: 0,
    death: 0,
    start_year: 1820,
    end_year: 1841,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Miên Tông',
    birth: 0,
    death: 0,
    start_year: 1841,
    end_year: 1847,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Hồng Nhậm',
    birth: 0,
    death: 0,
    start_year: 1847,
    end_year: 1883,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Ưng Ái',
    birth: 0,
    death: 0,
    start_year: 1883,
    end_year: 1883,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Hồng Dật',
    birth: 0,
    death: 0,
    start_year: 1883,
    end_year: 1883,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Ưng Đăng',
    birth: 0,
    death: 0,
    start_year: 1883,
    end_year: 1884,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Ưng Lịch',
    birth: 0,
    death: 0,
    start_year: 1884,
    end_year: 1885,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Ưng Kỷ',
    birth: 0,
    death: 0,
    start_year: 1885,
    end_year: 1889,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Bửu Lân',
    birth: 0,
    death: 0,
    start_year: 1889,
    end_year: 1907,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Vĩnh San',
    birth: 0,
    death: 0,
    start_year: 1907,
    end_year: 1916,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Bửu Đảo',
    birth: 0,
    death: 0,
    start_year: 1916,
    end_year: 1925,
    dynasty: 'Nguyễn'
  },
  {
    temple_name: '',
    birth_name: 'Nguyễn Phúc Vĩnh Thụy',
    birth: 0,
    death: 0,
    start_year: 1925,
    end_year: 1945,
    dynasty: 'Nguyễn'
  }
];
