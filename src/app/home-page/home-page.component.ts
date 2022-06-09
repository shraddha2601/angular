import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  employeeData !: any;  
  signUpdata : any;


  constructor( private srv : ApiService ) { }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllUser();


  }

  getAllEmployee(){
    this.srv.getEmploye()
    .subscribe(res=>{
      this.employeeData = res;
      // this.totalRecords = res.lenght;
    })
  }

  getAllUser(){
    this.srv.getUsers()
    .subscribe(res=>{
      this.signUpdata = res;
    })
  }
// Email= this.srv.Email;
}
