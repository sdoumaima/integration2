import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { CandidateService } from '../_services/candidate.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit{
  showNotifications: boolean = false;
  loading = true;
  errorMessage = '';
  offers: any = {};
  candidate: any = {};

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router, private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getAllOffers().subscribe(
      (data) => {
        this.offers = data;
        console.log(this.offers);
      },
      (error) => {
          this.errorMessage = error.error.message;
          this.loading = false;
      }
    );
    this.candidateService.getCandidateAccount(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.candidate = JSON.parse(JSON.stringify(data));
        console.log(this.candidate);
    });
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   
  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }

  offreDetail(id: number){
    this.router.navigate(['detailoffre', id]);
  }
   // ...
}
