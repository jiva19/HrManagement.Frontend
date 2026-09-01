import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = '';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router : Router ) {}

  //Login Validation Function
  login() {

    this.authService.login({username: this.username, password: this.password}).subscribe({
      next: (response) => {

        this.router.navigate(['/employees']);

      },
      error: (error) => {
        this.errorMessage = 'Invalid credentials';
        this.isLoggedIn = false;
      }


    })

    //
    // //Case to access the test to mock an endpoint
    // if (this.username === 'failedtest') {
    //   const response = await fetch('/api/v1/auth', {
    //     method: 'POST',
    //     body: JSON.stringify({ user: this.username, pass: this.password })
    //   });
    //   if (response.status === 500) {
    //           this.errorMessage = 'Cannot process, try later';
    //           this.isLoggedIn = false;
    //         } else {
    //     const data = await response.json();
    //           this.errorMessage = data.message;
    //         }
    // }


  }
}


