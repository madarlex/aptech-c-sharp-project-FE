import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/entities/result.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  templateUrl: './active.component.html',
})
export class ActiveComponent implements OnInit {
  email: string;
  token: string;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  active() {
    this.accountService.active(this.email, this.token).then(
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
