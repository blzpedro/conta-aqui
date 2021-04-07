import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { HomeComponent } from './home/home.component';
import { PlanosComponent } from './planos/planos.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, children: [{path: '', component: HomeComponent}] },
  { path: '', component: HeaderComponent, children: [{path: 'sobre-nos', component: SobreNosComponent}] },
  { path: '', component: HeaderComponent, children: [{path: 'como-funciona', component: ComoFuncionaComponent}] },
  { path: '', component: HeaderComponent, children: [{path: 'planos', component: PlanosComponent}] },
  { path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PagesRoutingModule { }
