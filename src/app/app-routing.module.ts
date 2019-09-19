import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [{path: 'inicio', component: BienvenidoComponent},
                        {path: 'listado', component: ListadoUsuariosComponent},
                        {path: 'usuario', component: UsuarioComponent},
                        {path: 'usuario-listado', component: UsuarioListadoComponent},
                        {path: 'paises', component: PaisesComponent},
                        {path: 'login', component: LoginComponent}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
