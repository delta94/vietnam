'use strict';

import fetch from 'node-fetch';

export default class Government {
  public async getIncumbents(): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/incumbents`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((incumbents: Array<any> = []) => {
          resolve(incumbents);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getGeneralSecretaries(): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/general-secretaries`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((secretaries: Array<any> = []) => {
          resolve(secretaries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getPresidents(): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/presidents`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((secretaries: Array<any> = []) => {
          resolve(secretaries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getPrimeMinisters(): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/prime-ministers`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((secretaries: Array<any> = []) => {
          resolve(secretaries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getNationalAssemblyChairs(): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/national-assembly/chairs`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((secretaries: Array<any> = []) => {
          resolve(secretaries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getNationalAssemblyMembers(no: number = 14): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/national-assembly/members?no=${no}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((members: Array<any> = []) => {
          resolve(members);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public getMinistries(): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/ministries`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((ministries: Array<any> = []) => {
          resolve(ministries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  private async getMinisters(ministry: string): Promise<Array<any>> {
    const url = `https://vietnamd.herokuapp.com/api/government/ministers?ministry=${ministry}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((ministries: Array<any> = []) => {
          resolve(ministries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getEthnicMinorityAffairsLeaders(): Promise<Array<any>> {
    return await this.getMinisters('ethnic-minority');
  }

  public async getGovernmentInspectorateLeaders(): Promise<Array<any>> {
    return await this.getMinisters('government-inspectorate');
  }

  public async getGovernmentOfficeLeaders(): Promise<Array<any>> {
    return await this.getMinisters('government-office');
  }

  public async getStateBankGovernors(): Promise<Array<any>> {
    return await this.getMinisters('state-bank');
  }

  public async getAgricultureRuralDevelopmentMinisters(): Promise<Array<any>> {
    return await this.getMinisters('agriculture-rural-development');
  }

  public async getConstructionMinisters(): Promise<Array<any>> {
    return await this.getMinisters('construction');
  }

  public async getCultureSportsTourismMinisters(): Promise<Array<any>> {
    return await this.getMinisters('culture-sports-tourism');
  }

  public async getEducationTrainingMinisters(): Promise<Array<any>> {
    return await this.getMinisters('education-training');
  }

  public async getFinanceMinisters(): Promise<Array<any>> {
    return await this.getMinisters('finance');
  }

  public async getForeignAffairsMinisters(): Promise<Array<any>> {
    return await this.getMinisters('foreign');
  }

  public async getHealthMinisters(): Promise<Array<any>> {
    return await this.getMinisters('health');
  }

  public async getHomeAffairsMinisters(): Promise<Array<any>> {
    return await this.getMinisters('home');
  }

  public async getIndustryTradeMinisters(): Promise<Array<any>> {
    return await this.getMinisters('industry-trade');
  }

  public async getInformationCommunicationsMinisters(): Promise<Array<any>> {
    return await this.getMinisters('information-communications');
  }

  public async getJusticeMinisters(): Promise<Array<any>> {
    return await this.getMinisters('justice');
  }

  public async getLabourInvalidsSocialAffairsMinisters(): Promise<Array<any>> {
    return await this.getMinisters('labour-invalids-social');
  }

  public async getNationalDefenceMinisters(): Promise<Array<any>> {
    return await this.getMinisters('defence');
  }

  public async getNaturalResourcesEnvironmentMinisters(): Promise<Array<any>> {
    return await this.getMinisters('natural-resources-environment');
  }

  public async getPlanningInvestmentMinisters(): Promise<Array<any>> {
    return await this.getMinisters('planning-investment');
  }

  public async getPublicSecurityMinisters(): Promise<Array<any>> {
    return await this.getMinisters('security');
  }

  public async getScienceTechnologyMinisters(): Promise<Array<any>> {
    return await this.getMinisters('science-technology');
  }

  public async getTransportMinisters(): Promise<Array<any>> {
    return await this.getMinisters('transport');
  }
}
