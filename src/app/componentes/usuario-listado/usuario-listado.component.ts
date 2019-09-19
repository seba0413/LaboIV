import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {

  public listadoUsuarios: Array<Usuario> = [];
  // @Output() editarUsuario = new EventEmitter<any>();

  public usuarioEdit: Usuario;

  constructor() { }

  agregar(usuario: Usuario) {
    this.listadoUsuarios.push(usuario);
  }

  editar(usuario: Usuario) {
    this.usuarioEdit = usuario;
  }

  ngOnInit() {
  }

}

