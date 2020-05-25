import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulationComponent } from './simulation.component';
import { SimulationRoutingModule } from './simulation-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpSimulationComponent } from './http-simulation/http-simulation.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { ConfigureSimulationComponent } from './configure-simulation/configure-simulation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { HttpSimulationService } from './service/http-simulation.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [SimulationComponent, HttpSimulationComponent, ConfigureSimulationComponent],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [HttpSimulationService]
})
export class SimulationModule { }
