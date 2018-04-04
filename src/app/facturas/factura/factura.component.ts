import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({transform: 'scale(1)',})),
      state('large', style({transform: 'scale(1.2)',})),
    transition('small <=> large', animate('300ms ease-in')),

    ]),
    trigger('flyInOut', [
      // state('in', style({transform: 'scale(0.1)'})),
      transition('void => *', [style({transform: 'rotateX(90deg)'}),animate(300)]),
      transition('* => void', [ animate(300 , style({transform: 'rotateX(90deg)'}))])
    ]),
    trigger('flyInOutProducto', [
      // state('in', style({transform: 'scale(0.1)'})),
      transition('void => *', [style({transform: 'translateX(-100%)'}),animate(300)]),
      transition('* => void', [ animate(300 , style({opacity: 'translateX(-100%)'}))])
    ]),
    trigger('flyInOutPFactura', [
      // state('in', style({transform: 'scale(0.1)'})),
      transition('void => *', [style({transform: 'translateY(-100%)'}),animate(300)]),
      // transition('* => void', [ animate(300 , style({opacity: 'translateX(-100%)'}))])
    ])
    // Define animations here.
 
   ]
})
export class FacturaComponent implements OnInit, OnChanges {
  animationState: string = 'small';
  factura:any={};
  productos:number = 0;
  productosVisible:boolean = false;
  facturaID:any;
  
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url =>{
      
      this.ngOnInit();
      this.sumaProductos();
      
      // this.ngOnInit();
      
    });
    
  }

  ngOnInit() {
    
    let facturaid = this.route.snapshot.params['facturaid'];
    this.facturaID = facturaid;
    switch(facturaid){
      case 'factura1':
        this.factura = {cliente:'ENDESA',
                        fecha:'24/10/2017',
                        IVA:'21%',
                        importe: 20000,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 2},
                          {nombre:'Envio_de_paqueteria',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        case 'factura2':
        this.factura = {cliente:'FUJITSU',
                        fecha:'19/01/2016',
                        IVA:'21%',
                        importe: 15000,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 1},
                          {nombre:'Envio_de_paqueteria',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        case 'factura3':
        this.factura = {cliente:'MOVISTAR',
                        fecha:'22/09/2012',
                        IVA:'21%',
                        importe: 98000,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 7},
                          {nombre:'Envio_de_paqueteria',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        case 'factura4':
        this.factura = {cliente:'YOIGO',
                        fecha:'13/12/2018',
                        IVA:'21%',
                        importe: 44500,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 5},
                          {nombre:'Envio_de_paqueteria',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        default: break;
                       
    }
    this.sumaProductos();
  }

  sumaProductos(){
    let cantidad = 0;
    for(let producto of this.factura.productos){
      cantidad = cantidad + producto.cantidad;
    }
    this.productos = cantidad;
  }

  showProductos(){
    this.productosVisible = !this.productosVisible;
    this.animateMe();
  }

  ngOnChanges(){
  }

  isEmpty(divID:string){
    if(document.getElementById('containerInfoProducto') == null){
      console.log('Es nulo tio');
    }
    console.log('Intento acceder a la id '+divID);
    return document.getElementById(divID).innerHTML == "";
  }

  animateMe() {
    this.animationState = (this.animationState === 'small' ? 'large' : 'small');
}

}
