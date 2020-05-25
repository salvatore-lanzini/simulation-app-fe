import { Component, OnInit } from '@angular/core';
import { HttpMethodEnum } from './model/http-method-enum';
import { QueryParameter } from './model/query-parameter';
import { HttpSimulation } from './model/http-simulation';
import { MatDialog } from '@angular/material/dialog';
import { ConfigureSimulationComponent } from '../configure-simulation/configure-simulation.component';
import { Simulation } from '../model/simulation';
import { HttpSimulationService } from '../service/http-simulation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface HttpMethod {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-http-simulation',
  templateUrl: './http-simulation.component.html',
  styleUrls: ['./http-simulation.component.css']
})
export class HttpSimulationComponent implements OnInit {

  httpMethod: string;
  serverUrl: string;
  serverPort: number;
  serverEndpoint: string;
  body: string;

  completeUrl: string;

  queryParams: QueryParameter[] = []

  httpMethods: HttpMethod[] = [
    {value: HttpMethodEnum.GET.toString(), viewValue: HttpMethodEnum.GET.toString()},
    {value: HttpMethodEnum.POST.toString(), viewValue: HttpMethodEnum.POST.toString()},
    {value: HttpMethodEnum.PUT.toString(), viewValue: HttpMethodEnum.PUT.toString()},
    {value: HttpMethodEnum.DELETE.toString(), viewValue: HttpMethodEnum.DELETE.toString()}
  ]

  httpSimulation: HttpSimulation;
  simulation: Simulation;

  constructor(private dialog: MatDialog, private httpSimulationService: HttpSimulationService
    ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addQueryParameter(){
    let queryParameter = new QueryParameter()
    this.queryParams.push(queryParameter);
  }

  elaborateSimulation(){   
    this.completeUrl = "http://" + this.serverUrl + ':' + this.serverPort + '/' + this.serverEndpoint;
    if(this.queryParams.length > 0){
      this.completeUrl += '?'
      this.queryParams.forEach(queryParam =>{
        this.completeUrl += queryParam.key + '=' + queryParam.value + '&'
      })
      this.completeUrl = this.completeUrl.substr(0,this.completeUrl.length-1)
    }
  }

  configureSimulation(){
    const dialogRef = this.dialog.open(ConfigureSimulationComponent);

    dialogRef.afterClosed().subscribe(simulation => {
      this.simulation = simulation;
    });  
  }

  startSimulation(){
    this.httpSimulation = new HttpSimulation();
    this.httpSimulation.threads = this.simulation.threads;
    this.httpSimulation.messages = this.simulation.messages;
    this.httpSimulation.minutes = this.simulation.minutes;
    this.httpSimulation.delay = this.simulation.delay;
    this.httpSimulation.url = this.completeUrl;
    this.httpSimulation.method = HttpMethodEnum.parse(this.httpMethod)
    this.httpSimulationService.simulate(this.httpSimulation).subscribe(
      res => {
        console.log(res);
        
      this.snackBar.open('Simulazione Avviata','',{
        duration: 3000,
        horizontalPosition: "right",
        panelClass: ['snackbar-ok']
      });
      err => {
        this.snackBar.open('Errore nello start della simulazione','',{
          duration: 3000,
          horizontalPosition: "right",
          panelClass: ['snackbar-ko']
        });  
      }
    })
  }

}
