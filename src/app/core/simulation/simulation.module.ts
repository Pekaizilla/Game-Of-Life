import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { CellComponent } from './cell/cell.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    CellComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    SimulationRoutingModule
  ]
})
export class SimulationModule { }
