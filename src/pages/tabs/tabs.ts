import { Component } from '@angular/core';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';



@Component({
    templateUrl: "tabs.html"
})

export class TabsPage {
    tab1Root = ConfiguracoesPage;

    constructor() {

    }
}  