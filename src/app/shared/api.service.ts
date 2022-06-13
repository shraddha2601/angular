import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

   Email:string="";
  constructor(private http : HttpClient) { }

  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/posts" , data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmploye(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmploye(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id , data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmploye(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  newEmploye(id:number){
    return this.http.get<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateFormEmploye(id : number,data : any){
    return this.http.put<any>("http://localhost:3000/posts/"+id ,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }




// for signup list

  postUsers(data : any){
    return this.http.post<any>("http://localhost:3000/signupUsers" , data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUsers(){
    return this.http.get<any>("http://localhost:3000/signupUsers")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUsers(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/signupUsers/"+id , data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUsers(id:number){
    return this.http.delete<any>("http://localhost:3000/signupUsers/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
