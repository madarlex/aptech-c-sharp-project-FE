import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/entities/result.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  templateUrl: './forgot.component.html',
})
export class ForgotComponent implements OnInit {
  email: string;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  forgot() {
    this.accountService.forgot(this.email).then(
      res => {
        var re: Result = res as Result;
        if (re.result) {
          this.router.navigate(['/changepass']);
        } else {
          console.log("Failed");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
