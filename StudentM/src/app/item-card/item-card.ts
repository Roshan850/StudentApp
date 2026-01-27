import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  hoveredCardIndex: number | null = null;

  onMouseEnter(index: number) {
    this.hoveredCardIndex = index;
  }

  onMouseLeave() {
    this.hoveredCardIndex = null;
  }

  isCardHovered(index: number): boolean {
    return this.hoveredCardIndex === index;
  }
}
