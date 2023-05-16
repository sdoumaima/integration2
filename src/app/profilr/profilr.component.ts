import { Component } from '@angular/core';

interface Item {
  id: string;
  Societe: string;
  Domaine :string;
  etat :string;
}
@Component({
  selector: 'app-profilr',
  templateUrl: './profilr.component.html',
  styleUrls: ['./profilr.component.css']
})
export class ProfilrComponent {
  filterText: string = '';

  items: Item[] = [
    { id : '#123' ,Societe: 'John', etat: 'a', Domaine: 'john'  },
    { id : '#123' ,Societe: 'John', etat: 'a', Domaine: 'john'  },
    { id : '#123' ,Societe: 'John', etat: 'a', Domaine: 'john'  },
  ];

  get filteredItems() {
    return this.items.filter(item =>
      item.id.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.etat.toLowerCase().includes(this.filterText.toLowerCase()) ||    
       item.Societe.toLowerCase().includes(this.filterText.toLowerCase()) ||

      item.Domaine.toLowerCase().includes(this.filterText.toLowerCase())

    );}
}
