'use strict';

import { ethnicMinorities, IEthnicMinority } from './ethnic-minorities';
import { IMember } from './national-assembly-members/interfaces';
import { nationalAssemblyMembers } from './national-assembly-members';
import { officials, IOfficial, PositionIdEnum } from './officials';

class Government {
  private nationalAssemblyMembers: Array<IMember> = nationalAssemblyMembers;
  private ethnicMinorities: Array<IEthnicMinority> = ethnicMinorities;
  private officials: Array<IOfficial> = officials;

  public getNationalAssemblyMembers(no: number = 14) {
    const nationalAssemblies: Array<number> = nationalAssemblyMembers
      .map((member: IMember) => member.no)
      .filter((value: number, index: number, array: Array<number>) => {
        return array.indexOf(value) === index;
      });
    if (!nationalAssemblies.includes(no)) no = nationalAssemblies[nationalAssemblies.length - 1];
    return this.nationalAssemblyMembers.filter(member => member.no === no);
  }

  public getEthnicMinorities(): Array<IEthnicMinority> {
    return this.ethnicMinorities;
  }

  public getMinisters() {
    const self = this;
    return self.officials
      .filter(official => official.endDate === 'incumbent' && official.level)
      .map(official => {
        const {
          name: incumbent = '',
          department: name = '',
          departmentEN: nameEN = '',
          level = '',
          levelEN = ''
        } = official;
        return { name, nameEN, level, levelEN, incumbent };
      });
  }

  public getIncumbents(): Array<IOfficial> {
    return this.officials
      .filter(official => official.endDate === 'incumbent')
      .sort((a, b) => a.positionNo - b.positionNo);
  }

  private getOfficialsByPositionId(positionId: PositionIdEnum): Array<IOfficial> {
    return this.officials
      .filter(official => official.positionId === positionId)
      .sort((a, b) => (a.startDate > b.startDate ? 1 : -1));
  }

  public getGeneralSecretaries(): Array<IOfficial> {
    return this.getOfficialsByPositionId('general-secretary');
  }

  public getPresidents(): Array<IOfficial> {
    return this.getOfficialsByPositionId('president');
  }

  public getPrimeMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('prime-minister');
  }

  public getNationalAssemblyChairs(): Array<IOfficial> {
    return this.getOfficialsByPositionId('national-assembly-chair');
  }

  public getEthnicMinorityAffairsLeaders(): Array<IOfficial> {
    return this.getOfficialsByPositionId('ethnic-minority-affairs');
  }

  public getGovernmentInspectorateLeaders(): Array<IOfficial> {
    return this.getOfficialsByPositionId('government-inspectorate');
  }

  public getGovernmentOfficeLeaders(): Array<IOfficial> {
    return this.getOfficialsByPositionId('government-office');
  }

  public getStateBankGovernors(): Array<IOfficial> {
    return this.getOfficialsByPositionId('state-bank');
  }

  public getAgricultureRuralDevelopmentMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('agriculture-rural-development');
  }

  public getConstructionMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('construction');
  }

  public getCultureSportsTourismMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('culture-sports-tourism');
  }

  public getEducationTrainingMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('education-training');
  }

  public getFinanceMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('finance');
  }

  public getForeignAffairsMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('foreign-affairs');
  }

  public getHealthMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('health');
  }

  public getHomeAffairsMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('home-affairs');
  }

  public getIndustryTradeMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('industry-trade');
  }

  public getInformationCommunicationsMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('information-communications');
  }

  public getJusticeMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('justice');
  }

  public getLabourInvalidsSocialAffairsMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('labour-invalids-social-affairs');
  }

  public getNationalDefenceMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('national-defence');
  }

  public getNaturalResourcesEnvironmentMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('natural-resources-environment');
  }

  public getPlanningInvestmentMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('planning-investment');
  }

  public getPublicSecurityMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('public-security');
  }

  public getScienceTechnologyMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('science-technology');
  }

  public getTransportMinisters(): Array<IOfficial> {
    return this.getOfficialsByPositionId('transport');
  }
}

const government: Government = new Government();

export default government;
