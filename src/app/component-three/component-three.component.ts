import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    /* this.router.navigate(['two'], {queryParams: {name: 'kokey', address: 'beach'}}); */
    this.route.data.subscribe(d => {
      console.log(d)
    })
  }

}
