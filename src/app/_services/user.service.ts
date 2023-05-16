import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';
const API_ADMIN_URL = 'http://localhost:8080/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId?: number;

  constructor(private http: HttpClient) { }
  getAllOffers(): Observable<any> {
    return this.http.get(API_URL + 'offers', { responseType: 'json' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getServerBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getWebAccountById(id:number): Observable<any>{
    return this.http.get(API_ADMIN_URL+id);
  }
}
