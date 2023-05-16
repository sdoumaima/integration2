import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../_models/offer.model';

const RECRUITER_URL = 'http://localhost:8080/api/recruiter/';


@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private http: HttpClient) { }

  getRecruiterAccount(id?:number): Observable<any>{
    return this.http.get(RECRUITER_URL + id);
  }

  publishOffer(offer: Offer): Observable<any> {
    return this.http.post<any>(RECRUITER_URL + 'offer/publish', offer);
  }

  sendTestToCandidate(registration_id: number, test_id: number, recruiter_id: number){
    return this.http.put(RECRUITER_URL+'test/access?registration_id='+registration_id+'&test_id='+test_id+'&recruiter_id='+recruiter_id, {});
  }

  completeProfileRecruiter(recruiter?: any): Observable<any>{
    console.log(recruiter);
    return this.http.put(RECRUITER_URL, recruiter);
  }

  eliminateOfferRegistration(id: number){
    return this.http.delete(RECRUITER_URL+'registration/'+id);
  }

  getOffers(id?:number): Observable<any>{
    return this.http.get(RECRUITER_URL + 'offer?recruiter_id='+ id);
  }

  updateTest(test?: any): Observable<any>{
    return this.http.put(RECRUITER_URL+'test/add', test);
  }

}
