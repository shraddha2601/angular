import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }
  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   fullname : ['',Validators.required],
    //   email : ['',Validators.required],
    //   password : ['',Validators.required],
    //   mobile : ['',Validators.required],
    // })
    this.signupForm = new FormGroup({
      fullname : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      mobile : new FormControl('',[Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
      password : new FormControl(null, [Validators.required, Validators.minLength(5)]) ,
    })
  }
  signUp(){
    console.log(this.signupForm.value)
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe(res=>{
      alert("Sign up Successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("something goes wrong");
    })
  }

  get password(){
    return this.signupForm.get('password');
  }

  get mobile(){
    return this.signupForm.get('mobile');
  }

}
