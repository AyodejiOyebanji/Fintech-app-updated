import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  backToDashBoard(){
    this.router.navigate(["/dashboard"])
  }

}
