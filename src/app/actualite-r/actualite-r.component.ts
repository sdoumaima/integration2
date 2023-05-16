import { Component } from '@angular/core';

@Component({
  selector: 'app-actualite-r',
  templateUrl: './actualite-r.component.html',
  styleUrls: ['./actualite-r.component.css']
})
export class ActualiteRComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
   switchState = false;

   toggleSwitch() {
     this.switchState = !this.switchState;
   }
}
