import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public getSender : any =[]
  public pennyWiseUsers:any
  public myUserIndex?:any
  public pennyArray :any
  public  getCurrentSender:any=""
  public firstName :string =''
  public secondName: string=''
  public thirdName: string =""
  public accountNumber?:number
  public package : string=""
   public receiverAccount?: number
   public getReceiverName: any ={}
   public balanceOfSender?:number
   public amount?:any
   public bankName: string =""
   public reason:any
   public nameOfReceiver:string=""
   public tFund:any
   public receiverAccountDetails:any
   public receivingEnd:any
   public receivingEndIndex:any

   
   



  constructor(private _checky: CheckService, private router: Router) {}

  ngOnInit(): void {
    this.getSender=this._checky.getAllMyUser()
    console.log(this.getSender);
    this.pennyWiseUsers=  localStorage['myBankUser'] ?JSON.parse(localStorage['myBankUser']) :[]
    this.myUserIndex= localStorage.getItem("indexOfUser")
    this.pennyArray= this.pennyWiseUsers[this.myUserIndex]

    this.getCurrentSender=JSON.parse(localStorage["currentUser"])
    this.tFund= this.pennyWiseUsers[this.myUserIndex].accountBal
    
    this.firstName =this.pennyArray.fName
    this.secondName= this.pennyArray.surname
    this.thirdName=this.pennyArray.lName
    this.package= this.pennyArray.bPackage
    this.accountNumber= this.pennyArray.accountGen
    this.balanceOfSender= this.pennyArray.accountBal

    
    


    // this.firstName=this. getCurrentSender.fName;
    // this.secondName= this.getCurrentSender.surname
    // this.thirdName =this.getCurrentSender.lName
    // this.package = this.getCurrentSender.bPackage
    // this.accountNumber=this.getCurrentSender.accountGen

  
    


  }
  mySearch(){
    this.getReceiverName= this.getSender.find((val:any, i:any)=>val.accountGen==this. receiverAccount)
   

  }
  confirm(){
    if((this.receiverAccount==0)&&(this.amount==0)&&(this.bankName=="")&& (this.reason=="")){
      alert("please fill in the details")

    }else if((this.receiverAccount==0)||(this.amount==0)||(this.bankName=="")|| (this.reason=="")){
   alert("please fill up the remaining filed")
    }else{
      let receiverAccountName = this.getReceiverName.surname + " " + this.getReceiverName.fName + " " + this.getReceiverName.lName;
      let{nameOfReceiver,receiverAccount,amount,bankName,reason}=this
      this._checky.customerTransfer({
        nameOfReceiver, receiverAccountName,receiverAccount,amount,bankName,reason})

      this.receiverAccountDetails={
        
        accountNameSurname: this.getReceiverName.surname,
        accountNameFirstName: this.getReceiverName.fName,
        accountNameSecondName: this.getReceiverName.lName,
        accountNumber: this.receiverAccount,
        amountToBeSent: this.amount,
        BankName: this.bankName,
        reason: this.reason
      }
        this.pennyWiseUsers[this.myUserIndex].userTransactionProcessing.push(this.receiverAccountDetails);
        localStorage.setItem("myBankUser", JSON.stringify(this.pennyWiseUsers))
        if(this.amount >0 && this.pennyWiseUsers[this.myUserIndex].accountBal>this.amount){
          this.getReceiverName= this.getSender.find((val:any, i:any)=>val.accountGen==this. receiverAccount)
          console.log(this.getReceiverName);
          
   
          this.receivingEndIndex= this.pennyWiseUsers.indexOf(this.getReceiverName)
          // this.pennyWiseUsers[this.receivingEndIndex].accountBal+=parseFloat(this.amount)
          console.log(this.receivingEndIndex);
          


          // this.pennyWiseUsers[this.myUserIndex].accountBal=this.pennyWiseUsers[this.myUserIndex].accountBal- parseFloat(this.amount)

          // this.pennyWiseUsers[this.receivingEndIndex].accountBal+=parseFloat(this.amount)


          // this.pennyWiseUsers[this.myUserIndex].accountBal= this.pennyWiseUsers[this.myUserIndex].accountBal-parseFloat(this.amount)
          // localStorage.setItem("myBankUser", JSON.stringify(this.pennyWiseUsers))
          // alert("successful")
          
        }


        this.router.navigate(["/definition"]) 
    }

    this.receiverAccount
    this.amount 
    this.bankName=''
    this.reason=''
    
     
    
    


  }

}
