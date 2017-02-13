import { Component } from "@angular/core";  
import { NoticiasService } from '../../services/noticias';
import { LoadingController, NavController } from 'ionic-angular';
import { Equipo } from '../equipo/equipo';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [NoticiasService]
})
export class Home {  
    public foundTeams;
	public loading = this.presentLoading();

    constructor(
	    private teams: NoticiasService,
		public nav: NavController,
	    public loadingCtrl: LoadingController) {

        this.nav = nav;

        this.teams.getTeams().subscribe(
            data => {
				var result = data.json();
                this.foundTeams = result.table;
            },
            err => console.error(err),
            () => console.log('getNews completed')
        );
    }

    presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Cargando...",
        duration: 3000
      });
      loader.present();
    }

    goToDetails(team){
		this.nav.push(Equipo, team, {animate: true, direction: 'forward'});
	}

}
