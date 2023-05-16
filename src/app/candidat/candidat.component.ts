import { Component, OnInit  } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit{
  constructor(private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }
}
