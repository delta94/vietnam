'use strict';

import { postgreClient } from '../clients';

export default class GovernmentService {
  private officialFields: Array<string> = [
    'title',
    'title_en',
    'title_short',
    'name',
    'gender',
    'gender_en',
    'start_date',
    'end_date'
  ];

  public async getMinistries(level_en: string): Promise<string | Array<any>> {
    const fields: Array<string> = ['short', 'name', 'name_en', 'level', 'level_en'];
    const ministries = await postgreClient.find('government_ministries', { level_en }, fields);
    return ministries;
  }

  private async getOfficials(title_short: string): Promise<any> {
    const officials: any = await postgreClient.find(
      'government_officials',
      { title_short },
      this.officialFields
    );
    return officials;
  }

  public async getMinisters(ministry: string = ''): Promise<Array<any>> {
    return await this.getOfficials(ministry);
  }

  public async getGeneralSecretaries(): Promise<Array<any>> {
    return await this.getOfficials('general-secretary');
  }

  public async getPresidents(): Promise<Array<any>> {
    return await this.getOfficials('president');
  }

  public async getPrimeMinisters(): Promise<Array<any>> {
    return await this.getOfficials('prime-minister');
  }

  public async getNationalAssemblyChairs(): Promise<Array<any>> {
    return await this.getOfficials('national-assembly-chair');
  }

  public async getNationalAssemblyMembers(no: number = 14): Promise<string | Array<any>> {
    const members: any = await postgreClient.find('national_assembly_members', { no });
    return members;
  }

  public async getIncumbents(): Promise<string | Array<any>> {
    const { officialFields } = this;
    officialFields.unshift('ranking');
    const officials: any = await postgreClient.find(
      'government_officials',
      { end_date: 'incumbent' },
      officialFields
    );
    return officials.sort((a, b) => (a.ranking > b.ranking ? 1 : -1));
  }
}
