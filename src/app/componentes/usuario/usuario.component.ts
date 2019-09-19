import { HttpService } from './../../services/miservicio/http.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { PaisesService } from 'src/app/services/paises/paises.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [PaisesService]
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  @Output() seCreo = new EventEmitter<any>();
  @Input() usuarioIngresado: Usuario;

  public paises = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    this.paisesService.BuscarTodos().subscribe(element => this.paises = element);
  }

  agregarUsuario(nombre: string, clave: string) {
    this.usuario = new Usuario();
    this.usuario.nombre = nombre;
    this.usuario.clave = clave;

    this.seCreo.emit(this.usuario);
  }

  clear() {
    this.usuarioIngresado = null;
  }

}
