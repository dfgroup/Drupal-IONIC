import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { Noticia } from '../pages/noticia/noticia';
import { Tabla } from '../pages/tabla/tabla';
import { Fixture } from '../pages/fixture/fixture';

@NgModule({
  declarations: [
    MyApp,
    Noticia,
    Home,
    Page2,
	Tabla,
	Fixture,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Noticia,
    Home,
    Page2,
	Tabla,
	Fixture,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
