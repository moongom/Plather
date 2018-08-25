import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  nextpage(){
    this.router.navigate(['signup2'])
  }
}
