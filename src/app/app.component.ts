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
    this.route.url.subscribe(url =>{
      this.miURL = document.URL;
    });
  }

  ngOnInit(){
    this.miURL = document.URL;
    console.log(this.route.url);
    this.path = this.route.snapshot.url.join('/');
  }
}
