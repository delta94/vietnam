'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import vng from '../src/';

describe('vng', () => {
  it('get national assembly members', async () => {
    const nationalAssemblyMembers = vng.getNationalAssemblyMembers();
    console.log(nationalAssemblyMembers);
    assert.ok(typeof nationalAssemblyMembers === 'object');
  });

  it('get ethnic minorities', async () => {
    const ethnicMinorities = vng.getEthnicMinorities();
    console.log(ethnicMinorities);
    assert.ok(typeof ethnicMinorities === 'object');
  });

  it('get ministries', async () => {
    const ministries = vng.getMinisters();
    console.log(ministries);
    assert.ok(typeof ministries === 'object');
  });

  it('get incumbents', async () => {
    const incumbents = vng.getIncumbents();
    console.log(incumbents);
    assert.ok(typeof incumbents === 'object');
  });

  it('get general secretaries', async () => {
    const secretaries = vng.getGeneralSecretaries();
    console.log(secretaries);
    assert.ok(typeof secretaries === 'object');
  });

  it('get presidents', async () => {
    const presidents = vng.getPresidents();
    console.log(presidents);
    assert.ok(typeof presidents === 'object');
  });

  it('get prime minister', async () => {
    const primeMinisters = vng.getPrimeMinisters();
    console.log(primeMinisters);
    assert.ok(typeof primeMinisters === 'object');
  });

  it('get chairs', async () => {
    const chairs = vng.getNationalAssemblyChairs();
    console.log(chairs);
    assert.ok(typeof chairs === 'object');
  });

  it('get ethnic minority affairs leaders', async () => {
    const leaders = vng.getEthnicMinorityAffairsLeaders();
    console.log(leaders);
    assert.ok(typeof leaders === 'object');
  });

  it('get vng inspectorate leaders', async () => {
    const leaders = vng.getGovernmentInspectorateLeaders();
    console.log(leaders);
    assert.ok(typeof leaders === 'object');
  });

  it('get vng office leaders', async () => {
    const leaders = vng.getGovernmentOfficeLeaders();
    console.log(leaders);
    assert.ok(typeof leaders === 'object');
  });

  it('get state bank governors', async () => {
    const governors = vng.getStateBankGovernors();
    console.log(governors);
    assert.ok(typeof governors === 'object');
  });

  it('get agriculture and rural development ministers', async () => {
    const ministers = vng.getAgricultureRuralDevelopmentMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get construction ministers', async () => {
    const ministers = vng.getConstructionMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get culture, sports and tourism ministers', async () => {
    const ministers = vng.getCultureSportsTourismMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get education and training ministers', async () => {
    const ministers = vng.getEducationTrainingMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get finance ministers', async () => {
    const ministers = vng.getFinanceMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get foreign affairs ministers', async () => {
    const ministers = vng.getForeignAffairsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get health ministers', async () => {
    const ministers = vng.getHealthMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get home affairs ministers', async () => {
    const ministers = vng.getHomeAffairsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get industry and trade ministers', async () => {
    const ministers = vng.getIndustryTradeMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get information and communications ministers', async () => {
    const ministers = vng.getInformationCommunicationsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get justice ministers', async () => {
    const ministers = vng.getJusticeMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get labour - invalids and social affairs ministers', async () => {
    const ministers = vng.getLabourInvalidsSocialAffairsMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get national defence ministers', async () => {
    const ministers = vng.getNationalDefenceMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get natural resources and environment ministers', async () => {
    const ministers = vng.getNaturalResourcesEnvironmentMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get planning and investment ministers', async () => {
    const ministers = vng.getPlanningInvestmentMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get public security ministers', async () => {
    const ministers = vng.getPublicSecurityMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get science and technology ministers', async () => {
    const ministers = vng.getScienceTechnologyMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });

  it('get transport ministers', async () => {
    const ministers = vng.getTransportMinisters();
    console.log(ministers);
    assert.ok(typeof ministers === 'object');
  });
});
