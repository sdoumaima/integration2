import { Component } from '@angular/core';

@Component({
  selector: 'app-coworking-r',
  templateUrl: './coworking-r.component.html',
  styleUrls: ['./coworking-r.component.css']
})
export class CoworkingRComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
