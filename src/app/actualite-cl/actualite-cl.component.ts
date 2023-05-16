import { Component } from '@angular/core';

@Component({
  selector: 'app-actualite-cl',
  templateUrl: './actualite-cl.component.html',
  styleUrls: ['./actualite-cl.component.css']
})
export class ActualiteClComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
