import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'cadastro' , component: CadastroComponent},
  {path:'clientes' , component:ClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
