import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService, CustomerService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailAddress = 'peter@klaven';
  password = 'cityslicka';
  returnUrl: string;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private customer: CustomerService
  ) {}

  ngOnInit() {}

  tryLogin() {
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';
    this.authenticationService
      .login(this.emailAddress, this.password)
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigate([redirectUrl]);
          }
        },
        r => {
          alert(r.error.error);
        }
      );
  }
}
