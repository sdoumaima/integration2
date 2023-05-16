import { Component } from '@angular/core';

@Component({
  selector: 'app-detailcow',
  templateUrl: './detailcow.component.html',
  styleUrls: ['./detailcow.component.css']
})
export class DetailcowComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
}
