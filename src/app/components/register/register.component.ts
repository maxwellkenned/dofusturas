import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  guardando:boolean = false;

  usuario = {
    email:"",
    password: ""
  }

  imgperfiles = [
    {
      nombre: "Anutrof",
      img: "anu.png",
      src: "assets/img/perfil/anu.png"
    },
    {
      nombre: "Aniripsa",
      img: "eni.png",
      src: "assets/img/perfil/eni.png"
    },
    {
      nombre: "Feca",
      img: "feca.png",
      src: "assets/img/perfil/feca.png"
    },
    {
      nombre: "Hipermago",
      img: "hiper.png",
      src: "assets/img/perfil/hiper.png"
    },
    {
      nombre: "Ocra",
      img: "ocra.png",
      src: "assets/img/perfil/ocra.png"
    },
    {
      nombre: "Osamodas",
      img: "osa.png",
      src: "assets/img/perfil/osa.png"
    },
    {
      nombre: "Pandawa",
      img: "panda.png",
      src: "assets/img/perfil/eni.png"
    },
    {
      nombre: "Sacrógrito",
      img: "sacro.png",
      src: "assets/img/perfil/sacro.png"
    },
    {
      nombre: "Sadidas",
      img: "sadi.png",
      src: "assets/img/perfil/sadi.png"
    },
    {
      nombre: "Selatrop",
      img: "sela.png",
      src: "../../../assets/img/perfil/sela.png"
    },
    {
      nombre: "Sram",
      img: "sram.png",
      src: "assets/img/perfil/sram.png"
    },
    {
      nombre: "Steamer",
      img: "steam.png",
      src: "assets/img/perfil/steam.png"
    },
    {
      nombre: "Tymador",
      img: "tyma.png",
      src: "assets/img/perfil/tyma.png"
    },
    {
      nombre: "Uginak",
      img: "ugi.png",
      src: "assets/img/perfil/ugi.png"
    },
    {
      nombre: "Xelor",
      img: "xelor.png",
      src: "assets/img/perfil/xelor.png"
    },
    {
      nombre: "Yopuka",
      img: "yop.png",
      src: "assets/img/perfil/yop.png"
    },
    {
      nombre: "Zobal",
      img: "zobal.png",
      src: "assets/img/perfil/zobal.png"
    },
    {
      nombre: "Zurcarák",
      img: "zurka.png",
      src: "assets/img/perfil/zurka.png"
    }
  ]
  
  constructor( public monturasService: MonturasService, public afAuth: AngularFireAuth, private router:Router ) { }

  ngOnInit() {
    this.loadMaterialize();
  }

  tryRegister(value:NgForm){
    this.guardando = true;
    let datosAuth = {
      email: value.value.email,
      password: value.value.password
    }
    
    let datosUser = {
      uid: "" ,
      nombre: value.value.nombre,
      apellido: value.value.apellido,
      correo: value.value.email,
      img: value.value.img,
      admin: value.value.admin 
    }
    
    this.monturasService.doRegister(datosAuth)
      .then(res => {
        datosUser.uid = res.user.uid;
        this.monturasService.postUsuario(datosUser)
          .subscribe( res => {
            this.guardando = false;
            this.router.navigate(['/login']);
          })
      }, err => {
        this.guardando = false ;
        console.log(err);
        console.error(err.message);
      })
  }

  loadMaterialize() {
    const dynamicScripts = [
      'assets/libs/particles/particles.js',
      'assets/libs/particles/particulas.js',
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
