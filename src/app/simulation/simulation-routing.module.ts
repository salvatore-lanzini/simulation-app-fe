import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationComponent } from './simulation.component';

const routes: Routes = [
  { path : '', component : SimulationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule { }
