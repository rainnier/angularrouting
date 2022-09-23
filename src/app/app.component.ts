import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if(data instanceof NavigationEnd) {
        console.log(data.url)
      }
    })
     
  }
  title = 'angularrouting';
}
