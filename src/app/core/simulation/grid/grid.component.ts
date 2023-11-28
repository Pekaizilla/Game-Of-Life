import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { IGridRow } from './grid-line.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  width: number = 10;
  height: number = 10;

  grid: IGridRow[] = [];

  ngOnInit(): void {
      this.InitGrid(this.width, this.height);
  }

  InitGrid(width: number, height: number): void {
    for( let x=0; x<width; x++ ) {
      let row: IGridRow = {array: []};
      for( let y=0; y<height; y++ ) {
        let cell = new CellComponent();
        cell.setPosition(x, y);
        row.array.push(cell);
      }
      this.grid.push(row);
    }
  }
}
