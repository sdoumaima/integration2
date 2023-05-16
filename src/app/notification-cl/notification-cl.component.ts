import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-cl',
  templateUrl: './notification-cl.component.html',
  styleUrls: ['./notification-cl.component.css']
})
export class NotificationClComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
