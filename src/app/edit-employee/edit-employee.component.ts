import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './edit-employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;  
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
    this.api.newEmploye(this.router.snapshot.params['id']).subscribe((res)=>{
      this.formValue.setValue({
        firstName : res['firstName'],
        lastName : res['lastName'],
        email : res['email'],
        mobile : res['mobile'],
        salary : res['salary'],
      })
      
    });
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary : [''],

    })
    this.getAllEmployee();
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelObj)
    .subscribe (res=>{
      console.log(res);
      alert("Employee Addes successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Something went wrong")
    })

  }
  getAllEmployee(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }
  deleteEmployee(row : any){
    this.api.deleteEmploye(row.id)
    .subscribe(res=>{
      alert("Employee Deleted");
      this.getAllEmployee();
    })
  }

  onEdit( row: any ){
    this.showAdd = false;
    this.showUpdate = true;

    this.employeeModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }
  // updateEmployeeDetails(){
  //   this.employeeModelObj.firstName = this.formValue.value.firstName;
  //   this.employeeModelObj.lastName = this.formValue.value.lastName;
  //   this.employeeModelObj.email = this.formValue.value.email;
  //   this.employeeModelObj.mobile = this.formValue.value.mobile;
  //   this.employeeModelObj.salary = this.formValue.value.salary;
  //   this.api.updateEmploye(this.employeeModelObj,this.employeeModelObj.id)
  //   .subscribe(res=>{
  //     alert("Updated Successfully");
  //     let ref = document.getElementById('cancel');
  //     ref?.click();
  //     this.formValue.reset();
  //     this.getAllEmployee();
  //   })
  // }
  updateForm(){
    this.api.updateFormEmploye(this.router.snapshot.params['id'],this.formValue.value).subscribe((res)=>{
      console.log(res);
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
    }) 
  }
}
