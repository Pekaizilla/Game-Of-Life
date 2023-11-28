import { Component } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent{
  position = {
    x: 0,
    y: 0
  };

  state: boolean = false;

  constructor() {

  }
// Call on InitGrid()
  setPosition(x: number, y: number): void {
    this.position.x = x;
    this.position.y = y;
  }

  changeState(): void {
    this.state = !this.state;
  }
}
