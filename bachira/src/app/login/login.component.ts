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

  URL="http://kketelauri-001-site1.gtempurl.com/api/user/getuser"

  login() {
    this.http.post<{ token: string }>('/api/User/login', { email: this.email, password: this.password })
      .subscribe(response => {
        
      }, error => {
        this.errorMessage = 'Login failed';
      });
  }


}
