import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Contato } from '../../app/models/Contatos';
import { HttpClient } from '@angular/common/http';
import { Tempo } from '../../app/models/Tempo';
import { hostElement } from '@angular/core/src/render3/instructions';
import { TemperaturaPage } from '../temperatura/temperatura';

import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage = HomePage;

   times : Array<{nome: string, tempo: string}>;
   allTimes:any;
 queryText: string;

  // public contatos: Contato[];
  public contatos: Contato[]; 
  
  constructor(public navCtrl: NavController, private _http: HttpClient) {
    
    this._http.get<Tempo[]>('https://tempo-ifpi-oeiras.herokuapp.com/api/tempo/?Data_add=2019-3-25')
        .subscribe(
          (contatos) => {
            console.log(contatos);
            this.contatos = contatos
          }
        );
        console.log(this.contatos);

    this.queryText = '';
   this.times = this.contatos;

    this.allTimes = this.times;
  }

  filterTimes(tim: any){
    let val = tim.target.value;
    if (val && val.trim() != ''){
      this.times = _.values(this.allTimes);
      this.times = this.times.filter((time) =>{
        return (time.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.times = this.allTimes;
    }  
    
  }
  goToTemperaturaPage(){
    console.log("Temperatura Page")
    this.navCtrl.push(TemperaturaPage)
  }
}
