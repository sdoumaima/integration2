import { Component } from '@angular/core';

@Component({
  selector: 'app-actualite-p',
  templateUrl: './actualite-p.component.html',
  styleUrls: ['./actualite-p.component.css']
})
export class ActualitePComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
