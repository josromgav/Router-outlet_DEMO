import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  miURL:any;
  path:any;

  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(){
    
  }
}
