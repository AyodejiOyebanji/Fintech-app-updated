import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-child-transfer',
  templateUrl: './child-transfer.component.html',
  styleUrls: ['./child-transfer.component.css'],
})
export class ChildTransferComponent implements OnInit {
  public mywallet: any = []
  public getCurrentSender: any = '';
  public firstNameOfSender: string = '';
  public secondNameOfSender: string = '';
  public thirdNameOfSender: string = '';
  public accountNumberOfSender?: number;
  public package: string = '';
  public receiverAccount?: number;
  public getReceiverAccountNumber: any;
  public receiverAccountNumber: any = '';
  public receiverAccountNameGet: string = '';
  public receiverAccountName: any = '';
  public receiverAccountGet: any;
  public nameOfBank: string = '';
  public amountToBeSent?: number;
  public reason: string = '';
  public pin?: number;
  public getTransactionPin?: any;
  public amount?: any;
  public ourClients?: any;
  public indexOfActiveUser?:any
  public userArray:any
  // public myUserIndex?:any
  public userAccountNumber?:any
  public userMainBal?:any
  public receiverAccountIndex:any
  public senderAccountNumber:any


  public pennyWiseUsers:any
  public myUserIndex?:any
  public pennyArray :any

  constructor(private _checky: CheckService) {
    //  this.mywallet= this._checky.getAllMyUser()
    this.getCurrentSender = JSON.parse(localStorage['currentUser']);
    this.pennyWiseUsers=  localStorage['myBankUser'] ?JSON.parse(localStorage['myBankUser']) :[]
    this.myUserIndex= localStorage.getItem("indexOfUser")
    this.pennyArray= this.pennyWiseUsers[this.myUserIndex]
    this.firstNameOfSender = this.pennyArray.surname;
    this.secondNameOfSender = this.pennyArray.fName;
    this.thirdNameOfSender = this.pennyArray.lName;
    this.senderAccountNumber= this.pennyArray.accountGet

    this.getReceiverAccountNumber = JSON.parse(localStorage['myTransfer']);
    //  let receiverAccount;
    for (let i = 0; i < this.getReceiverAccountNumber.length; i++) {
      this.receiverAccountNameGet =
        this.getReceiverAccountNumber[i].receiverAccountName;
      //  this.receiverAccountName = this.receiverAccountGet;
      this.receiverAccountGet =
        this.getReceiverAccountNumber[i].receiverAccount;
      this.nameOfBank = this.getReceiverAccountNumber[i].bankName;
      this.amountToBeSent = this.getReceiverAccountNumber[i].amount;
      this.reason = this.getReceiverAccountNumber[i].reason;
    }

    //  this.receiverAccountNumber= this.getReceiverAccountNumber.receiverAccount
    console.log(this.getReceiverAccountNumber);
    console.log(this.receiverAccount);
  }

  ngOnInit(): void {
    this.mywallet = this._checky.getAllMyUser();
    this.getCurrentSender = JSON.parse(localStorage['currentUser'])
    this.indexOfActiveUser = this.mywallet[this.getCurrentSender]
    console.log(this.indexOfActiveUser);
    this.myUserIndex = localStorage.getItem("indexOfUser")
    console.log(this.myUserIndex);
    this.userArray= this.mywallet[this.myUserIndex]
    console.log(this.userArray);
    this.userAccountNumber= this.userArray.accountGen
    this.userMainBal = this.mywallet[this.myUserIndex].accountBal
    this.senderAccountNumber= this.pennyArray.accountGen
    console.log(this.userMainBal);
  
    
        

    
  }

  confirm() {
    this.getTransactionPin = this.getCurrentSender.cNumber;
    console.log(this.getTransactionPin);
    this.amount = this.amountToBeSent;
    this.ourClients = JSON.parse(localStorage['myBankUser']);
    console.log(this.ourClients);

    if (this.getTransactionPin !== this.pin) {
      alert('not correct');
    } else if (+this.getCurrentSender.accountBal < +this.amount) {
      alert('insuff');
     }  else if(this.amount>0 && this.mywallet[this.myUserIndex].accountBal >this.amount ){
      //  this.mywallet[this.receiverAccountIndex].accountBal+=parseFloat(this.amount)
      //  console.log(this.mywallet[this.receiverAccountIndex].accountBal);
       

      //  this.mywallet[this.myUserIndex].accountBal=this.mywallet[this.myUserIndex].accountBal-parseFloat(this.amount)

      //  this.mywallet[this.receiverAccountIndex].accountBal+=parseFloat(this.amount)

      //  this.mywallet[this.myUserIndex].accountBal= this.mywallet[this.myUserIndex].accountBal-parseFloat(this.amount)
       alert("successful")

     } 

  }
}

//  for (let i = 0; i < this.ourClients.length; i++) {
//    if (this.ourClients[i].accountGen ==this.receiverAccountGet) {
//     this.ourClients[i].accountBal = +this.ourClients[i].accountBal + + this.amount

//    }
//    if(this.ourClients[i].accountGen== this.getCurrentSender.accountGen){
//     this.ourClients[i].accountBal=+ this.ourClients[i].accountBal -+ this.amount

//    }

//  }
