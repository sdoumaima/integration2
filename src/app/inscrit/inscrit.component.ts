import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
 

})
export class InscritComponent implements OnInit{
  form: any = {};
  isCandidateSuccessful = false;
  isCandidateSignUpFailed = false;
  isRecruiterSuccessful = false;
  isRecruiterSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onFileChanged(event: any){
    const file = event.target.files[0];
    this.form.image = file;
  }
  onLogoChanged(event: any){
    const file = event.target.files[0];
    this.form.logo = file;
  }
  onSubmitCandidate() {
    this.authService.registerCandidate(this.form).subscribe(
      data => {
        console.log(data);
        this.isCandidateSuccessful = true;
        this.isCandidateSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isCandidateSignUpFailed = true;
      }
    );
  }
  onSubmitRecruiter() {
    this.authService.registerRecruiter(this.form).subscribe(
      data => {
        console.log(data);
        this.isRecruiterSuccessful = true;
        this.isRecruiterSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRecruiterSignUpFailed = true;
      }
    );
  }
}

