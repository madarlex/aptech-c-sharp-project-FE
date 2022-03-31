import { Account } from './account.entity';
import { PostPaid } from './postpaid.entity';

export class PostPaidHistory {
  id: number;
  postPaidId: number;
  description: string;
  status: number;
  accountId: number;
  code: string;
  date: string;
  phone: string;
  account: Account;
  postpaid: PostPaid;
}
