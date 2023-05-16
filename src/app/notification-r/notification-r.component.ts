import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-r',
  templateUrl: './notification-r.component.html',
  styleUrls: ['./notification-r.component.css']
})
export class NotificationRComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
