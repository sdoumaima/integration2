import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateAccount, RecruiterAccount } from '../_models/user-accont';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    console.log(credentials.username);
    console.log(credentials.password);
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  registerRecruiter(recruiter: RecruiterAccount): Observable<any> {
    const formData = new FormData();
    formData.append('recruiterId', recruiter.recruiterId?.toString() ?? '');
    formData.append('companyName', recruiter.companyName ?? '');
    formData.append('email', recruiter.email ?? '');
    formData.append('password', recruiter.password ?? '');
    formData.append('confirmedPassword', recruiter.confirmedPassword ?? '');
    formData.append('role', recruiter.role?.name.toString() ?? '');
    formData.append('usernameRepresentative', recruiter.usernameRepresentative?.toString() ?? '');
    formData.append('companyActivity', recruiter.companyActivity?.toString() ?? '');
    formData.append('companySize', String(recruiter.companySize ?? 0));
    formData.append('activityDomain', recruiter.activityDomain ?? '');
    formData.append('address', recruiter.address ?? '');
    formData.append('city', recruiter.city ?? '');
    if (recruiter.logo) {
      formData.append('logo', recruiter.logo);
    }
    return this.http.post(AUTH_API + 'signup_recruiter', formData);
  }
  
  registerCandidate(candidate: CandidateAccount): Observable<any> {
    const formData = new FormData();
    formData.append('candidateId', candidate.candidateId?.toString() ?? '');
    formData.append('username', candidate.username ?? '');
    formData.append('email', candidate.email ?? '');
    formData.append('password', candidate.password ?? '');
    formData.append('confirmedPassword', candidate.confirmedPassword ?? '');
    formData.append('role', candidate.role?.name.toString() ?? '');
    formData.append('status', candidate.status?.toString() ?? '');
    formData.append('phoneNumber', candidate.phoneNumber?.toString() ?? '');
    formData.append('address', candidate.address ?? '');
    formData.append('city', candidate.city ?? '');
    if (candidate.image) {
      formData.append('image', candidate.image);
    }
    return this.http.post<any>(AUTH_API + 'signup_candidate', formData);
  }
}
