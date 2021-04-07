import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routeActive: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkRoute()
  }
  
  checkRoute(){
    this.routeActive = this.router.url
  }

}
