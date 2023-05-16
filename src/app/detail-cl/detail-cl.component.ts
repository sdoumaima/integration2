import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-cl',
  templateUrl: './detail-cl.component.html',
  styleUrls: ['./detail-cl.component.css']
})
export class DetailClComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...

}
