import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://portfoliobackendfinal-0lsx.onrender.com/api/login';

  constructor(private http: HttpClient) {}

  iniciarSesion(email: string, password: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = { email, password };
    return this.http.post(this.url, body, httpOptions).pipe(
      map((data: any) => {
        const token = data.token;
        localStorage.setItem('token', token);
        return token;
      })
    );
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token !== null ? token : '';
  }
}