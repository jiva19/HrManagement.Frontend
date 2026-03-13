import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  //Login Validation Function
 async login() {

   //Case in which Login will pass as valid
    if (this.username === 'admin' && this.password === '1234') {
      this.isLoggedIn = true;
      this.errorMessage = '';
    }

    //Case to access the test to mock an endpoint
    else if (this.username === 'failedtest') {
      const response = await fetch('/api/v1/auth', {
        method: 'POST',
        body: JSON.stringify({ user: this.username, pass: this.password })
      });
      if (response.status === 500) {
              this.errorMessage = 'Cannot process, try later';
              this.isLoggedIn = false;
            } else {
        const data = await response.json();
              this.errorMessage = data.message;
            }
    }

    //Case when it fails in genereal
    else {
      this.errorMessage = 'Invalid credentials';
      this.isLoggedIn = false;
    }
  }
}


