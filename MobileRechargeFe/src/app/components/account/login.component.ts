import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/entities/login.entity';
import { AccountService } from 'src/app/services/account.service';
@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }
  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  login() {
    this.accountService.login(this.email, this.password).then(
      (res: any) => {
        var re: Login = res as Login;
        if(re.accountId != null){
          localStorage.setItem('accountId', res.accountId);
          this.router.navigateByUrl('/home');
        }else{
          alert("Incorrect account or password");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
