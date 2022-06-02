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
  }

}
