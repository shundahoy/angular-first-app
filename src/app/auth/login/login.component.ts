import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  focus: any;
  focus1: any;
  errors: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(loginForm: any) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/products']);
      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.errors;
        console.log(error.error.errors);
      },
      () => {
        console.log('complete');
      }
    );
    console.log(loginForm.value);
  }
}
