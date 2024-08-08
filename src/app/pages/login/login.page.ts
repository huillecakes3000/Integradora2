import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  login() {
    console.log('Sending credentials:', this.credentials);
    this.http.post<any>('http://localhost:5000/api/login', this.credentials)
      .subscribe(
        response => {
          console.log(response);
          localStorage.clear()
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('user-id', response.usuario_id);
          this.router.navigate(['/tabs']);
        },
        error => {
          console.error(error);
          alert('Credenciales inválidas.');
        }
      );
  }
}
