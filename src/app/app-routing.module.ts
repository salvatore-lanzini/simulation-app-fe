import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationModule } from './simulation/simulation.module';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'simulation', loadChildren: () => SimulationModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
