import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
