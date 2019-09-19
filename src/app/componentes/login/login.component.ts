import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public ingresado: boolean;

  constructor() {
    this.usuario = new Usuario();
    this.usuario.nombre = 'Pepe';
    this.usuario.clave = 'Secreto';

    this.ingresado = false;
  }

  ngOnInit() {
  }

  Ingresar(){
    console.info("usuario", this.usuario);
  }

}
