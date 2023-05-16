import { Component } from '@angular/core';

@Component({
  selector: 'app-coworking-cl',
  templateUrl: './coworking-cl.component.html',
  styleUrls: ['./coworking-cl.component.css']
})
export class CoworkingClComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
