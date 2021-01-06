'use strict';

import fetch from 'node-fetch';

import { baseURL, IGovernmentOfficial, IGovernmentMinistry } from '../constants';

export default class Government {
  private async fetch(endpoint: string): Promise<Array<any>> {
    const url = `${baseURL}/government/${endpoint}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((list: Array<IGovernmentOfficial> = []) => {
          resolve(list);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getIncumbents(): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch('incumbents');
  }

  public async getGeneralSecretaries(): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch('general-secretaries');
  }

  public async getPresidents(): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch('presidents');
  }

  public async getPrimeMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch('prime-ministers');
  }

  public async getNationalAssemblyChairs(): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch('national-assembly/chairs');
  }

  public async getNationalAssemblyMembers(no: number = 14): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch(`national-assembly/members?no=${no}`);
  }

  public async getMinistries(): Promise<Array<IGovernmentMinistry>> {
    return await this.fetch('ministries');
  }

  private async getMinisters(ministry: string): Promise<Array<IGovernmentOfficial>> {
    return await this.fetch(`ministers?ministry=${ministry}`);
  }

  public async getEthnicMinorityAffairsLeaders(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('ethnic-minority');
  }

  public async getGovernmentInspectorateLeaders(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('government-inspectorate');
  }

  public async getGovernmentOfficeLeaders(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('government-office');
  }

  public async getStateBankGovernors(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('state-bank');
  }

  public async getAgricultureRuralDevelopmentMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('agriculture-rural-development');
  }

  public async getConstructionMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('construction');
  }

  public async getCultureSportsTourismMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('culture-sports-tourism');
  }

  public async getEducationTrainingMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('education-training');
  }

  public async getFinanceMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('finance');
  }

  public async getForeignAffairsMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('foreign');
  }

  public async getHealthMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('health');
  }

  public async getHomeAffairsMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('home');
  }

  public async getIndustryTradeMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('industry-trade');
  }

  public async getInformationCommunicationsMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('information-communications');
  }

  public async getJusticeMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('justice');
  }

  public async getLabourInvalidsSocialAffairsMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('labour-invalids-social');
  }

  public async getNationalDefenceMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('defence');
  }

  public async getNaturalResourcesEnvironmentMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('natural-resources-environment');
  }

  public async getPlanningInvestmentMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('planning-investment');
  }

  public async getPublicSecurityMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('security');
  }

  public async getScienceTechnologyMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('science-technology');
  }

  public async getTransportMinisters(): Promise<Array<IGovernmentOfficial>> {
    return await this.getMinisters('transport');
  }
}
