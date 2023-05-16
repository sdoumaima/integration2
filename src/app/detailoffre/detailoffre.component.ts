import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { CandidateService } from '../_services/candidate.service';
import { ActivatedRoute, Router,  } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit{
  showNotifications: boolean = false;
  loading = true;
  errorMessage = '';
  offer: any = {};
  candidate: any = {};
  form: any = {};
  formOfferRegistration: any = {};

  constructor(private tokenStorageService: TokenStorageService,
    private router: ActivatedRoute, private route: Router, private candidateService: CandidateService,
    private datePipe: DatePipe) { }
  
 toggleNotifications() {
   this.showNotifications = !this.showNotifications;
  }
  // ...


  showform=false;
  showForm(){
    this.showform=true;
  }

  logout() {
    this.tokenStorageService.signOut();
    this.route.navigate(['/home']);
  }

  ngOnInit(): void {
    this.candidateService.getOfferById(this.router.snapshot.params['id'])
      .subscribe(data => {
        this.offer = JSON.parse(JSON.stringify(data));
        this.offer.publication_date = this.datePipe.transform(this.offer.publication_date, 'dd/MM/yyyy');
        console.log(this.offer);
    });
    this.candidateService.getCandidateAccount(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.candidate = JSON.parse(JSON.stringify(data));
        console.log(this.candidate);
    });
  }

  onFileCvChanged(event: any){
    const file = event.target.files[0];
    this.formOfferRegistration.cv = file;
  }

  onFileLetterChanged(event: any){
    const file = event.target.files[0];
    this.formOfferRegistration.coverLetter = file;
  }

  postulateOffer(f: NgForm){
    this.formOfferRegistration.candidateId = this.candidate.id;
    this.formOfferRegistration.offerId = this.offer.id;
    console.log(this.formOfferRegistration);
    this.candidateService.registerOffer(this.formOfferRegistration).subscribe(
      data => {
        console.log(data);
        this.route.navigate(['/offre']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );    
  }
}