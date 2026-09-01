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



  }
}


