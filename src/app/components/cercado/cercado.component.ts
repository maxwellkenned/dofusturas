import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonturasService } from "../../services/monturas.service";
import { Cercado, Montura, Usuario } from '../../models/monturas';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-cercado',
  templateUrl: './cercado.component.html',
  styles: []
})
export class CercadoComponent implements OnInit {

  key$:string;

  dragopavosselect = [
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

  mulaguasselect = [
    {
      "mulagua": "Almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Almendrada y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Almendrada y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela e índigo",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y dorada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y ébano",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y orquídea",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y purpura",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y roja",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ciruela y turquesa",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada e índigo",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada salvaje",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y ébano",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y orquídea ",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Dorada y purpura",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano e índigo",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano salvaje",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y orquídea",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Ébano y púrpura",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo ",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo salvaje",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y orquídeo",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Índigo y púrpura",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Marfil y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea salvaje",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Orquídea y púrpura",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura salvaje",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura y almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Púrpura y marfil",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja ",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja e índigo",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y almendrada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y dorada",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y ébano",
      img:"../../../assets/img/monturas/100.png"
    },
    {
      "mulagua": "Roja y esmeralda",
      img:"../../../assets/img/monturas/100.png"
    }
  ];
  
  vuelocerontesselect = [
    {
      "vueloceronte": "Almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Almendrado y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y ciruela",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y dorado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Amatista y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ciruela y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y ciruela",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y orquídeo ",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Dorada y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Ébano salvaje",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Esmeralda y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Índigo ",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Índigo salvaje",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Índigo y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y amatista",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y ciruela",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y dorado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y rubí",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Jade y zafiro",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Marfil y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo salvaje",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Orquídeo y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Pelirrojo y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura salvaje",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Púrpura y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y amatista",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y ciruela",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y dorado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Rubí y zafiro",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa e ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Turquesa y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro e índigo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y almendrado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y amatista",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y ciruela",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y dorado",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y ébano",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y esmeralda",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y marfil",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y orquídeo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y pelirrojo",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y púrpura",
      img:"../../../assets/img/monturas/200.png"
    },
    {
      "vueloceronte": "Zafiro y turquesa",
      img:"../../../assets/img/monturas/200.png"
    },
  ];
  

  dragopavos:Montura[] = [];
  mulaguas:Montura[] = [];
  vuelocerontes:Montura[] = [];

  fecundidad = "no";

  cercadolisto:boolean = false;
  monturalista:boolean = false;
  cargando:boolean = true;
  eliminando:boolean = false;
  guardando:boolean = false;

  constructor(private monturasService: MonturasService, private activatedRouted: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.loadScripts();
    this.getId();
    this.getCercado(this.key$);
    this.getDragopavos();
    this.getMulaguas();
    this.getVuelocerontes();
    this.getUsuarios();
  }

  // ---------- OBTENER PARAMETRO ----------
  getId(){
    this.activatedRouted.params.subscribe(params => {
      this.key$ = params['id'];
    })
  }

  // ---------- CERCADO ----------
  getCercado( key$:string ){
    this.cargando = true;
    this.monturasService.getCercado(key$)
      .subscribe( (res:Cercado) => {
        this.monturasService.selectedCercado = res as Cercado;
        this.cercadolisto = true;
        this.loadMaterialize();
      })
  }

  borracercado(){
    this.eliminando = true;
    if (confirm('¿Eliminar Cercado?')) {
      this.monturasService.deleteCercado(this.key$)
        .subscribe ( res => {
          M.toast({ html: 'Cercado Eliminado'});
          this.getDragopavos();
          this.eliminando = false;
          this.router.navigate(['cercados']);
      })
    }else{
      this.eliminando = false;
    }
  }

  // ---------- DRAGOPAVOS ----------
  getDragopavos(){
    this.monturalista = false;
    this.monturasService.getDragopavos()
      .subscribe( res => {
        this.dragopavos = res as Montura[];
        this.loadMaterialize();
        this.monturalista = true;
      })
  }

  addDragopavos(form: NgForm){
    this.guardando = true;
    for (let i = 0; i < this.dragopavosselect.length; i++) {
      if (form.value.especie == this.dragopavosselect[i].dragopavo) {
        form.value.img = this.dragopavosselect[i].img;
      }
    }
    // console.log(form.value);
    this.monturasService.postDragopavo(form.value)
      .subscribe( res => {
        M.toast({ html: 'Dragopavo Agregada'});
        form.reset();
        this.loadScripts();
        this.getId();
        this.getDragopavos();
        this.getMulaguas();
        this.getVuelocerontes();
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

  // ---------- MULAGUAS ----------
  getMulaguas(){
    this.monturalista = false;
    this.monturasService.getMulaguas()
      .subscribe( res => {
        this.mulaguas = res as Montura[];
        this.loadMaterialize();
        this.monturalista = true;
      })
  }

  addMulaguas(form: NgForm){
    this.guardando = true;
    for (let i = 0; i < this.mulaguasselect.length; i++) {
      if (form.value.especie == this.mulaguasselect[i].mulagua) {
        form.value.img = this.mulaguasselect[i].img;
      }
    }
    // console.log(form.value);
    this.monturasService.postMulagua(form.value)
      .subscribe( res => {
        M.toast({ html: 'Mulaguas Agregada'});
        form.reset();
        this.loadScripts();
        this.getId();
        this.getDragopavos();
        this.getMulaguas();
        this.getVuelocerontes();
        this.guardando = false;
      }), 
      error => {
        console.error('Error al agregar nuevo Mulaguas: '+error);
        M.toast({ html: `Error al agregar nuevo Mulaguas: ${error}`});
      };
  }

  borraMulagua( key$:string){
    this.eliminando = true;
    if (confirm('¿Eliminar Mulagua?')) {
      this.monturasService.deleteMulagua(key$)
        .subscribe ( res => {
          M.toast({ html: 'Mulagua Eliminada'});
          this.getMulaguas();
          this.eliminando = false;
        })
    }else{
      this.eliminando = false;
    }
  }

  // ---------- VUELOCERONTES ----------
  getVuelocerontes(){
    this.monturalista = false;
    this.monturasService.getVuelocerontes()
      .subscribe( res => {
        this.vuelocerontes = res as Montura[];
        this.loadMaterialize();
        this.monturalista = true;
      })
  }

  addVuelocerontes(form: NgForm){
    this.guardando = true;
    for (let i = 0; i < this.vuelocerontesselect.length; i++) {
      if (form.value.especie == this.vuelocerontesselect[i].vueloceronte) {
        form.value.img = this.vuelocerontesselect[i].img;
      }
    }
    // console.log(form.value);
    this.monturasService.postVueloceronte(form.value)
      .subscribe( res => {
        M.toast({ html: 'Vueloceronte Agregada'});
        form.reset();
        this.loadScripts();
        this.getId();
        this.getDragopavos();
        this.getMulaguas();
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

  // ---------- USUARIOS ----------
  getUsuarios(){
    this.monturasService.getUsuarios()
      .subscribe( res => {
        this.monturasService.usuarios = res as Usuario[];
        this.loadMaterialize();
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
