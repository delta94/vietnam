'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { government } from '../src/';

describe('government', () => {
  // it('get national assembly members', async () => {
  //   const nationalAssemblyMembers = await government.getNationalAssemblyMembers();
  //   console.log(nationalAssemblyMembers);
  //   assert.ok(typeof nationalAssemblyMembers === 'object');
  // });

  it('get ministries', async () => {
    const ministries = await government.getMinistries();
    console.log(ministries);
    assert.ok(typeof ministries === 'object');
  });

  it('get incumbents', async () => {
    const incumbents = await government.getIncumbents();
    console.log(incumbents);
    assert.ok(typeof incumbents === 'object');
  });

  it('get general secretaries', async () => {
    const secretaries = await government.getGeneralSecretaries();
    console.log(secretaries);
    assert.ok(typeof secretaries === 'object');
  });

  it('get presidents', async () => {
    const presidents = await government.getPresidents();
    console.log(presidents);
    assert.ok(typeof presidents === 'object');
  });

  it('get prime minister', async () => {
    const primeMinisters = await government.getPrimeMinisters();
    console.log(primeMinisters);
    assert.ok(typeof primeMinisters === 'object');
  });

  it('get chairs', async () => {
    const chairs = await government.getNationalAssemblyChairs();
    console.log(chairs);
    assert.ok(typeof chairs === 'object');
  });

  it('get ethnic minority affairs leaders', async () => {
    const leaders = await government.getEthnicMinorityAffairsLeaders();
    console.log(leaders);
    assert.ok(typeof leaders === 'object');
  });

  it('get government inspectorate leaders', async () => {
    const leaders = await government.getGovernmentInspectorateLeaders();
    console.log(leaders);
    assert.ok(typeof leaders === 'object');
  });

  it('get government office leaders', async () => {
    const leaders = await government.getGovernmentOfficeLeaders();
    console.log(leaders);
    assert.ok(typeof leaders === 'object');
  });

  it('get state bank governors', async () => {
    const governors = await government.getStateBankGovernors();
    console.log(governors);
    assert.ok(typeof governors === 'object');
  });

  it('get agriculture and rural development ministers', async () => {
    const ministers = await government.getAgricultureRuralDevelopmentMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get construction ministers', async () => {
    const ministers = await government.getConstructionMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get culture, sports and tourism ministers', async () => {
    const ministers = await government.getCultureSportsTourismMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get education and training ministers', async () => {
    const ministers = await government.getEducationTrainingMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get finance ministers', async () => {
    const ministers = await government.getFinanceMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get foreign affairs ministers', async () => {
    const ministers = await government.getForeignAffairsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get health ministers', async () => {
    const ministers = await government.getHealthMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get home affairs ministers', async () => {
    const ministers = await government.getHomeAffairsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get industry and trade ministers', async () => {
    const ministers = await government.getIndustryTradeMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get information and communications ministers', async () => {
    const ministers = await government.getInformationCommunicationsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get justice ministers', async () => {
    const ministers = await government.getJusticeMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get labour - invalids and social affairs ministers', async () => {
    const ministers = await government.getLabourInvalidsSocialAffairsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get national defence ministers', async () => {
    const ministers = await government.getNationalDefenceMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get natural resources and environment ministers', async () => {
    const ministers = await government.getNaturalResourcesEnvironmentMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get planning and investment ministers', async () => {
    const ministers = await government.getPlanningInvestmentMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get public security ministers', async () => {
    const ministers = await government.getPublicSecurityMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get science and technology ministers', async () => {
    const ministers = await government.getScienceTechnologyMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get transport ministers', async () => {
    const ministers = await government.getTransportMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });
});
