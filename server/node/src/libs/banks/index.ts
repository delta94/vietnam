'use strict';

import ACB from './acb';
import Agribank from './agribank';
import BIDV from './bidv';
import CBBank from './cbbank';
import DongABank from './dongabank';
import Eximbank from './eximbank';
import GPBank from './gpbank';
import HDBank from './hdbank';
import KienLongBank from './kienlongbank';
import LienVietPostBank from './lienvietpostbank';
import MSB from './msb';
import NamABank from './namabank';
import OCB from './ocb';
import OceanBank from './oceanbank';
import Sacombank from './sacombank';
import SaigonBank from './saigonbank';
import SCB from './scb';
import SeABank from './seabank';
import SHB from './shb';
import Techcombank from './techcombank';
import UOB from './uob';
import VIB from './vib';
import VietBank from './vietbank';
import VietCapitalBank from './vietcapitalbank';
import Vietcombank from './vietcombank';
import Vietinbank from './vietinbank';
import VPBank from './vpbank';

export default class Banks {
  public acb: ACB = new ACB();
  public agribank: Agribank = new Agribank();
  public bidv: BIDV = new BIDV();
  public cbbank: CBBank = new CBBank();
  public dongabank: DongABank = new DongABank();
  public eximbank: Eximbank = new Eximbank();
  public gpbank: GPBank = new GPBank();
  public hdbank: HDBank = new HDBank();
  public kienlongbank: KienLongBank = new KienLongBank();
  public lienvietpostbank: LienVietPostBank = new LienVietPostBank();
  public msb: MSB = new MSB();
  public namabank: NamABank = new NamABank();
  public ocb: OCB = new OCB();
  public oceanbank: OceanBank = new OceanBank();
  public sacombank: Sacombank = new Sacombank();
  public saigonbank: SaigonBank = new SaigonBank();
  public scb: SCB = new SCB();
  public seabank: SeABank = new SeABank();
  public shb: SHB = new SHB();
  public techcombank: Techcombank = new Techcombank();
  public uob: UOB = new UOB();
  public vib: VIB = new VIB();
  public vietbank: VietBank = new VietBank();
  public vietcapitalbank: VietCapitalBank = new VietCapitalBank();
  public vietcombank: Vietcombank = new Vietcombank();
  public vietinbank: Vietinbank = new Vietinbank();
  public vpbank: VPBank = new VPBank();

  public bankIds: Array<string> = [
    'acb',
    'agribank',
    'bidv',
    'cbbank',
    'dongabank',
    'eximbank',
    'gpbank',
    'hdbank',
    'kienlongbank',
    'lienvietpostbank',
    'msb',
    'namabank',
    'ocb',
    'oceanbank',
    'sacombank',
    'saigonbank',
    'scb',
    'seabank',
    'shb',
    'techcombank',
    'uob',
    'vib',
    'vietbank',
    'vietcapitalbank',
    'vietcombank',
    'vietinbank',
    'vpbank'
  ];

  public async getForexRatesByBank(id: string) {
    const { bankIds = [] } = this;
    return bankIds.includes(id)
      ? await this[id].getForexRates()
      : await this.vietcombank.getForexRates();
  }
}
