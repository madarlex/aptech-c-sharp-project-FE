import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './entities/account.entity';
import { Result } from './entities/result.entity';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  login_status = false;
  name: string;
  constructor(private router: Router, private accountService: AccountService,) { }
  ngOnInit() {
    var accountId = localStorage.getItem('accountId');
    if (accountId != null) {
      this.login_status = true;
      this.accountService.find(parseInt(accountId)).then(
        res => {
          let account = res as Account;
          this.name = account.name;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  onLogout() {
    localStorage.removeItem('accountId');
    this.router.navigate(['/login']);
  }
}
