import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { SignUpModel } from './sign-up-user.model';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {

  formValue !: FormGroup;
  signUpModelObj : SignUpModel = new SignUpModel();
  signUpdata : any;
  showAddBtn !: boolean;
  showUpdateBtn !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService
    ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fullname : [''],
      email : [''],
      mobile : [''],
      password : ['']
    })
    this.getAllUser();
  }
  getAllUser(){
    this.api.getUsers()
    .subscribe(res=>{
      this.signUpdata = res;
    })
  }
  onEditUser( row : any){
    this.signUpModelObj.id = row.id;
    this.formValue.controls['fullname'].setValue(row.fullname);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['mobile'].setValue(row.mobile);
    // this.formValue.controls['salary'].setValue(row.salary);
  }
  updateUserDetails (){
    this.signUpModelObj.fullname = this.formValue.value.fullname;
    this.signUpModelObj.email = this.formValue.value.email;
    this.signUpModelObj.password = this.formValue.value.password;
    this.signUpModelObj.mobile = this.formValue.value.mobile;
    this.api.updateUsers(this.signUpModelObj,this.signUpModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllUser();
    })
  }

  deleteUser(row : any){
    this.api.deleteUsers(row.id)
    .subscribe(res=>{
      alert("Employee Deleted");
      this.getAllUser();
    })
  }

}
