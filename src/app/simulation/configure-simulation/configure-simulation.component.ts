import { Component, OnInit } from '@angular/core';
import { Simulation } from '../model/simulation';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-configure-simulation',
  templateUrl: './configure-simulation.component.html',
  styleUrls: ['./configure-simulation.component.css']
})
export class ConfigureSimulationComponent implements OnInit {

  simulation: Simulation;

  simulationTypeChosed: string;
  simulationTypes: string[] = ['Messages','Minutes']
  constructor() { }

  ngOnInit(): void {
    this.simulation = new Simulation();
  }

  radioChange(event: MatRadioChange) {
    (event.value == 'Messages') ? this.simulation.minutes = undefined : this.simulation.messages = undefined  
  }

}
