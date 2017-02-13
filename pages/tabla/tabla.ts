import { Component } from "@angular/core";  
import { NoticiasService } from '../../services/noticias';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
    selector: 'page-tabla',
    templateUrl: 'tabla.html',
    providers: [NoticiasService]
})
export class Tabla {  
    public foundRows;
	public loading = this.presentLoading();

    constructor(
	    private tabla: NoticiasService,
		public nav: NavController,
	    public loadingCtrl: LoadingController) {

        this.nav = nav;

        this.tabla.getTable().subscribe(
            data => {
				var result = data.json();
                this.foundRows = result.table;
            },
            err => console.error(err),
            () => console.log('getTable completed')
        );
    }

    presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Cargando...",
        duration: 1000
      });
      loader.present();
    }

}
