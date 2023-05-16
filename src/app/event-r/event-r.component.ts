import { Component } from '@angular/core';

@Component({
  selector: 'app-event-r',
  templateUrl: './event-r.component.html',
  styleUrls: ['./event-r.component.css']
})
export class EventRComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
