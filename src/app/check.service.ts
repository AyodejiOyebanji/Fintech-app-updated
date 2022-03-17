
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  public myUser: any= []
  public currentUser:any =[]
  public currentCustomerIndex:any=[]
  public myTransfer: any=[]
   

  constructor() { }
  getAllMyUser(){
    if(localStorage['myBankUser']){
      this.myUser =JSON.parse(localStorage['myBankUser'])
    }else{
      this.myUser =[]
    }

    return this.myUser
  }
  getCurrentUser(){
    if(localStorage['currentUserYes']){
      this.currentUser =JSON.parse(localStorage['currentUserYes'])
      
    }else {
      this.currentUser=[]
    }

    return this.currentUser
  }
  getCurrentCustomerIndex(){
    if(localStorage['AtIndexOfCustomer']){
      this.currentCustomerIndex= JSON.parse(localStorage['AtIndexOfCustomer'])
    }else{
      this.currentCustomerIndex=[]
    }
    return this.currentCustomerIndex
  }
  


  
pushAllMyUser(userDetails:any){
  this.myUser.push(userDetails)
  console.log(this.myUser);
  
   localStorage.setItem("myBankUser", JSON.stringify(this.myUser))
  //localStorage['myBankUser']=JSON.stringify(this.myUser)
}

  
customerTransfer(userTransfer:any){
  this.myTransfer.push(userTransfer)
  localStorage.setItem("myTransfer",JSON.stringify(this.myTransfer))

}

}

  

 

