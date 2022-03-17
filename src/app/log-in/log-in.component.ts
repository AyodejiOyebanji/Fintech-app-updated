
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public  logEmail: string =''
  public logPassword : string =''
  public myUser :any =[]
  public gotten: any ={}
  public userSignUpAuth:any =[]
  public currentCustomer: any =""
  public userIndex?:any
  
  

  constructor(private router :Router,  private _checky: CheckService) { }

  ngOnInit(): void {
    this.myUser=this._checky.getAllMyUser()
    
  
  }
  logIn(){
  console.log();
    this.gotten =this.myUser.find((val:any, i:any)=>val.email==this.logEmail && val.password== this.logPassword )
    console.log(this.gotten);
    if(this.gotten){
      this.userIndex=this.myUser.indexOf(this.gotten)
      console.log(this.userIndex);
      localStorage.setItem("currentUser", JSON.stringify(this.gotten))
      this.currentCustomer= JSON.parse(localStorage["currentUser"])
      localStorage.setItem("indexOfUser", this.userIndex)

      alert(`congratulations ${this.currentCustomer.surname}`)
      

       this.router.navigate(["/congrat"])
    }
    else{
      alert("Sorry, this customer does not exist!!!")
     
    }
   }

  }


