import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.validarFoto()

    console.log(this.foto)
  }

  validarFoto() {

    if (environment.foto == null) {
      this.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
    }
  }

  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}