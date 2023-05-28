import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage!: string;
  

  constructor(private http: HttpClient) {}


  login() {
    this.http.post<{ token: string }>('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', { email: this.email, password: this.password })
      .subscribe(response => {
        fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
          "email": "keti4@gmail.com",
          "password": "123",
        })
      })
         .then(response => response.json())
         .then(response => console.log(JSON.stringify(response)))
      }, error => {
        this.errorMessage = 'Login failed';
      });
  }


}
