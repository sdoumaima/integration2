import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
 


   showNotifications: boolean = false;
   
   toggleNotifications() {
     this.showNotifications = !this.showNotifications;
    }
    // ...
 
 
 
    displayedColumns: string[] = ['mail','intitule', 'date', 'personne','temps','tele' ,'button','btn',];
 
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    
    onCancel(element: Element): void {
  
      // Do something when cancel button is clicked for this element
    }
    


  }

  export interface Element {
    mail: string;
    event:string;
 etat : string;
   }
   
   const ELEMENT_DATA: Element[] = [
     {mail: 'orenda@gmail.com',event:'orenda junior entreprise',  etat: 'en attente', },
     {mail:'marwa@gmail.com', event:'Ayari marwa',etat: 'en attente',},
     {mail:'Wevioo@gmail.com', event:'Wevioo',etat: 'en attente',},
     {mail: 'yassine@gmail.com', event:'Mansouri Yassine',etat: 'en  attente',},
     {mail: 'ahmed@gmail.com', event:'Ayari ahmed',etat: 'en attente',},
  ];