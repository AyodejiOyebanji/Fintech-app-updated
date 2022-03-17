import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CheckService } from '../check.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public myWallet :any=[]
  public pennyWiseUsers:any
  public myUserIndex?:any
  public account : string =""
  public currentCustomer: any=""
  public firstName : string =''
  public accountBal: string =''
  public accountNumber?:number
  public secondName : string =''
  public thirdName : string =''
  public package : string =""
  public pennyArray :any
  public tFund:any
  public walletEach:any
  public userMain?:any
  public currentArrayUser?:any
  public amountInputed?:any
  

  constructor(private _checky: CheckService, private router: Router ) { }

  ngOnInit(): void {
    
    this.myWallet=this._checky.getAllMyUser
    this.pennyWiseUsers=  localStorage['myBankUser'] ?JSON.parse(localStorage['myBankUser']) :[]
    this.myUserIndex= localStorage.getItem("indexOfUser")
    console.log(this.myUserIndex);
    this.pennyArray= this.pennyWiseUsers[this.myUserIndex]
    console.log(this.pennyArray);
    this.firstName= this.pennyArray.fName
    this.accountBal= this.pennyArray.accountBal
    this.accountNumber= this.pennyArray.accountGen
    this.secondName= this.pennyArray.surname
    this.thirdName= this.pennyArray.lName
    this.package = this.pennyArray.bPackage
    this.tFund= this.pennyWiseUsers[this.myUserIndex].accountBal
    console.log(this.tFund);
    
    this.walletEach=this.pennyWiseUsers[this.myUserIndex].userWallet
    this.userMain= this.pennyWiseUsers[this.myUserIndex].userMainAmount
    this.currentArrayUser= this.pennyWiseUsers.filter((val:any,i:any)=>i!=this.myUserIndex)




    
    
    
    
    // this.currentCustomer= JSON.parse(localStorage["currentUser"])
    // this.firstName=this.currentCustomer.fName
    // this.accountBal =this.currentCustomer.accountBal
    // this.accountNumber=this.currentCustomer.accountGen
    // this.secondName=this.currentCustomer.surname
    // this.thirdName =this.currentCustomer.lName
    // this.package = this.currentCustomer.bPackage
    console.log(this.currentCustomer.surname);
    
    
  }
  fundMyAccount(){
    if(this.amountInputed){
      this.pennyWiseUsers[this.myUserIndex].accountBal += parseFloat(this.amountInputed);
      console.log( this.pennyWiseUsers[this.myUserIndex].accountBal += parseFloat(this.amountInputed));
      
      
      localStorage.setItem(
        'myBankUser', JSON.stringify(this.pennyWiseUsers)
      )
      this.ngOnInit();
      
      alert(`Congratulations, 
      ${this.amountInputed} has been added to your account successfully`  )

      
    } 
    this.amountInputed=""

  }
  transfer(){
    this.router.navigate(['/transfer'])
   
  }
  
 
}
