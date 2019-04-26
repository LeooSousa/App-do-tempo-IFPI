import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServerProvider Provider');
  }
  all() {
    return this.http.get('https://tempo-oeiras.herokuapp.com/api/?format=json');
  }

}
