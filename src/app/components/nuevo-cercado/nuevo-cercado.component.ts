import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { NgForm } from '@angular/forms';
import { Cercado } from '../../models/monturas';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-nuevo-cercado',
  templateUrl: './nuevo-cercado.component.html',
  styleUrls: ['./nuevo-cercado.component.css'],
  providers: [MonturasService]
})
export class NuevoCercadoComponent implements OnInit {
  
  guardando = false;

  constructor(private monturasService: MonturasService, private router:Router) { } //Si da error colocar el servicio public

  ngOnInit() {
    this.loadScripts();
  }

  addCercado(form: NgForm){
    this.guardando = true;

    this.monturasService.postCercado(form.value)
      .subscribe( res => {
        this.router.navigate(['cercados']);
        M.toast({ html: 'Cercado Registrado'});
        this.guardando = false;
      }), 
      error => {
        console.error('Error al registrar nuevo Cliente: '+error);
        M.toast({ html: `Error al registrar nuevo Cliente: ${error}`});
      };
  }

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/libs/jquery/js/jquery.js',
      '../../../assets/libs/materialize/js/materialize.min.js',
      '../../../assets/libs/sidebar/js/sidebar.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
