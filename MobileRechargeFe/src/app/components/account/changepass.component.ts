import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/entities/result.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  templateUrl: './changepass.component.html',
})
export class ChangePassComponent implements OnInit {
  email: string;
  token: string;
  password: string;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  changePass() {
    this.accountService.changePass(this.email, this.token, this.password).then(
      res => {
        var re: Result = res as Result;
        if (re.result) {
          this.router.navigate(['/success']);
        } else {
          alert("Incorrect confirmation code");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
