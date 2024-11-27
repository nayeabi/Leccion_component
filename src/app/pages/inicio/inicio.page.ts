import { Component, OnInit } from '@angular/core';

interface Componente {   
  icon: string;   
  name: string;   
  redirectTo: string; } 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [     
    {       
      icon: 'people',       
      name: 'Avatar',       
      redirectTo: '/avatar'     
    }, 
    {       
      icon: 'logo-chrome',       
      name: 'Button',       
      redirectTo: '/button'     
    },    
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
