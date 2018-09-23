import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { Montura, Cercado, Usuario } from '../../models/monturas';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-dragopavos',
  templateUrl: './dragopavos.component.html',
  styles: []
})
export class DragopavosComponent implements OnInit {

  dragopavos = [
    {
      "dragopavo": "Almendrado",
      img:"../../../assets/img/monturas/20.png"
    },
    {
      "dragopavo": "Almendrado e índigo",
      img:"../../../assets/img/monturas/36.png"
    },
    {
      "dragopavo": "Almendrado salvaje",
      img:"../../../assets/img/monturas/1.png"
    },
    {
      "dragopavo": "Almendrado y dorado",
      img:"../../../assets/img/monturas/33.png"
    },
    {
      "dragopavo": "Almendrado y ébano",
      img:"../../../assets/img/monturas/34.png"
    },
    {
      "dragopavo": "Almendrado y esmeralda",
      img:"../../../assets/img/monturas/35.png"
    },
    {
      "dragopavo": "Almendrado y marfil",
      img:"../../../assets/img/monturas/37.png"
    },
    {
      "dragopavo": "Almendrado y orquídeo",
      img:"../../../assets/img/monturas/40.png"
    },
    {
      "dragopavo": "Almendrado y pelirrojo",
      img:"../../../assets/img/monturas/38.png"
    },
    {
      "dragopavo": "Almendrado y púrpura",
      img:"../../../assets/img/monturas/41.png"
    },
    {
      "dragopavo": "Almendrado y turquesa",
      img:"../../../assets/img/monturas/39.png"
    },
    {
      "dragopavo": "Ciruela",
      img:"../../../assets/img/monturas/23.png"
    },
    {
      "dragopavo": "Ciruela e índigo",
      img:"../../../assets/img/monturas/82.png"
    },
    {
      "dragopavo": "Ciruela y almendrado",
      img:"../../../assets/img/monturas/77.png"
    },
    {
      "dragopavo": "Ciruela y dorado",
      img:"../../../assets/img/monturas/78.png"
    },
    {
      "dragopavo": "Ciruela y ébano",
      img:"../../../assets/img/monturas/79.png"
    },
    {
      "dragopavo": "Ciruela y esmeralda",
      img:"../../../assets/img/monturas/80.png"
    },
    {
      "dragopavo": "Ciruela y marfil",
      img:"../../../assets/img/monturas/83.png"
    },
    {
      "dragopavo": "Ciruela y orquídeo",
      img:"../../../assets/img/monturas/86.png"
    },
    {
      "dragopavo": "Ciruela y pelirrojo",
      img:"../../../assets/img/monturas/84.png"
    },
    {
      "dragopavo": "Ciruela y púrpura",
      img:"../../../assets/img/monturas/87.png"
    },
    {
      "dragopavo": "Ciruela y turquesa ",
      img:"../../../assets/img/monturas/85.png"
    },
    {
      "dragopavo": "Con armadura",
      img:"../../../assets/img/monturas/88.png"
    },
    {
      "dragopavo": "Con plumas",
      img:"../../../assets/img/monturas/89.png"
    },
    {
      "dragopavo": "Dorado",
      img:"../../../assets/img/monturas/18.png"
    },
    {
      "dragopavo": "Dorado e índigo",
      img:"../../../assets/img/monturas/44.png"
    },
    {
      "dragopavo": "Dorado salvaje",
      img:"../../../assets/img/monturas/74.png"
    },
    {
      "dragopavo": "Dorado y ébano",
      img:"../../../assets/img/monturas/42.png"
    },
    {
      "dragopavo": "Dorado y esmeralda",
      img:"../../../assets/img/monturas/43.png"
    },
    {
      "dragopavo": "Dorado y marfil",
      img:"../../../assets/img/monturas/45.png"
    },
    {
      "dragopavo": "Dorado y orquídeo",
      img:"../../../assets/img/monturas/48.png"
    },
    {
      "dragopavo": "Dorado y pelirrojo",
      img:"../../../assets/img/monturas/46.png"
    },
    {
      "dragopavo": "Dorado y púrpura",
      img:"../../../assets/img/monturas/49.png"
    },
    {
      "dragopavo": "Dorado y turquesa",
      img:"../../../assets/img/monturas/47.png"
    },
    {
      "dragopavo": "Ébano ",
      img:"../../../assets/img/monturas/3.png"
    },
    {
      "dragopavo": "Ébano e índigo",
      img:"../../../assets/img/monturas/51.png"
    },
    {
      "dragopavo": "Ébano y esmeralda",
      img:"../../../assets/img/monturas/50.png"
    },
    {
      "dragopavo": "Ébano y marfil",
      img:"../../../assets/img/monturas/61.png"
    },
    {
      "dragopavo": "Ébano y orquídeo",
      img:"../../../assets/img/monturas/53.png"
    },
    {
      "dragopavo": "Ébano y pelirrojo",
      img:"../../../assets/img/monturas/12.png"
    },
    {
      "dragopavo": "Ébano y púrpura",
      img:"../../../assets/img/monturas/54.png"
    },
    {
      "dragopavo": "Ébano y turquesa",
      img:"../../../assets/img/monturas/52.png"
    },
    {
      "dragopavo": "Esmeralda ",
      img:"../../../assets/img/monturas/21.png"
    },
    {
      "dragopavo": "Esmeralda e índigo",
      img:"../../../assets/img/monturas/55.png"
    },
    {
      "dragopavo": "Esmeralda y marfil",
      img:"../../../assets/img/monturas/56.png"
    },
    {
      "dragopavo": "Esmeralda y orquídeo",
      img:"../../../assets/img/monturas/59.png"
    },
    {
      "dragopavo": "Esmeralda y pelirrojo",
      img:"../../../assets/img/monturas/57.png"
    },
    {
      "dragopavo": "Esmeralda y púrpura",
      img:"../../../assets/img/monturas/60.png"
    },
    {
      "dragopavo": "Esmeralda y turquesa",
      img:"../../../assets/img/monturas/58.png"
    },
    {
      "dragopavo": "Índigo ",
      img:"../../../assets/img/monturas/17.png"
    },
    {
      "dragopavo": "Índigo y marfil",
      img:"../../../assets/img/monturas/61.png"
    },
    {
      "dragopavo": "Índigo y orquídeo",
      img:"../../../assets/img/monturas/64.png"
    },
    {
      "dragopavo": "Índigo y pelirrojo",
      img:"../../../assets/img/monturas/62.png"
    },
    {
      "dragopavo": "Índigo y púrpura",
      img:"../../../assets/img/monturas/65.png"
    },
    {
      "dragopavo": "Índigo y turquesa",
      img:"../../../assets/img/monturas/6.png"
    },
    {
      "dragopavo": "Marfil",
      img:"../../../assets/img/monturas/16.png"
    },
    {
      "dragopavo": "Marfil y orquídeo",
      img:"../../../assets/img/monturas/40.png"
    },
    {
      "dragopavo": "Marfil y pelirrojo",
      img:"../../../assets/img/monturas/38.png"
    },
    {
      "dragopavo": "Marfil y púrpura",
      img:"../../../assets/img/monturas/41.png"
    },
    {
      "dragopavo": "Marfil y turquesa",
      img:"../../../assets/img/monturas/39.png"
    },
    {
      "dragopavo": "Orquídeo",
      img:"../../../assets/img/monturas/22.png"
    },
    {
      "dragopavo": "Orquídeo y pelirrojo",
      img:"../../../assets/img/monturas/84.png"
    },
    {
      "dragopavo": "Orquídeo y púrpura",
      img:"../../../assets/img/monturas/76.png"
    },
    {
      "dragopavo": "Pelirrojo ",
      img:"../../../assets/img/monturas/10.png"
    },
    {
      "dragopavo": "Pelirrojo salvaje",
      img:"../../../assets/img/monturas/6.png"
    },
    {
      "dragopavo": "Púrpura",
      img:"../../../assets/img/monturas/19.png"
    },
    {
      "dragopavo": "Púrpura y pelirrojo",
      img:"../../../assets/img/monturas/71.png"
    },
    {
      "dragopavo": "Turquesa ",
      img:"../../../assets/img/monturas/15.png"
    },
    {
      "dragopavo": "Turquesa y orquídeo",
      img:"../../../assets/img/monturas/72.png"
    },
    {
      "dragopavo": "Turquesa y pelirrojo",
      img:"../../../assets/img/monturas/69.png"
    },
    {
      "dragopavo": "Turquesa y púrpura",
      img:"../../../assets/img/monturas/73.png"
    }
  ];

  fecundidad = "no";

  monturaslistas:boolean = false;
  guardando:boolean = false;
  eliminando:boolean = false;
  cargando:boolean = false;

  constructor(private monturasService: MonturasService, private router:Router) { }

  ngOnInit() {
    this.loadScripts();
    this.getCercados();
    this.getUsuarios();
    this.getDragopavos();
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
        this.loadMaterialize();
      })
  }

  // ---------- DRAGOPAVOS -----------
  getDragopavos(){
    this.cargando = true;
    this.monturasService.getDragopavos()
      .subscribe( res => {
        this.monturasService.monturas = res as Montura[];
        this.monturaslistas = true;
        this.cargando = false;
        this.loadMaterialize();
        console.log(res);
      })
  }

  addDragopavos(form: NgForm){
    this.guardando = true;
    for (let i = 0; i < this.dragopavos.length; i++) {
      if (form.value.especie == this.dragopavos[i].dragopavo) {
        form.value.img = this.dragopavos[i].img;
      }
    }
    // console.log(form.value);
    this.monturasService.postDragopavo(form.value)
      .subscribe( res => {
        M.toast({ html: 'Dragopavo Agregada'});
        form.reset();
        this.loadMaterialize();
        this.getDragopavos();
        this.guardando = false;
      }), 
      error => {
        console.error('Error al agregar nuevo Dragopavo: '+error);
        M.toast({ html: `Error al agregar nuevo Dragopavo: ${error}`});
      };
  }

  borraDragopavo( key$:string){
    this.eliminando = true;
    if (confirm('¿Eliminar Dragopavo?')) {
      this.monturasService.deleteDragopavo(key$)
        .subscribe ( res => {
          M.toast({ html: 'Dragopavo Eliminado'});
          this.getDragopavos();
          this.eliminando = false;
        })
    }else{
      this.eliminando = false;
    }
  }

  // ---------- CARGAR SCRIPT ----------
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
