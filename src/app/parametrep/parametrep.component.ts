import { Component } from '@angular/core';

@Component({
  selector: 'app-parametrep',
  templateUrl: './parametrep.component.html',
  styleUrls: ['./parametrep.component.css']
})
export class ParametrepComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }


}
