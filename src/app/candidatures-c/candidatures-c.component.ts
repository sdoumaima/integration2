import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-candidatures-c',
  templateUrl: './candidatures-c.component.html',
  styleUrls: ['./candidatures-c.component.css']
})
export class CandidaturesCComponent {


  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...
  displayedColumns: string[] = ['position', 'name', 'weight' ,'button'];

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
  onCancel(element: Element): void {

    // Do something when cancel button is clicked for this element
  }
}

export interface Element {
  name: string;
  position: string;
  weight: string;


}

const ELEMENT_DATA: Element[] = [
  {position: 'Wevioo', name: 'Ingénieur Développement', weight: 'En attente', },
  {position:'Adactim', name: 'Ingénieur Développement', weight: 'En attente',},
  {position:'Telecom', name: 'Ingénieur Développement', weight: 'En attente', },
  {position: 'Adactim', name: 'Ingénieur Développement', weight: 'En attente', },
  {position: 'Wevioo', name: 'Ingénieur Développement', weight: 'En attente', },
 
];