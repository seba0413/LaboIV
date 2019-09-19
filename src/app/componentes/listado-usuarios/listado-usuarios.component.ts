import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  @Input() listadoUsuarios: Usuario[];
  @Output() selectedUsuario = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  editar(usuario: Usuario) {
    this.selectedUsuario.emit(usuario);
    console.info("objeto", usuario);
  }



}
