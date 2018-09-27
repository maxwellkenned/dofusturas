import { Component, OnInit } from '@angular/core';
import { MonturasService } from "../../services/monturas.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  guardando:boolean = false;

  usuario = {
    email:"",
    password: ""
  }

  constructor( public monturasService: MonturasService, public afAuth: AngularFireAuth, private router:Router ) { }

  ngOnInit() {
    this.loadMaterialize();
  }

  tryLogin(value:NgForm){
    this.guardando = true;
    this.monturasService.doLogin(value.value)
      .then(res => {
        this.guardando = false;
        this.router.navigate(['/inicio']);
      }, err => {
        console.error(err.message);
        this.guardando = false;
      })
  }

  loadMaterialize() {
    const dynamicScripts = [
      'assets/libs/particles/particles.js',
      'assets/libs/particles/particulas.js'
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
