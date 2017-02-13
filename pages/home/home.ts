import { Component } from "@angular/core";  
import { NoticiasService } from '../../services/noticias';
import { LoadingController, NavController } from 'ionic-angular';
import { Noticia } from '../noticia/noticia';
import { Tabla } from '../tabla/tabla';
import { Fixture } from '../fixture/fixture';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [NoticiasService]
})
export class Home {  
    public foundNews;
	public loading = this.presentLoading();
	tabla = Tabla;
	fixture = Fixture;

    constructor(
	    private news: NoticiasService,
		public nav: NavController,
	    public loadingCtrl: LoadingController) {

        this.nav = nav;

        this.news.getNews().subscribe(
            data => {
				var result = data.json();
                this.foundNews = result.nodes;
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

    goToDetails(node){
		this.nav.push(Noticia, node, {animate: true, direction: 'forward'});
	}

}
