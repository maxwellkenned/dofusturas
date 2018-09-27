import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { Montura, Cercado, Usuario } from '../../models/monturas';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-vuelocerontes',
  templateUrl: './vuelocerontes.component.html',
  styles: []
})
export class VuelocerontesComponent implements OnInit {

  vuelocerontes = [
    {
      "vueloceronte": "Almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y ciruela",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y dorado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y ciruela",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y orquídeo ",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ébano salvaje",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Índigo ",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Índigo salvaje",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Índigo y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y amatista",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y ciruela",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y dorado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y rubí",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y zafiro",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo salvaje",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura salvaje",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y amatista",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y ciruela",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y dorado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y zafiro",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa e ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro e índigo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y almendrado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y amatista",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y ciruela",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y dorado",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y ébano",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y esmeralda",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y marfil",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y orquídeo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y pelirrojo",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y púrpura",
      img:"assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y turquesa",
      img:"assets/img/monturas/200.png"
    },
  ];
  
  fecundidad = "no";

  monturaslistas:boolean = false;
  guardando:boolean = false;
  eliminando:boolean = false;
  cargando:boolean = false;

  constructor(public monturasService: MonturasService, private router:Router) { }

  ngOnInit() {
    this.loadScripts();
    this.getCercados();
    this.getUsuarios();
    this.getVuelocerontes();
  }
  
  // ---------- CERCADOS ----------
  getCercados(){
    this.monturasService.getCercados()
      .subscribe( (res:any) => {
        this.monturasService.cercados = res as Cercado[];
        this.loadMaterialize();
        // console.log(res);
      })
  }

  // ---------- USUARIOS ----------
  getUsuarios(){
    this.monturasService.getUsuarios()
      .subscribe( res => {
        this.monturasService.usuarios = res as Usuario[];
      })
  }

  // ---------- VUELOCERONTES -----------
  getVuelocerontes(){
    this.cargando = true;
    this.monturasService.getVuelocerontes()
      .subscribe( res => {
        this.monturasService.monturas = res as Montura[];
        this.monturaslistas = true;
        this.cargando = false;
        this.loadMaterialize();
        console.log(res);
      })
  }

  addVuelocerontes(form: NgForm){
    this.guardando = true;
    for (let i = 0; i < this.vuelocerontes.length; i++) {
      if (form.value.especie == this.vuelocerontes[i].vueloceronte) {
        form.value.img = this.vuelocerontes[i].img;
      }
    }
    // console.log(form.value);
    this.monturasService.postVueloceronte(form.value)
      .subscribe( res => {
        M.toast({ html: 'Vueloceronte Agregada'});
        form.reset();
        this.loadMaterialize();
        this.getVuelocerontes();
        this.guardando = false;
      }), 
      error => {
        console.error('Error al agregar nuevo Vueloceronte: '+error);
        M.toast({ html: `Error al agregar nuevo Vueloceronte: ${error}`});
      };
  }

  borraVueloceronte( key$:string){
    this.eliminando = true;
    if (confirm('¿Eliminar Vueloceronte?')) {
      this.monturasService.deleteVueloceronte(key$)
        .subscribe ( res => {
          M.toast({ html: 'Vueloceronte Eliminado'});
          this.getVuelocerontes();
          this.eliminando = false;
        })
    }else{
      this.eliminando = false;
    }
  }

  // ---------- CARGAR SCRIPT ----------
  loadScripts() {
    const dynamicScripts = [
      'assets/libs/jquery/js/jquery.js',
      'assets/libs/materialize/js/materialize.min.js',
      'assets/libs/sidebar/js/sidebar.js'
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

  loadMaterialize() {
    const dynamicScripts = [
      'assets/libs/sidebar/js/sidebar.js'
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
