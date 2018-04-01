import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit, OnChanges {

  factura:any={};
  productos:number = 0;
  productosVisible:boolean = false;
  facturaID:any;
  
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url =>{
      this.ngOnInit();
      this.sumaProductos();
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
                          {nombre:'Envio_de_paquetería',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        case 'factura2':
        this.factura = {cliente:'FUJITSU',
                        fecha:'19/01/2016',
                        IVA:'21%',
                        importe: 15000,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 1},
                          {nombre:'Envio_de_paquetería',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        case 'factura3':
        this.factura = {cliente:'MOVISTAR',
                        fecha:'22/09/2012',
                        IVA:'21%',
                        importe: 98000,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 7},
                          {nombre:'Envio_de_paquetería',cantidad: 1},
                          {nombre:'Soporte_y_mantenimiento',cantidad: 1},
                        ]};break;
        case 'factura4':
        this.factura = {cliente:'YOIGO',
                        fecha:'13/12/2018',
                        IVA:'21%',
                        importe: 44500,
                        productos:[
                          {nombre:'Personal_de_cabina',cantidad: 5},
                          {nombre:'Envio_de_paquetería',cantidad: 1},
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
  }

  ngOnChanges(){
  }

}
