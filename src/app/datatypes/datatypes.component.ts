import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //declaring variables

  name:string="Likki";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  tupleval:[string,number,boolean];
  dynamicvalue:any;
  student:any;
  picture="assets/images/jaguar.jpg"

  constructor() { 

    this.age=30;
    this.hobbies=["Playing","Sleeping"];
    this.marks=[90,87,77];
    this.Istrue=false;
    this.tupleval=["Hyderabad",1200,true];
    this.dynamicvalue=77;
    this.student={Fathername:"Srinivas",Address:"Kanajiguda"}
  }

  ngOnInit(): void {
  }

}
