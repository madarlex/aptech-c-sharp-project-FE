import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entities/account.entity';
import { Result } from 'src/app/entities/result.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  editAccountForm: FormGroup;
  account: Account;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    var accountId = localStorage.getItem('accountId');
    this.accountService.edit(parseInt(accountId)).then(
      res => {
        this.account = res as Account;
        this.editAccountForm = this.formBuilder.group({
          id: this.account.id,
          name: [this.account.name, [Validators.required]],
          address: [this.account.address, [Validators.required]],
          phone: [this.account.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
          email: [this.account.email, [Validators.required, Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)]],
          gender: [this.account.gender, [Validators.required]],
          identityCard: this.account.identityCard,
          status: 1,
          accountTypeId: 2,
          dob: [this.account.dob, [Validators.required]],
          password: ['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$')]]
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    var account: Account = this.editAccountForm.value;
    if(typeof(account.dob) === 'object'){
      account.dob = formatDate(account.dob, 'dd/MM/yyyy', 'en-US');
    }
    this.accountService.update(account).then(
      res => {
        var re: Result = res as Result;
        if (re.result) {
          alert("Success")
        } else {
          alert("Failed")
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
