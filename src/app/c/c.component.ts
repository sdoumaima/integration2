import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { CandidateService } from '../_services/candidate.service';
import { Project } from '../_models/project.model';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit{
  showNotifications: boolean = false;
  userId?: number;
  project_count?: number;
  candidate?: any = {
    experiences: []
  };
  project: any;

  projectGroups?: any[][];

  backgrounds: any = [];
  projects: any = [];
  skills: any = [];
  trainings: any = [];

  loading = true;
  errorMessage = '';

  form: any = {};
  formProject: Project = {};

  @ViewChild('imageInput') imageInput!: ElementRef;

  showSuccessMessage: boolean[] = [];

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router, private candidateService: CandidateService) { }
  
  ngOnInit(){
    if (this.tokenStorageService.getToken()) {
      this.candidateService.getCandidateAccount(this.tokenStorageService.getUser().id)
      .subscribe(data => {
        this.candidate = JSON.parse(JSON.stringify(data));
        console.log(this.candidate);
        this.formatDates();
        this.addSelectedAttribute();
        this.project_count = this.candidate.projects.length;
    });
    }
  }

  completePofile(){
    this.setCandidateId();
    console.log(this.candidate);
    this.candidateService.completeProfileCandidate(this.candidate)
        .subscribe(
          (data) => {
            this.candidate = data;
          },
          (error) => {
              this.errorMessage = error.error.message;
              this.loading = false;
          }
      );
    window.location.reload;
  }

  publishProject(){
    console.log(this.candidate.id);
    this.formProject.candidateId = this.candidate.id;
    this.candidateService.publishProject(this.formProject)
        .subscribe(
          (data) => {
            this.candidate = data;
          },
          (error) => {
              this.errorMessage = error.error.message;
              this.loading = false;
          }
      );
    window.location.reload;
  }

  onImageProjectChanged(event: any) {
    const file = event.target.files[0];
    this.formProject.image = file;
    // Reset the value of the file input field
    this.imageInput.nativeElement.value = '';
  }

  chunkArray(array: any[], size: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  setCandidateId(){
    this.candidate.experiences.forEach((experience: any) => {
      experience.candidate_id = this.candidate.id;
    });
    this.candidate.trainings.forEach((training: any) => {
      training.candidate_id = this.candidate.id;
    });
    this.candidate.backgrounds.forEach((background: any) => {
      background.candidate_id = this.candidate.id;
    });
    this.candidate.projects.forEach((project: any) => {
      project.candidate_id = this.candidate.id;
    });
    this.candidate.skills.forEach((skill: any) => {
      skill.candidate_id = this.candidate.id;
    });
    this.candidate.languages.forEach((language: any) => {
      language.candidate_id = this.candidate.id;
    });
  }

  formatDates() {
    this.candidate.experiences.forEach((experience: any) => {
      experience.start_date = this.formatDate(experience.start_date);
      experience.final_date = this.formatDate(experience.final_date);
    });
    this.candidate.trainings.forEach((training: any) => {
      training.start_date = this.formatDate(training.start_date);
      training.end_date = this.formatDate(training.end_date);
    });
    this.candidate.backgrounds.forEach((background: any) => {
      background.start_date = this.formatDate(background.start_date);
      background.end_date = this.formatDate(background.end_date);
    });
  }
  addSelectedAttribute() {
    this.candidate.experiences.forEach((experience: any) => { experience.selected = false;});
    this.candidate.trainings.forEach((tarining: any) => { tarining.selected = false;});
    this.candidate.backgrounds.forEach((background: any) => { background.selected = false;});
    this.candidate.skills.forEach((skill: any) => { skill.selected = false;});
    this.candidate.languages.forEach((language: any) => { language.selected = false;});
  }
  onClickSelected(obj: any){
    obj.selected = true;
  }

  formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  saveExperience(){
   console.log(this.candidate.experiences);   
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
  


  formation: any = [];
  langue: any = [];
  university: any = [];


  addlangue() {
    this.candidate.languages.push(
      {
        language_name: "",
        level: ""
      }
    )
  }

  addexp(){
    this.candidate.experiences.push(
      {
        company: "",
        city: "",
        position:"",
        start_date: "",
        final_date: "",
        details: ""
      }
    )
  }

  adduniversity(){
    this.candidate.backgrounds.push(
      {
        university: "",
        diploma: "",
        start_date: "",
        end_date: "",
      }
    )
  }

  addformation(){
    this.candidate.trainings.push(
      {
        centre: "",
        diploma: "",
        start_date: "",
        end_date: "",
      }
    )
  }
  addSkill(){
    this.candidate.skills.push(
      {
        skill: ""
      }
    )
  }
  getProjectCounts(){
    this.project_count = this.candidate.projects.size;
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // Vous pouvez envoyer la vidéo au serveur à partir d'ici
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }
}