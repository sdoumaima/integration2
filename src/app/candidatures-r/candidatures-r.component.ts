import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { RecruiterService } from '../_services/recruiter.service';





@Component({
  selector: 'app-candidatures-r',
  templateUrl: './candidatures-r.component.html',
  styleUrls: ['./candidatures-r.component.css']
})
export class CandidaturesRComponent implements OnInit{
  
  showform=false;
  showForm(){
    this.showform=true;
  }
  recruiter?: any = {
    offerEntity: []
  };
  offer_count?: number;
  offers?: any;
  element_data: Element[] = []; 
  dataSource = new MatTableDataSource<Element>();
  profileCandidat?: string;
  formAccesTest: any = { testId: '', offerRegistrationId: ''};


  constructor(private tokenStorageService: TokenStorageService,
    private router: Router, private recruiterService: RecruiterService) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.recruiterService.getRecruiterAccount(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.recruiter = JSON.parse(JSON.stringify(data));
        this.offer_count = this.recruiter.offerEntity.length;
        this.recruiter.offerEntity.forEach((offer: any) => {
          this.calculateDaysOfOffer(offer);
        });
        console.log(this.recruiter);
    });
    this.recruiterService.getOffers(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.offers = data;
        this.selectRegistrationOffer("Ui Design");
      });
    }
  }

  selectRegistrationOffer(categorie: string){
    console.log(this.offers);
    this.element_data = this.offers
          .filter((offer: any) => offer.categorie === categorie) // filtrer les offres avec la catégorie A
          .flatMap((offer: any) => 
            offer.offerRegistrationDtos.map((registration: any) => ({
              id: registration.id,
              mail: registration.mail,
              nom: `${registration.first_name} ${registration.last_name}`,
              cv: registration.cv,
              lettre: registration.cover_letter,
              lien: offer.portfolio_link,
              weight: registration.status
            }))
        );
        this.profileCandidat = categorie;
        console.log(this.element_data);
        this.dataSource = new MatTableDataSource<Element>(this.element_data);
  }

  sendTestToCandidate(){
    console.log(this.formAccesTest);
    this.recruiterService.sendTestToCandidate(this.formAccesTest.offerRegistrationId, this.formAccesTest.testId, this.recruiter.id)
    .subscribe(data => {
      this.recruiter = data;
      console.log(this.recruiter);
    });
    window.location
  }


onRowClick(element: any) {
  this.formAccesTest.offerRegistrationId = element.id;
}

  calculateDaysOfOffer(offer?: any){
    const now = new Date().getTime();
    const publicationDate = new Date(offer.publishDate).getTime();
    const diff = now - publicationDate;
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    offer.diffDays = diffDays;
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }


  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...



   displayedColumns: string[] = ['mail','nom', 'cv', 'lettre','lien','weight' ,'button','btn',];

   
   onCancel(element: Element) {
    console.log(element);
     // Do something when cancel button is clicked for this element
   }
   
   
 }
 
 export interface Element {
  mail: string;
  nom:string;
  cv: string;
  lettre:string;
  lien:string;
   weight: string;

 }
