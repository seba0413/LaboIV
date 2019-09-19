import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioListadoComponent } from './componentes/usuario-listado/usuario-listado.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './componentes/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ListadoUsuariosComponent,
    UsuarioComponent,
    UsuarioListadoComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
