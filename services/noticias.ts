import {Injectable} from '@angular/core';  
import {Http} from '@angular/http';

@Injectable()
export class NoticiasService {  
    constructor(private http: Http) {
    }

    getNews() {
        let news = this.http.get(`http://adfp-sd.com/servicios/noticias`);
        return news;
    }
    getTable() {
        let news = this.http.get(`http://adfp-sd.com/servicios/tabla`);
        return news;
    }
    getTeams() {
        let news = this.http.get(`http://adfp-sd.com/servicios/equipos`);
        return news;
    }
    getFixture() {
        let news = this.http.get(`http://adfp-sd.com/servicios/fixture`);
        return news;
    }

}
