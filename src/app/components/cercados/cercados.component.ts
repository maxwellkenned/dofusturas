import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { Cercado } from '../../models/monturas';

@Component({
  selector: 'app-cercados',
  templateUrl: './cercados.component.html',
  styleUrls: ['./cercados.component.css'],
  providers: [MonturasService]
})
export class CercadosComponent implements OnInit {

  cargando:boolean = true;
  eliminando:boolean = false;

  constructor(private monturasService: MonturasService) { } //Si da un error colocar public

  ngOnInit() {
    this.loadScripts();
    this.getCercados();
  }

  getCercados(){
    this.cargando = true;
    this.monturasService.getCercados()
      .subscribe( (res:any) => {
        this.monturasService.cercados = res as Cercado[];
        this.cargando = false;
      })
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
