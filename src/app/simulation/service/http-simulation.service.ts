import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpSimulation } from '../http-simulation/model/http-simulation';
import { Observable } from 'rxjs';
import { HttpMethodEnum } from '../http-simulation/model/http-method-enum';

@Injectable({
  providedIn: 'root'
})
export class HttpSimulationService {

  serverUrl : string = 'http://localhost:8880/simulator/http/';

  constructor(private http: HttpClient) { }

  simulate(httpSimulation: HttpSimulation): Observable<any>{
    if(httpSimulation.method == HttpMethodEnum.GET || httpSimulation.method == HttpMethodEnum.DELETE){
      if(httpSimulation.messages)
        return this.getOrDeleteWithMessages(httpSimulation)
      else
        return this.getOrDeleteWithMinutes(httpSimulation)
    }else{
      if(httpSimulation.messages)
        return this.postOrPutWithMessages(httpSimulation)
      else
        return this.postOrPutWithMinutes(httpSimulation)
    }
  }

  private getOrDeleteWithMessages(httpSimulation: HttpSimulation): Observable<any>{
    const url = this.serverUrl + 'getOrDeleteWithMessages' + '?threads=' + httpSimulation.threads + '&messages=' + httpSimulation.messages
                + '&delay=' + httpSimulation.delay + '&url=' + httpSimulation.url + '&httpMethodEnum=' + HttpMethodEnum.toString(httpSimulation.method);
    console.log(url);
    return this.http.get(url);
  }

  private getOrDeleteWithMinutes(httpSimulation: HttpSimulation): Observable<any>{
    const url = this.serverUrl + 'getOrDeleteWithMinutes' + '?threads=' + httpSimulation.threads + '&minutes=' + httpSimulation.minutes
                + '&delay=' + httpSimulation.delay + '&url=' + httpSimulation.url + '&httpMethodEnum=' + HttpMethodEnum.toString(httpSimulation.method);
    return this.http.get(url);
  }

  private postOrPutWithMessages(httpSimulation: HttpSimulation): Observable<any>{
    const url = this.serverUrl + 'postOrPutWithMessages' + '?threads=' + httpSimulation.threads + '&messages=' + httpSimulation.messages
                + '&delay=' + httpSimulation.delay + '&url=' + httpSimulation.url + '&httpMethodEnum=' + HttpMethodEnum.toString(httpSimulation.method);
    return this.http.post(url,httpSimulation.body);
  }

  private postOrPutWithMinutes(httpSimulation: HttpSimulation): Observable<any>{
    const url = this.serverUrl + 'postOrPutWithMinutes' + '?threads=' + httpSimulation.threads + '&minutes=' + httpSimulation.minutes
                + '&delay=' + httpSimulation.delay + '&url=' + httpSimulation.url + '&httpMethodEnum=' + HttpMethodEnum.toString(httpSimulation.method);
    return this.http.post(url,httpSimulation.body);
  }
}
