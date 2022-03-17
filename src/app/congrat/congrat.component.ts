import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-congrat',
  templateUrl: './congrat.component.html',
  styleUrls: ['./congrat.component.css']
})
export class CongratComponent implements OnInit {
  public myUser :any =[];
  public me :any =[];
  public dispName :any ='';
  public accountName?:any;
  public myAccount?:number;
  public accountGen:any=[];

  constructor(private _checky: CheckService, private router:Router){}
    
  ngOnInit(): void {}
  
  
  dash(){
    this.router.navigate(["/dashboard"])

  }


 


}
