import { Component } from '@angular/core';

@Component({
  selector: 'app-parametrecl',
  templateUrl: './parametrecl.component.html',
  styleUrls: ['./parametrecl.component.css']
})
export class ParametreclComponent {
  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
}
