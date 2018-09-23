import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonturasService } from "../../services/monturas.service";
import { Cercado, Montura, Usuario } from '../../models/monturas';

declare var M: any;

@Component({
  selector: 'app-dragopavo',
  templateUrl: './dragopavo.component.html',
  styles: []
})
export class DragopavoComponent implements OnInit {

  key$:string;

  // dragopavo:Montura;
  usuario:Usuario;
  cercado:Cercado;

  cargando:boolean = true;
  guardando:boolean = false;
  eliminando:boolean = false;

  constructor(private monturasService: MonturasService, private activatedRouted: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.loadScripts();
    this.getId();
    this.getDragopavo( this.key$ );
  }

  // ---------- OBTENER PARAMETRO ----------
  getId(){
    this.activatedRouted.params.subscribe(params => {
      this.key$ = params['id'];
    })
  }

  // ---------- DRAGOPAVOS ----------
  getDragopavo( key$:string ){
    this.cargando = true;
    this.monturasService.getDragopavo(key$)
      .subscribe( res => {
        this.monturasService.selectedMontura = res as Montura;
        this.getUsuario(this.monturasService.selectedMontura.propietario);
        this.getCercado(this.monturasService.selectedMontura.ubicacion);
        this.getCercados();
      })
  }

  borraDragopavo(){
    this.eliminando = true;
    if (confirm('¿Eliminar Dragopavo?')) {
      this.monturasService.deleteDragopavo(this.key$)
        .subscribe ( res => {
          M.toast({ html: 'Dragopavo Eliminado'});
          this.eliminando = false;
          this.router.navigate(['/monturas/dragopavos']);
        })
    }else{
      this.eliminando = false;
    }
  }

  modificarDragopavo(){
    this.guardando = true;
    this.monturasService.putDragopavo(this.monturasService.selectedMontura, this.key$)
      .subscribe( data => {
        M.toast({ html: 'Dragopavo Actualizado'});
        this.guardando = false;
        this.getDragopavo(this.key$);
        this.getCercado(this.monturasService.selectedMontura.ubicacion);
        this.getCercados();
      }, 
        error => console.log(error)
      );
  }

  // ---------- USUARIOS -----------
  getUsuario( key$:string ){
    this.monturasService.getUsuario(key$)
      .subscribe( res => {
        this.usuario = res as Usuario;
      })
  }
 
  // ---------- CERCADOS -----------  
  getCercado( key$:string ){
    this.monturasService.getCercado(key$)
      .subscribe( res => {
        this.cercado = res as Cercado;
      })
  }
  getCercados(){
    this.monturasService.getCercados()
      .subscribe( res => {
        this.monturasService.cercados = res as Cercado[];
        this.loadMaterialize();// Recarga materialize aqui porque es la ultima consulta
        this.cargando = false; // El cargando va aqui porque es la ultima consulta
      })
  }

  // ---------- CARGAR SCRIPTS ----------
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

  // ---------- CARGAR MATERIALIZE ----------
  loadMaterialize() {
    const dynamicScripts = [
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
