import { Component } from "@angular/core";  
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html'
})
export class Noticia {

    public node;

    constructor(navParams: NavParams) {
        this.node = navParams.data;
    }

}
