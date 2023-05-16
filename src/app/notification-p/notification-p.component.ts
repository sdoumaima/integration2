import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-p',
  templateUrl: './notification-p.component.html',
  styleUrls: ['./notification-p.component.css']
})
export class NotificationPComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
