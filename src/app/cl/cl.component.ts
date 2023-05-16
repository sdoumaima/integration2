import { Component } from '@angular/core';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.css']
})
export class ClComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
 

}
