import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonturasService } from "../../services/monturas.service";
import { Usuario } from '../../models/monturas';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private monturasService: MonturasService, private router:Router ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.monturasService.getUsuarios()
      .subscribe( res => {
        this.monturasService.usuarios = res as Usuario[];
      })
  }

  tryLogout() {
    this.monturasService.dologout()
    .then( res => {
      console.log(res);
      console.log("Sesion cerrada");
      this.router.navigate(['/login']);
    })
  }

}
