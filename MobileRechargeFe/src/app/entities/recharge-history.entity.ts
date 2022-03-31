import { Account } from './account.entity';
import { Recharge } from './recharge.entity';

export class RechargeHistory {
  id: number;
  rechargeId: number;
  accountId: number;
  code: string;
  description: string;
  status: number;
  date: string;
  phone: string;
  account: Account;
  recharge: Recharge;
}
