import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { RecruiterService } from '../_services/recruiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  showNotifications: boolean = false;
  recruiter: any = {};
  testOffer: any = {};

  loading = true;
  errorMessage = '';

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router, private recruiterService: RecruiterService) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.recruiterService.getRecruiterAccount(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.recruiter = JSON.parse(JSON.stringify(data));
        this.testOffer = this.recruiter.testRegistrationOfferEntity[0];
        console.log(this.testOffer);
    });
    }
  }

  newTest(){
    this.testOffer = {
      recruiterId: this.recruiter.id,
      testName: "",
      questionEntities: [
        {
          question: "",
          option1: "",
          option2:"",
          option3: "",
          option4: ""
        }
      ]
    };
    console.log(this.testOffer);
  }
  selectTest(id:number){
    console.log(id);
    this.testOffer = this.recruiter.testRegistrationOfferEntity.find(
      (offer: any) => offer.id === id
    );    
    console.log(this.testOffer);
  }

  addQuestion(){
    this.testOffer.questionEntities.push(
      {
        question: "",
        option1: "",
        option2:"",
        option3: "",
        option4: ""
      }
    )
  }

  saveTest(){
    this.testOffer.recruiterId = this.recruiter.id;
    this.recruiterService.updateTest(this.testOffer)
    .subscribe(
      (data) => {
        this.recruiter = data;
        console.log(this.recruiter);
      },
      (error) => {
          this.errorMessage = error.error.message;
          this.loading = false;
      }
  );
    console.log(this.testOffer);
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}