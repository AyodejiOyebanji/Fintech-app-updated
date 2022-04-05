import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
public pennyWiseUsers:any
public myUserIndex:any
public userHistory:any

  constructor() { }

  ngOnInit(): void {
    this.pennyWiseUsers=  localStorage['myBankUser'] ?JSON.parse(localStorage['myBankUser']) :[]
    this.myUserIndex= localStorage.getItem("indexOfUser")
    this.userHistory= this.pennyWiseUsers[this.myUserIndex].myHistory
    console.log(this.userHistory);
    



  }

}
