# VNPay

A Node.js API Wrapper Library for [VNPay](https://vnpay.vn/)

If you've found an bug/issue, please [send me an email](mailto:hieumdoan@gmail.com).

If you enjoyed this project — or just feeling generous, consider [buying me a beer](https://www.paypal.com/paypalme/hieudoanm/). Cheers! 🍻

## Installation

```sh
npm install vnpay
# OR
yarn add vnpay
```

## Usage

[Full Documentation](https://sandbox.vnpayment.vn/apis/)

```ts
import VNPay from 'vnpay';

const vnpay = new VNPay({
  payUrl: '', // string - if this field is empty - testPayUrl (https://sandbox.vnpayment.vn/paymentv2/vpcpay.html) is used
  tmnCode: '', // string
  secretKey: '', // string
  returnUrl: '' // string
});

// Get Banks
const banks: Array<any> = vnpay.getBanks();

// Get Categories
const categories: Array<any> = vnpay.getCategories();

// Create Payment URL
const order: any = {
  orderInfo: 'Thực Phẩm - Tiêu Dùng',
  orderType: '100000',
  amount: 1000,
  ipAddr: '127.0.0.1',
  bankCode: 'NCB'
};
const url: string = vnpay.createPaymentUrl(order);

// Verify Return URL
const response: any = vnpay.verifyReturnUrl(query);
const { code: '', message: '' } = message;
```

## Banks

| code            | name                                                |
| --------------- | --------------------------------------------------- |
| ABBANK          | Ngân hàng thương mại cổ phần An Bình (ABBANK)       |
| ACB             | Ngân hàng ACB                                       |
| AGRIBANK        | Ngân hàng Nông nghiệp (Agribank)                    |
| BACABANK        | Ngân Hàng TMCP Bắc Á                                |
| BIDV            | Ngân hàng đầu tư và phát triển Việt Nam (BIDV)      |
| DONGABANK       | Ngân hàng Đông Á (DongABank)                        |
| EXIMBANK        | Ngân hàng EximBank                                  |
| HDBANK          | Ngan hàng HDBank                                    |
| IVB             | Ngân hàng TNHH Indovina (IVB)                       |
| MBBANK          | Ngân hàng thương mại cổ phần Quân đội               |
| MSBANK          | Ngân hàng Hàng Hải (MSBANK)                         |
| NAMABANK        | Ngân hàng Nam Á (NamABank)                          |
| NCB             | Ngân hàng Quốc dân (NCB)                            |
| OCB             | Ngân hàng Phương Đông (OCB)                         |
| OJB             | Ngân hàng Đại Dương (OceanBank)                     |
| PVCOMBANK       | Ngân hàng TMCP Đại Chúng Việt Nam                   |
| SACOMBANK       | Ngân hàng TMCP Sài Gòn Thương Tín (SacomBank)       |
| SAIGONBANK      | Ngân hàng thương mại cổ phần Sài Gòn Công Thương    |
| SCB             | Ngân hàng TMCP Sài Gòn (SCB)                        |
| SHB             | Ngân hàng Thương mại cổ phần Sài Gòn - Hà Nội(SHB)  |
| TECHCOMBANK     | Ngân hàng Kỹ thương Việt Nam (TechcomBank)          |
| TPBANK          | Ngân hàng Tiên Phong (TPBank)                       |
| VPBANK          | Ngân hàng Việt Nam Thịnh vượng (VPBank)             |
| SEABANK         | Ngân Hàng TMCP Đông Nam Á                           |
| VIB             | Ngân hàng Thương mại cổ phần Quốc tế Việt Nam (VIB) |
| VIETABANK       | Ngân hàng TMCP Việt Á                               |
| VIETBANK        | Ngân hàng thương mại cổ phần Việt Nam Thương Tín    |
| VIETCAPITALBANK | Ngân Hàng Bản Việt                                  |
| VIETCOMBANK     | Ngân hàng Ngoại thương (Vietcombank)                |
| VIETINBANK      | Ngân hàng Công thương (Vietinbank)                  |
| BIDC            | Ngân Hàng BIDC                                      |
| LAOVIETBANK     | NGÂN HÀNG LIÊN DOANH LÀO - VIỆT                     |
| WOORIBANK       | Ngân hàng TNHH MTV Woori Việt Nam                   |
| AMEX            | American Express                                    |
| VISA            | Thẻ quốc tế Visa                                    |
| MASTERCARD      | Thẻ quốc tế MasterCard                              |
| JCB             | Thẻ quốc tế JCB                                     |
| UPI             | UnionPay International                              |
| VNMART          | Ví điện tử VnMart                                   |
| VNPAYQR         | Cổng thanh toán VNPAYQR                             |
| 1PAY            | Ví điện tử 1Pay                                     |
| FOXPAY          | Ví điện tử FOXPAY                                   |
| VIMASS          | Ví điện tử Vimass                                   |
| VINID           | Ví điện tử VINID                                    |
| VIVIET          | Ví điện tử Ví Việt                                  |
| VNPTPAY         | Ví điện tử VNPTPAY                                  |
| YOLO            | Ví điện tử YOLO                                     |
| VIETCAPITALBANK | Ngân Hàng Bản Việt                                  |

## Categories

| code (type) | category (description)           |
| ----------- | -------------------------------- |
| 100000      | Thực Phẩm - Tiêu Dùng            |
| 100001      | Bánh kẹo - Đồ ăn vặt - Giải khát |
| 100003      | Thực phẩm khô                    |
| 100004      | Sữa - Kem & sản phẩm từ sữa      |
| 100005      | Hóa phẩm – chất tẩy              |
| 110000      | Điện thoại - Máy tính bảng       |
| 110001      | Điện thoại dị động               |
| 110002      | Máy tính bảng                    |
| 110003      | Smart Watch                      |
| 110004      | Phụ kiện                         |
| 110005      | Sim/Thẻ                          |
| 120000      | Điện gia dụng                    |
| 120001      | Điện gia dụng nhà bếp            |
| 120002      | Điện gia dụng gia đình           |
| 120003      | Điện lạnh & Điện cỡ lớn          |
| 130000      | Máy tính - Thiết bị văn phòng    |
| 130001      | Máy tính xách tay                |
| 130002      | Máy tính để bàn                  |
| 130003      | Màn hình máy tính                |
| 130004      | Thiết bị mạng                    |
| 130005      | Phần mềm                         |
| 130006      | Linh kiện, Phụ kiện              |
| 130007      | Máy in                           |
| 130008      | Thiết bị văn phòng khác          |
| 140000      | Điện tử - Âm thanh               |
| 140001      | Tivi                             |
| 140002      | Loa                              |
| 140003      | Dàn âm thanh                     |
| 140004      | Đồ chơi công nghệ                |
| 140005      | Thiết bị Kỹ thuật số             |
| 150000      | Sách/Báo/Tạp chí                 |
| 150001      | Văn phòng phẩm                   |
| 150002      | Quà tặng                         |
| 150003      | Nhạc cụ                          |
| 160000      | Thể thao, dã ngoại               |
| 160001      | Trang phục thể thao              |
| 160002      | Phụ kiện thể thao                |
| 160003      | Đồ tập Yoga, thể hình            |
| 160004      | Đồ/Vật dụng Dã ngoại             |
| 170000      | Khách sạn & Du lịch              |
| 170001      | Du lịch trong nước               |
| 170002      | Du lịch nước ngoài               |
| 170003      | Đặt phòng khách sạn              |
| 180000      | Ẩm thực                          |
| 190000      | Giải trí & Đào tạo               |
| 190001      | Vé xem phim                      |
| 190002      | Thẻ học/ Học trực tuyến          |
| 190003      | Giải trí, vui chơi khác          |
| 190004      | Thẻ học trực tuyến/Thẻ hội viên  |
| 200000      | Thời trang                       |
| 200001      | Thời trang nữ                    |
| 200002      | Phụ kiện Nữ                      |
| 200003      | Thời trang Nam                   |
| 200004      | Thời trang Trẻ Em                |
| 210000      | Sức khỏe - Làm đẹp               |
| 210001      | Kem chống nắng                   |
| 210002      | Chăm sóc da mặt                  |
| 210003      | Trang điểm                       |
| 210004      | Chăm sóc cá nhân                 |
| 220000      | Mẹ & Bé                          |
| 220001      | Sữa & Bột cho bé                 |
| 220002      | Vệ sinh chăm sóc cho bé          |
| 220003      | Đồ chơi & Đồ dùng trẻ em         |
| 220004      | Đồ dùng ăn uống cho bé           |
| 230000      | Vật dụng nhà bếp                 |
| 230001      | Nội thất                         |
| 240000      | Xe cộ - phương tiện              |
| 240001      | Mô tô - Xe máy                   |
| 240002      | Phụ kiện xe máy                  |
| 240003      | Phụ kiện ô tô                    |
| 240004      | Xe đạp điện                      |
| 250000      | Thanh toán hóa đơn               |
| 250001      | Hóa đơn tiền điện                |
| 250002      | Hóa đơn tiền nước                |
| 250003      | Hóa đơn điện thoại trả sau       |
| 250004      | Hóa đơn ADSL                     |
| 250005      | Hóa đơn truyền hình cáp          |
| 250006      | Hóa đơn dịch vụ                  |
| 250007      | Vé máy bay                       |
| 260000      | Mua mã thẻ                       |
| 260001      | Thẻ điện thoại                   |
| 260002      | Thẻ Game                         |
| 270000      | Nhà thuốc - Dịch vụ y tế         |
| 270001      | Đăng ký khám/chữa bệnh           |
