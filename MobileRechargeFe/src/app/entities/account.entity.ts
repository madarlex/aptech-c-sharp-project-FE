import { AccountType } from "./accountType.entity";

export class Account{
    id: number;
    accountTypeId: AccountType;
    name: string;
    address: string;
    phone: string;
    email: string;
    gender: number;
    dob: Date;
    identityCard: string;
    status: number;
    password: string;
}

