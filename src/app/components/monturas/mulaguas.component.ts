import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { Montura, Cercado, Usuario } from '../../models/monturas';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;


@Component({
  selector: 'app-mulaguas',
  templateUrl: './mulaguas.component.html',
  styles: []
})
export class MulaguasComponent implements OnInit {

  mulaguas = [
    {
      "mulagua": "Almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Almendrada y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Almendrada y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela e índigo",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y dorada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y ébano",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y orquídea",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y purpura",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y roja",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y turquesa",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada e índigo",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada salvaje",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y ébano",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y orquídea ",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y purpura",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano e índigo",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano salvaje",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y orquídea",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y púrpura",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo ",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo salvaje",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y orquídeo",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y púrpura",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Marfil y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea salvaje",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y púrpura",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura salvaje",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura y almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura y esmeralda",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura y marfil",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja ",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja e índigo",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y almendrada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y dorada",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y ébano",
      img:"assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y esmeralda",
      img:"assets/img/monturas/100.png"
    }
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
    this.getMulaguas();
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

  // ---------- MULAGUAS -----------
  getMulaguas(){
    this.cargando = true;
    this.monturasService.getMulaguas()
      .subscribe( res => {
        this.monturasService.monturas = res as Montura[];
        this.monturaslistas = true;
        this.cargando = false;
        this.loadMaterialize();
        console.log(res);
      })
  }

  addMulaguas(form: NgForm){
    this.guardando = true;
    for (let i = 0; i < this.mulaguas.length; i++) {
      if (form.value.especie == this.mulaguas[i].mulagua) {
        form.value.img = this.mulaguas[i].img;
      }
    }
    // console.log(form.value);
    this.monturasService.postMulagua(form.value)
      .subscribe( res => {
        M.toast({ html: 'Mulagua Agregada'});
        form.reset();
        this.loadMaterialize();
        this.getMulaguas();
        this.guardando = false;
      }), 
      error => {
        console.error('Error al agregar nuevo Mulagua: '+error);
        M.toast({ html: `Error al agregar nuevo Mulagua: ${error}`});
      };
  }

  borraMulagua( key$:string){
    this.eliminando = true;
    if (confirm('¿Eliminar Mulagua?')) {
      this.monturasService.deleteMulagua(key$)
        .subscribe ( res => {
          M.toast({ html: 'Mulagua Eliminado'});
          this.getMulaguas();
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
