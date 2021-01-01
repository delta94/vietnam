'use strict';

export default [
  {
    id: 'acb',
    name: 'ACB',
    url: 'https://acb.com.vn/',
    forex: {
      url: 'https://acb.com.vn/ACBComponent/jsp/html/vn/exchange/getlisttygia.jsp',
      options: {},
      processor: (body, cheerio) => {
        body = body.trim();
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('.wrap-content-search-big table tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(2)').text().trim().slice(0, 3) || '';
            const regex = /[&#,]/g;
            const buy =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            const sellTransfer =
              parseFloat($item.find('td:nth-child(6)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) ||
              sellTransfer;
            return { code, buy, transfer, sell };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'agribank',
    name: 'Agribank',
    url: 'https://www.agribank.com.vn/',
    forex: {
      url: 'https://www.agribank.com.vn/vn/ty-gia',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('table.table.table-bordered.table-striped tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#,]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            return { code, buy, transfer, sell };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'bidv',
    name: 'BIDV',
    url: 'https://www.bidv.com.vn/',
    forex: {
      url: 'https://www.bidv.com.vn/ServicesBIDV/ExchangeDetailServlet',
      options: { headers: { 'User-Agent': 'Chrome/84.0.4147.89' } },
      processor: (body: any = {}) => {
        const { data = [] } = JSON.parse(body);
        const rates = data
          .map(item => {
            const { currency = '', ban = '', muaCk = '', muaTm = '' } = item;
            const code = currency.trim();
            const regex = /[&#,-]/g;
            const sell = parseFloat(ban.replace(regex, '').trim()) || 0;
            const transfer = parseFloat(muaCk.replace(regex, '').trim()) || 0;
            const buy = parseFloat(muaTm.replace(regex, '').trim()) || 0;
            return { code, sell, transfer, buy };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && (buy || transfer) && sell;
          });
        return rates;
      }
    }
  },
  {
    id: 'cbbank',
    name: 'Construction Bank',
    url: 'https://www.cbbank.vn',
    forex: {
      url: 'https://www.cbbank.vn',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('marquee table tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim().slice(0, 3) || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'dongabank',
    name: 'DongABank',
    url: 'https://www.dongabank.com.vn/',
    forex: {
      url:
        'https://kinhdoanh.dongabank.com.vn/widget/temp/?p_p_id=DTSCDongaBankEView_WAR_DTSCDongaBankIERateportlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('#exchange-container table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(2)').text().trim().slice(0, 3) || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(5)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;

            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'eximbank',
    name: 'Eximbank',
    url: 'https://www.eximbank.com.vn/',
    forex: {
      url: 'https://www.eximbank.com.vn/WebsiteExrate/ExchangeRate_2012.aspx',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);
        const map: any = {
          'united state dollar (usd 50-100)': 'USD',
          'great british pound': 'GBP',
          'hong kong dollar': 'HKD',
          'swiss franc': 'CHF',
          yen: 'JPY',
          'australian dollar': 'AUD',
          'canadian dollar': 'CAD',
          'singapore dollar': 'SGD',
          euro: 'EUR',
          'new zealand dollar': 'NZD',
          'thaiLan baht': 'THB',
          'china yuan renmimbi': 'CNY'
        };
        const rates = $('table tbody table tr')
          .get()
          .map(item => {
            const $item = $(item);
            const name = $item.find('td:nth-child(1) span').text().trim().toLowerCase() || '';
            const code = map[name] || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2) span').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(4) span').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(6) span').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });
        return rates;
      }
    }
  },
  {
    id: 'gpbank',
    name: 'Global Petro Bank',
    url: 'https://www.gpbank.com.vn/',
    forex: {
      url: 'https://www.gpbank.com.vn/RateDetail',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('#divRateDetail1 table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim().slice(0, 3) || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'hdbank',
    name: 'HDBank',
    url: 'https://www.hdbank.com.vn/',
    forex: {
      url: 'https://www.hdbank.com.vn/en/corporate/exchange-rate',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('.exchange-rate-table table.table.table-common tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code =
              $item.find('td:nth-child(1) .exchange-rate-money__text').text().trim().slice(0, 3) ||
              '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        const codes = rates
          .map(rate => rate.code)
          .filter((value, index, array) => array.indexOf(value) === index);

        return codes.map(code => {
          const rate = rates.find(rate => rate.code === code);
          return rate;
        });
      }
    }
  },
  {
    id: 'kienlongbank',
    name: 'Kien Long Bank',
    url: 'https://kienlongbank.com',
    forex: {
      url: 'https://kienlongbank.com/ty-gia',
      options: {},
      processor: (body: any = '', cheerio) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('.list-result table.table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim().slice(0, 3) || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'lienvietpostbank',
    name: 'LienVietPostBank',
    url: 'https://www.lienvietpostbank.com.vn/',
    forex: {
      url: 'https://www.lienvietpostbank.com.vn/content/ty-gia',
      options: {},
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim().slice(0, 3) || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'msb',
    name: 'MSB',
    url: 'https://www.msb.com.vn/',
    forex: {
      url: 'https://www.msb.com.vn/',
      options: { rejectUnauthorized: false },
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('form#formExchangeRateMobile table tbody#tableExchangeRateMobile tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer: 0 };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'namabank',
    name: 'NamABank',
    url: 'https://namabank.com.vn/',
    forex: {
      url: 'https://namabank.com.vn/ty-gia-ngoai-te-gia-vang/',
      options: { headers: { 'User-Agent': 'Chrome/84.0.4147.89' } },
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('.table table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const text = $item.find('td:nth-child(1) p').text().trim() || '';
            const index = text.indexOf('(') + 1;
            const code = text.substring(index, index + 3);
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code !== 'Vàn' && code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'ocb',
    name: 'OCB',
    url: 'https://www.ocb.com.vn/',
    forex: {
      url: 'https://www.ocb.com.vn/vi/callchangerate',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('.content-table table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim().slice(0, 3) || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(5)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code !== 'GOL' && code && (buy || transfer) && sell;
          });

        const codes = rates
          .map(rate => rate.code)
          .filter((code, index, array) => array.indexOf(code) === index);

        return codes.map(code => {
          return rates.find(rate => rate.code === code);
        });
      }
    }
  },
  {
    id: 'oceanbank',
    name: 'Oceanbank',
    url: 'https://oceanbank.vn/',
    forex: {
      url: 'https://oceanbank.vn/ty-gia-ngoai-te.html',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('.ct_table table.tb_tg tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(5)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'sacombank',
    name: 'Sacombank',
    url: 'https://www.sacombank.com.vn/',
    forex: {
      url: 'https://www.sacombank.com.vn/company/Pages/ty-gia.aspx',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('.table-responsive table.table tbody tr.tr-items')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(5)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });
        return rates;
      }
    }
  },
  {
    id: 'saigonbank',
    name: 'Sai Gon Bank',
    url: 'https://saigonbank.com.vn/',
    forex: {
      url: 'https://saigonbank.com.vn/vi/truy-cap-nhanh/ty-gia-ngoai-te',
      options: {},
      processor: (body: any = {}, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('.j-paging-content table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim().slice(0, 3) || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, transfer, sell };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        const codes = rates
          .map(rate => rate.code)
          .filter((code, index, array) => array.indexOf(code) === index);

        return codes.map(code => {
          return rates.find(rate => rate.code === code);
        });
      }
    }
  },
  {
    id: 'seabank',
    name: 'SeABank',
    url: 'https://www.seabank.com.vn/',
    forex: {
      url: 'https://microservices01.seabank.com.vn/microserviceWebsite/web-api/getRate',
      options: { accept: 'application/json' },
      processor: (body: any = {}) => {
        try {
          const data = JSON.parse(body);
          let { rates = [] } = data;
          rates = rates
            .map(item => {
              const { ccy = '', buyRateCash = '', sellRateCash = '', buyRateTrans = '' } = item;
              const code = ccy.toUpperCase().trim();
              const regex = /[&#,-]/g;
              const sell = parseFloat(sellRateCash.replace(regex, '').trim()) || 0;
              const buy = parseFloat(buyRateCash.replace(regex, '').trim()) || 0;
              const transfer = parseFloat(buyRateTrans.replace(regex, '').trim()) || 0;
              return { code, sell, buy, transfer };
            })
            .filter(rate => {
              const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
              return code && (buy || transfer) && sell;
            });
          return rates;
        } catch (error) {
          console.error('seabank', error);
          return [];
        }
      }
    }
  },
  {
    id: 'scb',
    name: 'SCB',
    url: 'https://www.scb.com.vn/',
    forex: {
      url: 'https://www.scb.com.vn/Handlers/GetForeignExchange.aspx',
      options: {},
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1) strong').text().trim().slice(0, 3) || '';
            const buy =
              parseFloat($item.find('td:nth-child(2)').text().trim().replace(/[&#,]/g, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(/[&#,]/g, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(5)').text().trim().replace(/[&#,]/g, '')) || 0;
            return { code, buy, transfer, sell };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        const codes = rates
          .map(rate => rate.code)
          .filter((code, index, array) => array.indexOf(code) === index);

        return codes.map(code => {
          return rates.find(rate => rate.code === code);
        });
      }
    }
  },
  {
    id: 'shb',
    name: 'SHB',
    url: 'https://www.shb.com.vn/',
    forex: {
      url: 'https://ibanking.shb.com.vn/Rate/FxRate',
      options: {},
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('table.table.table-bordered tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1) b').text().trim() || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            return { code, buy, transfer, sell };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && (buy || transfer) && sell;
          });
        return rates;
      }
    }
  },
  {
    id: 'techcombank',
    name: 'Techcombank',
    url: 'https://www.techcombank.com.vn/',
    forex: {
      url: 'https://www.techcombank.com.vn/tools-utilities/exchange-rate/foreign-exchange',
      options: {},
      processor: (body, cheerio) => {
        const $: CheerioStatic = cheerio.load(body);

        const codes = ['USD', 'JPY', 'AUD', 'CAD', 'GBP', 'CHF', 'SGD', 'EUR', 'THB'];

        const rates = $('.table-responsive table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1) strong').text().trim().slice(0, 3) || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(2) strong').text().trim().replace(regex, '')) ||
              0;
            const transfer =
              parseFloat($item.find('td:nth-child(3) strong').text().trim().replace(regex, '')) ||
              0;
            const sell =
              parseFloat($item.find('td:nth-child(4) strong').text().trim().replace(regex, '')) ||
              0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, transfer = 0, sell = 0 } = rate;
            return code && codes.includes(code) && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'uob',
    name: 'UOB',
    url: 'https://www.uob.com.vn/',
    forex: {
      url: 'https://www.uob.com.vn/data-api-rates-vn/data-api/forex-vn?lang=en_VN',
      options: {},
      processor: (body: any) => {
        try {
          const { types = [] } = JSON.parse(body);
          const rates = types
            .map(item => {
              let { code = '', bankBuy = '', bankSell = '', bankBuyOD = '' } = item;
              code = code.toUpperCase().trim();
              const regex = /[&#,-]/g;
              const sell = parseFloat(bankSell.replace(regex, '').trim()) || 0;
              const buy = parseFloat(bankBuy.replace(regex, '').trim()) || 0;
              const transfer = parseFloat(bankBuyOD.replace(regex, '').trim()) || 0;
              return { code, sell, buy, transfer };
            })
            .filter(rate => {
              const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
              return code && (buy || transfer) && sell;
            });
          return rates;
        } catch (error) {
          console.error(error);
          return [];
        }
      }
    }
  },
  {
    id: 'vib',
    name: 'VIB',
    url: 'https://www.vib.com.vn/',
    forex: {
      url: 'https://www.vib.com.vn/wps/portal/vn/tool-landing',
      options: {},
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('table.table.table-border.vib-v2-table-exchange tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/g, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });
        return rates;
      }
    }
  },
  {
    id: 'vietbank',
    name: 'VietBank',
    url: 'https://www.vietbank.com.vn/',
    forex: {
      url: 'https://www.vietbank.com.vn/api/ApiSupport/getfiltercurrency',
      options: {},
      processor: (body: any = {}) => {
        try {
          const data = JSON.parse(body);
          const rates = data
            .map(item => {
              const { currencyCode = '', buyCash = '', saleTransfer = '', buyTransfer = '' } = item;
              const code = currencyCode.toUpperCase().trim();
              const regex = /[&#,-]/g;
              const sell = parseFloat(saleTransfer.replace(regex, '').trim()) || 0;
              const buy = parseFloat(buyCash.replace(regex, '').trim()) || 0;
              const transfer = parseFloat(buyTransfer.replace(regex, '').trim()) || 0;
              return { code, sell, buy, transfer };
            })
            .filter(rate => {
              const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
              return code && (buy || transfer) && sell;
            });
          return rates;
        } catch (error) {
          console.error('vietbank', error);
          return [];
        }
      }
    }
  },
  {
    id: 'vietcapitalbank',
    name: 'Viet Capital Bank',
    url: 'https://www.vietcapitalbank.com.vn/',
    forex: {
      url: 'https://www.vietcapitalbank.com.vn/personal/',
      options: {},
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('#tool-table1 .table-content table tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#.-]/g;
            const buy =
              parseFloat(
                $item.find('td:nth-child(2)').text().trim().replace(regex, '').replace(/,/, '.')
              ) || 0;
            const transfer =
              parseFloat(
                $item.find('td:nth-child(3)').text().trim().replace(regex, '').replace(/,/, '.')
              ) || 0;
            const sell =
              parseFloat(
                $item.find('td:nth-child(4)').text().trim().replace(regex, '').replace(/,/, '.')
              ) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'vietcombank',
    name: 'Vietcombank',
    url: 'https://portal.vietcombank.com.vn/',
    forex: {
      url: 'https://portal.vietcombank.com.vn/UserControls/TVPortal.TyGia/pListTyGia.aspx',
      options: { rejectUnauthorized: false },
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);

        const rates = $('table.rateTable tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(2)').text().trim() || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;
            const transfer =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });

        return rates;
      }
    }
  },
  {
    id: 'vietinbank',
    name: 'VietinBank',
    url: 'https://www.vietinbank.vn/',
    forex: {
      url: 'https://www.vietinbank.vn/web/home/en/doc/saving/exrate.html',
      options: {},
      processor: (body: any, cheerio: any) => {
        const $: CheerioStatic = cheerio.load(body);
        const rates = $('table#hor-ex-b tbody tr')
          .get()
          .map(item => {
            const $item = $(item);
            const code = $item.find('td:nth-child(1)').text().trim() || '';
            const regex = /[&#,-]/g;
            const buy =
              parseFloat($item.find('td:nth-child(3)').text().trim().replace(regex, '')) || 0;

            const transfer =
              parseFloat($item.find('td:nth-child(4)').text().trim().replace(regex, '')) || 0;
            const sell =
              parseFloat($item.find('td:nth-child(5)').text().trim().replace(regex, '')) || 0;
            return { code, buy, sell, transfer };
          })
          .filter(rate => {
            const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
            return code && (buy || transfer) && sell;
          });
        return rates;
      }
    }
  },
  {
    id: 'vpbank',
    name: 'VPBank',
    url: 'https://www.vpbank.com.vn/',
    forex: {
      url: 'https://www.vpbank.com.vn/en/api/foreignexchange/getlastestfe',
      options: {},
      processor: (body: any = {}) => {
        try {
          const { data = [] } = JSON.parse(body);
          const rates = data
            .map(item => {
              const { Symbol: symbol = '', Buy = '', Sell = '', Transfer = '' } = item;
              const code = symbol.toUpperCase().trim();
              const regex = /[&#,-]/g;
              const sell = parseFloat(Sell.replace(regex, '').trim()) || 0;
              const buy = parseFloat(Buy.replace(regex, '').trim()) || 0;
              const transfer = parseFloat(Transfer.replace(regex, '').trim()) || 0;
              return { code, sell, buy, transfer };
            })
            .filter(rate => {
              const { code = '', buy = 0, sell = 0, transfer = 0 } = rate;
              return code && (buy || transfer) && sell;
            });
          return rates;
        } catch (error) {
          console.error('vpbank', error);
          return [];
        }
      }
    }
  }
];
