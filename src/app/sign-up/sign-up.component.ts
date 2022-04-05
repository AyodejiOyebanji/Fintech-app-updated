import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {customerInterface} from '../type/customer.interface';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // @Output () signupChild: any = new EventEmitter()
  public surname :string =''
  public fName : string =''
  public lName: string =''
  public email : string =''
  public phone?: number
  public  bvn ?: number 
  public password : string =""
  public cPassword : string =""
  public bPackage : string =''
  public cNumber?: number 
  public customerArray:customerInterface[]= [] 
  public linK :string ="assets/back.png"
  public userSignUpAuth:any=[]
  public   accountGen?: any 
  public accountBal:number= 0
  public userWallet?:any
  public userMainAmount:any=0
  public userTransactionProcessing:Array<any>=[]
  public myHistory:Array<any>=[]
  public mywallet:Array<any>=[]

  
  
  
  
  

  constructor(private router: Router, private _checky: CheckService ) { }

  ngOnInit(): void {
   
   this.userSignUpAuth=this._checky.getAllMyUser()
   console.log(this._checky.getAllMyUser());
   
  }
  signup(){
    
    if((this.surname=='')&&(this.fName=='')&&(this.lName=='')&&(this.email=='')&&(this.phone== 0)&&(this.bvn==0)&&(this.password=='')&&(this.cPassword=='')&&(this.bPackage=='')&&(this.cNumber==0)){
      alert("Please fill in your details")
      
      
    } 
    else if((this.surname=='')||(this.fName=='')||(this.lName=='')||(this.email=='')||(this.phone== 0)||(this.bvn==0)||(this.password=='')||(this.cPassword=='')||(this.bPackage=='')||(this.cNumber==0)){
      alert("fill in the missing field")
    }
    else if (this.password.length< 8){
      alert(`invalid password format '${this.password}'`)

    }else if(!this.email.includes("@gmail.com")){

      alert("check your Email please")
    }
    else if (this.password !==this.cPassword){
      alert("Incorrect Password")
    } else {
    //   this.customerArray.push({
    //     name_one:this.surname,
    //     name_two:this.fName,
    //     name_three: this.lName,
    //     mail: this.email,
    //     tel: this.phone,
    //     verification: this.bvn,
    //     pass:this.password,
    //     cPass:this.cPassword,
    //     pack:this.bPackage,
    //     card_No: this.cNumber
          //accountBalance:this.accountBal
    //   })
    //   console.log(this.customerArray);
    //  // localStorage.setItem('Bank_customer',JSON.stringify(this.customerArray))
    //  // this.router.navigate(["/dashboard"])
    let {surname,fName,lName,email,phone,bvn,password,cPassword,bPackage,cNumber,accountGen,accountBal,userWallet,userMainAmount,userTransactionProcessing,myHistory,mywallet} =  this
    accountGen="963"+ Math.floor(Math.random()*1000000) 
    console.log(this.accountGen);
    
    this._checky.pushAllMyUser({surname,fName,lName,email,phone,bvn,password,cPassword,bPackage,cNumber,accountGen,accountBal,userWallet,userMainAmount,userTransactionProcessing,myHistory,mywallet})
     //localStorage.setItem("Bank_customer", JSON.stringify(this._checky.myUser))

    
    this.router.navigate(["/login"])
    this.surname  =''
  this. fName  =''
  this. lName =''
  this. email  =''
  this. phone = 0
  this.  bvn  = 0
  this. password  =""
  this. cPassword =""
  this. bPackage  =''
  this. cNumber=0
  this.userWallet=''
  this.userMainAmount=0
  this.accountBal=0


    } 

    }

}
