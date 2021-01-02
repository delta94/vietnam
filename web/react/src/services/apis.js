import { baseAPI } from '../configs';

import endpoints from './apis-configs';

class APIS {
  constructor(base) {
    this.base = base;
  }

  getGeneralSecretaries() {
    const url = endpoints.government.generalSecretaries.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((generalSecretaries = []) => {
          resolve(generalSecretaries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getPresidents() {
    const url = endpoints.government.presidents.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((presidents = []) => {
          resolve(presidents);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getPrimeMinisters() {
    const url = endpoints.government.primeMinisters.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((primeMinisters = []) => {
          resolve(primeMinisters);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getNationalAssemblyChairs() {
    const url = endpoints.government.nationalAssemblyChairs.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((chairs = []) => {
          resolve(chairs);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getMinistries() {
    const url = endpoints.government.ministries.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((ministries = []) => {
          resolve(ministries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getMinisters(ministry) {
    const url = `${this.base}/government/ministers?ministry=${ministry}`;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((ministers = []) => {
          resolve(ministers);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getGoogleTrends() {
    const url = endpoints.news.trends.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          const basicTrends = response || [];
          const trends = basicTrends.map(text => {
            const url = `https://www.google.com/search?q=${encodeURI(text)}`;
            return { text, url };
          });
          resolve(trends);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getSources() {
    const url = endpoints.news.sources.get;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((sources = []) => {
          resolve(sources);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getCategories() {
    const url = endpoints.news.categories.get;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((categories = []) => {
          resolve(categories);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getArticles(options = {}) {
    const { category, source } = options;
    const url = `${this.base}/news?category=${category}&sources=${source}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((data = {}) => {
          const { articles = [] } = data;
          resolve(articles);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  calculateProfit(buy, sell, volume) {
    const url = `${this.base}/finance/profit`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ buy, sell, volume })
      })
        .then(res => res.json())
        .then((data = []) => {
          const { profit = 0 } = data;
          resolve(profit);
        })
        .catch(error => {
          console.error(error);
          resolve(0);
        });
    });
  }

  getStockHighlights(from, to) {
    const url = `${this.base}/finance/highlights`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to })
      })
        .then(res => res.json())
        .then((highlights = []) => {
          resolve(highlights);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getStockPotentials(from, to) {
    const url = `${this.base}/finance/potentials`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to })
      })
        .then(res => res.json())
        .then((potentials = []) => {
          resolve(potentials);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getStockCompanies() {
    const url = `${this.base}/finance/companies`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((companies = []) => {
          companies.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));
          resolve(companies);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getBanksForexRates() {
    const url = `${this.base}/banks/forex/rates`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((response = {}) => {
          const { data = [], currencies = [] } = response;
          const currency = currencies[0] || '';
          resolve({ data, currency, currencies });
        })
        .catch(error => {
          console.error(error);
          resolve({ data: [], currency: '', currencies: [] });
        });
    });
  }

  getBanksWithForex() {
    const url = `${this.base}/banks`;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((banks = []) => {
          const { name: bank = '' } = banks[0];
          resolve({ bank, banks });
        })
        .catch(error => {
          console.error(error);
          resolve({ bank: '', banks: [] });
        });
    });
  }

  syncForex(id) {
    const url = `${this.base}/banks/forex/sync`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
        .then(res => res.json())
        .then((data = []) => {
          const { status = '' } = data;
          resolve(status);
        })
        .catch(error => {
          console.error(error);
          resolve(error.stack);
        });
    });
  }

  getStockHistory(symbol, from, to) {
    const url = `${this.base}/finance/history`;
    return new Promise(resolve => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbol, from, to })
      })
        .then(res => res.json())
        .then((result = {}) => {
          resolve(result);
        })
        .catch(error => {
          console.error(error);
          resolve({});
        });
    });
  }

  getPostalCodes() {
    const url = endpoints.maps.postalCodes.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((postalCodes = []) => {
          resolve(postalCodes);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getDistricts() {
    const url = endpoints.maps.districts.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((districts = []) => {
          resolve(districts);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getProvinces() {
    const url = endpoints.maps.provinces.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((provinces = []) => {
          resolve(provinces);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getWards() {
    const url = endpoints.maps.wards.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((wards = []) => {
          resolve(wards);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getSportsClubs() {
    const url = endpoints.sports.clubs.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((clubs = []) => {
          resolve(clubs);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getLicensePlates() {
    const url = endpoints.ethnicMinorities.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((licensePlates = []) => {
          resolve(licensePlates);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getEthnicMinorities() {
    const url = endpoints.ethnicMinorities.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((ethnicMinorities = []) => {
          resolve(ethnicMinorities);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getTechnologies() {
    const url = endpoints.technologies.get;

    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((technologies = []) => {
          resolve(technologies);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}

const apis = new APIS(baseAPI);

export default apis;
