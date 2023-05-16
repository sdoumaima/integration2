import { Component } from '@angular/core';

@Component({
  selector: 'app-detailcoworking-r',
  templateUrl: './detailcoworking-r.component.html',
  styleUrls: ['./detailcoworking-r.component.css']
})
export class DetailcoworkingRComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...

}
