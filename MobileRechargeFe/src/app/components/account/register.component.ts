import {formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entities/account.entity';
import { Result } from 'src/app/entities/result.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  addAccountForm: FormGroup;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit() {
    this.addAccountForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)]],
      gender: '1',
      identityCard: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$')]],
      status: 0,
      accountTypeId: 2,
      dob: ['', [Validators.required]],
    });
  }
  create() {
    var account: Account = this.addAccountForm.value;
    account.dob = formatDate(account.dob, 'dd/MM/yyyy', 'en-US');
    this.accountService.create(account).then(
      res => {
        var re: Result = res as Result;
        if (re.result) {
          this.router.navigate(['/active']);
        } else {
          alert("This email has been used to register an account");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
