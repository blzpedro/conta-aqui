import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PlanosComponent } from './planos/planos.component';
import { SharedModule } from './shared.module';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContactComponent } from './../components/contact/contact.component';
import { FaqComponent } from '../components/faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { DepoimentsComponent } from '../components/depoiments/depoiments.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    FaqComponent,
    HomeComponent,
    SobreNosComponent,
    ComoFuncionaComponent,
    PlanosComponent,
    ContatoComponent,
    DepoimentsComponent
  ],

  imports: [
  CommonModule,
    PagesRoutingModule,
    SharedModule
  ],

  entryComponents: [    
  ],

  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]

})
export class PagesModule { }
