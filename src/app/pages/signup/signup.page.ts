import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  credentials = {
    nombrecompleto: '',
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    if (this.credentials.password !== this.credentials.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Sending registration data:', this.credentials);  

    this.http.post<any>('http://127.0.0.1:5000/api/registro', this.credentials)
      .subscribe(
        response => {
          console.log('Registration response:', response);  
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration error:', error); 
        }
      );
  }
}
