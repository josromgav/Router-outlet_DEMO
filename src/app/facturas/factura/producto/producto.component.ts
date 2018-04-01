import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:any;
  url:any;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url =>{
      this.ngOnInit();
    });

   }

  ngOnInit() {
    this.url = this.route.snapshot.parent.parent.parent.parent;
    let id= this.route.snapshot.params['productoid'];
    switch(id){
      case 'Personal_de_cabina':
        this.producto = {nombre:'Personal de Cabina', descripcion:'Personal técnico y profesional encargado de las tareas relativas a la operativa de máquinas y su mantenimiento.'};break;
      case 'Envio_de_paquetería':
        this.producto = {nombre:'Envio de paquetería', descripcion:'Unidad de uso logística para paquetes y bultos que deben ser transferidos a diferente sede.'};break;
      case 'Soporte_y_mantenimiento':
        this.producto = {nombre:'Soporte y mantenimiento', descripcion:'Número en horas de trabajo por persona necesarios para completar la tarea.'};break;
    }
  }

}
