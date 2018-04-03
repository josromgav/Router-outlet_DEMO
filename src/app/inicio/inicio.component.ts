import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  miURL:any;
  routeFinal:any;
  constructor(private route: ActivatedRoute, private location:Location, private router: Router) {
    
    this.router.events.subscribe(url => {
      this.miURL = this.router.url;
    })
    
    
  }

  ngOnInit() {
    
    let ultimohijo = this.route;
    while(ultimohijo.firstChild != null){
      ultimohijo = ultimohijo.firstChild;
      console.log('Estoy en bucle');
      console.log('cambio desde on init');
    }
    this.routeFinal = ultimohijo;
    // this.miURL = this.routeFinal.snapshot.pathFromRoot.map(x=>x.url).join('/');
    this.miURL = this.router.url;
    
  }

  

}
