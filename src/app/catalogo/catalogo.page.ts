import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage {

  constructor(private navCtrl: NavController) {
  }

  vaiparaBronze() {
    this.navCtrl.navigateForward("bronze");
  }

  vaiparaSilver() {
    this.navCtrl.navigateForward("silver");
  }  

  vaiparaGold() {
    this.navCtrl.navigateForward("gold");
  } 

}
