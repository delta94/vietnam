'use strict';

import { postgreClient } from '../clients';

export default class GovernmentService {
  public async getMinistries(): Promise<string | Array<any>> {
    const fields: Array<string> = ['short', 'name', 'name_en', 'level', 'level_en'];
    const ministries = await postgreClient.find('government_ministries', fields);
    return ministries;
  }

  public async getMinisters(ministry: string = ''): Promise<string | Array<any>> {
    const fields: Array<string> = [
      'ranking',
      'title',
      'title_en',
      'title_short',
      'name',
      'gender',
      'gender_en',
      'start_date',
      'end_date'
    ];
    const officials: any = await postgreClient.find('government_officials', fields);
    return officials.filter(official => official.title_short === ministry);
  }

  public async getGeneralSecretaries(): Promise<string | Array<any>> {
    const fields: Array<string> = [
      'ranking',
      'title',
      'title_en',
      'title_short',
      'name',
      'gender',
      'gender_en',
      'start_date',
      'end_date'
    ];
    const officials: any = await postgreClient.find('government_officials', fields);
    return officials.filter(official => official.title_short === 'general-secretary');
  }

  public async getPresidents(): Promise<string | Array<any>> {
    const fields: Array<string> = [
      'ranking',
      'title',
      'title_en',
      'title_short',
      'name',
      'gender',
      'gender_en',
      'start_date',
      'end_date'
    ];
    const officials: any = await postgreClient.find('government_officials', fields);
    return officials.filter(official => official.title_short === 'president');
  }

  public async getPrimeMinisters(): Promise<string | Array<any>> {
    const fields: Array<string> = [
      'ranking',
      'title',
      'title_en',
      'title_short',
      'name',
      'gender',
      'gender_en',
      'start_date',
      'end_date'
    ];
    const officials: any = await postgreClient.find('government_officials', fields);
    return officials.filter(official => official.title_short === 'prime-minister');
  }

  public async getNationalAssemblyChairs(): Promise<string | Array<any>> {
    const fields: Array<string> = [
      'ranking',
      'title',
      'title_en',
      'title_short',
      'name',
      'gender',
      'gender_en',
      'start_date',
      'end_date'
    ];
    const officials: any = await postgreClient.find('government_officials', fields);
    return officials.filter(official => official.title_short === 'national-assembly-chair');
  }

  public async getNationalAssemblyMembers(no: number = 14): Promise<string | Array<any>> {
    const members: any = await postgreClient.find('national_assembly_members');
    return members.filter(member => member.no === no);
  }

  public async getIncumbents(): Promise<string | Array<any>> {
    const fields: Array<string> = [
      'ranking',
      'title',
      'title_en',
      'title_short',
      'name',
      'gender',
      'gender_en',
      'start_date',
      'end_date'
    ];
    const officials: any = await postgreClient.find('government_officials', fields);
    return officials
      .filter(official => official.end_date === 'incumbent')
      .sort((a, b) => (a.ranking > b.ranking ? 1 : -1));
  }
}
