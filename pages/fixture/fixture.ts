import { Component } from "@angular/core";  
import { NoticiasService } from '../../services/noticias';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
    selector: 'page-fixture',
    templateUrl: 'fixture.html',
    providers: [NoticiasService]
})
export class Fixture {  
    public foundDates;
	public loading = this.presentLoading();

    constructor(
	    private fixture: NoticiasService,
		public nav: NavController,
	    public loadingCtrl: LoadingController) {

        this.nav = nav;

        this.fixture.getFixture().subscribe(
            data => {
				var result = data.json();
                this.foundDates = this.formatFixture(result.fixture);
            },
            err => console.error(err),
            () => console.log('getTable completed')
        );
    }

	formatFixture(items) {
		var newObj = [];
		var fecha = "";
		var fechaObj = [];
		var first = true;
		items.forEach(function (item) {
			if ( fecha === item.date.matchday ) {
				fechaObj.push(item.date);
			}
			else {
				if (!first) {
					newObj.push({'date' : fechaObj, 'matchday' : fecha});
					fechaObj = [];
				}
				else {
					first = false;
				}
				fechaObj.push(item.date);
				fecha = item.date.matchday;
			}
		});
		newObj.push({'date' : fechaObj, 'matchday' : fecha});
		return newObj;
	} 
	
    presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Cargando...",
        duration: 1000
      });
      loader.present();
    }

}
