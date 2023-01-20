import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  test: Date = new Date();
  focus: any;
  focus1: any;
  errors: any = [];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  register(registerForm: any) {
    this.authService.register(registerForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/auth/login']);
      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.errors;
        console.log(error.error.errors);
      },
      () => {
        console.log('complete');
      }
    );
    console.log(registerForm.value);
  }
}
