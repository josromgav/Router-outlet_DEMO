import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  animations: [
    trigger('flyInOutProducto', [
      // state('in', style({transform: 'scale(0.1)'})),
      transition('void => *', [style({transform: 'translateX(-100%)'}),animate(300)]),
      // transition('* => void', [ animate(100 , style({opacity: '0'}))])
    ])
  ]
})
export class ProductoComponent implements OnInit {

  producto:any;
  show:boolean = false;
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url =>{
      this.show = false;
      setTimeout(()=>{
        this.ngOnInit()}, 100);
      ;
    });

   }

  ngOnInit() {
    this.show = true;
    let id= this.route.snapshot.params['productoid'];
    switch(id){
      case 'Personal_de_cabina':
        this.producto = {nombre:'Personal de Cabina', descripcion:'Personal técnico y profesional encargado de las tareas relativas a la operativa de máquinas y su mantenimiento.'};break;
      case 'Envio_de_paqueteria':
        this.producto = {nombre:'Envio de paquetería', descripcion:'Unidad de uso logística para paquetes y bultos que deben ser transferidos a diferente sede.'};break;
      case 'Soporte_y_mantenimiento':
        this.producto = {nombre:'Soporte y mantenimiento', descripcion:'Número en horas de trabajo por persona necesarios para completar la tarea.'};break;
    }
  }

  

}
