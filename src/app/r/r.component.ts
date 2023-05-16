import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { RecruiterService } from '../_services/recruiter.service';
import { Router } from '@angular/router';
import { Offer } from '../_models/offer.model';

@Component({
  selector: 'app-r',
  templateUrl: './r.component.html',
  styleUrls: ['./r.component.css']
})
export class RComponent implements OnInit{

  showNotifications: boolean = false;
  recruiter?: any = {
    offerEntity: []
  };
  offers?: any;
  offer_count?: number;
  formOffer: Offer = {};
  isToggled = false;
  locked=true;
  profile: any = {};

  loading = true;
  errorMessage = '';

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router, private recruiterService: RecruiterService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // Vous pouvez envoyer la vidéo au serveur à partir d'ici
  }


  

  toggleButton() {
    this.recruiter.sponsor = !this.recruiter.sponsor;
    this.isToggled = !this.isToggled;
  }
  edit() {
    this.locked = false;
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }

  completePofile(){
    this.profile.id = this.recruiter.id;
    this.profile.website = this.recruiter.website;
    this.profile.foundation_date = this.recruiter.foundationDate;
    this.profile.head_office = this.recruiter.headOffice;
    this.profile.services = this.recruiter.services;
    this.profile.gouvernorat = this.recruiter.gouvernorat;
    this.profile.city = this.recruiter.city;
    this.profile.bio = this.recruiter.bio;
    this.profile.details = this.recruiter.details;
    this.profile.section_title = this.recruiter.sectionTitle;
    this.profile.section_description = this.recruiter.sectionDescription;
    this.profile.is_sponsor = this.recruiter.sponsor;
    this.locked = true;
    this.recruiterService.completeProfileRecruiter(this.profile)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
              this.errorMessage = error.error.message;
              this.loading = false;
          }
      );
  }
  publishOfferrrrr(){
    this.formOffer.recruter_id = this.recruiter.id;
    this.recruiterService.publishOffer(this.formOffer)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
              this.errorMessage = error.error.message;
              this.loading = false;
          }
      );
  }

  calculateDaysOfOffer(offer?: any){
    const now = new Date().getTime();
    const publicationDate = new Date(offer.publishDate).getTime();
    const diff = now - publicationDate;
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    offer.diffDays = diffDays;
  }

  ngOnInit(){
    if (this.tokenStorageService.getToken()) {
      this.recruiterService.getRecruiterAccount(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.recruiter = JSON.parse(JSON.stringify(data));
        this.offer_count = this.recruiter.offerEntity.length;
        this.recruiter.offerEntity.forEach((offer: any) => {
          this.calculateDaysOfOffer(offer);
        });
        this.locked = true;
        console.log(this.recruiter);
      });
    }
  }
}
