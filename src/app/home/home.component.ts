import { Component } from '@angular/core';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description of Card 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Card 2', description: 'Description of Card 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Card 3', description: 'Description of Card 3', imageUrl: 'https://via.placeholder.com/150' },
    // Ajoutez autant de cartes que nécessaire
  ];


  
}
