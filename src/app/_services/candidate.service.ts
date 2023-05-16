
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../_models/project.model';
import { OfferResgistration } from '../_models/offer-resgistration.model';

const CANDIDATE_URL = 'http://localhost:8080/api/candidate/';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getCandidateAccount(id?:number): Observable<any>{
    console.log(id);
    return this.http.get(CANDIDATE_URL + id);
  }

  completeProfileCandidate(candidate?: any): Observable<any>{
    return this.http.put(CANDIDATE_URL, candidate);
  }

  getAllOffers(): Observable<any> {
    return this.http.get(CANDIDATE_URL + 'offers', { responseType: 'json' });
  }
  getOfferById(id?:number): Observable<any> {
    return this.http.get(CANDIDATE_URL + 'offers/' + id, { responseType: 'json' });
  }

  publishProject(project: Project): Observable<any> {
    console.log(project);
    const formData = new FormData();
    formData.append('title', project.title ?? '');
    formData.append('content', project.content ?? '');
    formData.append('candidateId', project.candidateId?.toString() ?? '');
    if (project.image) {
      formData.append('image', project.image);
    }
    return this.http.post<any>(CANDIDATE_URL + 'project/add/', formData);
  }

  registerOffer(offerRegistration: OfferResgistration): Observable<any> {
    const formData = new FormData();
    formData.append('candidateId', offerRegistration.candidateId?.toString() ?? '');
    if (offerRegistration.cv) {
      formData.append('cv', offerRegistration.cv);
    }
    if (offerRegistration.coverLetter) {
      formData.append('coverLetter', offerRegistration.coverLetter);
    }
    formData.append('portfolioLink', offerRegistration.portfolioLink ?? '');
    formData.append('offerId', offerRegistration.offerId?.toString() ?? '');
    return this.http.post(CANDIDATE_URL + 'offer-apply', formData);
  }
}
