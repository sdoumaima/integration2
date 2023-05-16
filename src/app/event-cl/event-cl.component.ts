import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-event-cl',
  templateUrl: './event-cl.component.html',
  styleUrls: ['./event-cl.component.css']
})
export class EventClComponent {
 
  showform=false;
showForm(){
    this.showform=true;
  }

  constructor(public dialog: MatDialog) {}




  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
  }

