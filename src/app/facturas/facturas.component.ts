import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss'],
  animations:[
    trigger('flyInOutPFacturas', [
      // state('in', style({transform: 'scale(0.1)'})),
      transition('void => *', [style({transform: 'translateX(-600%)'}),animate(600)]),
      // transition('* => void', [ animate(300 , style({opacity: 'translateX(-100%)'}))])
    ])
  ]
})
export class FacturasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
