import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers:new HttpHeaders() 
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // register
  register(uname: any, acno: any, pswd: any) {
    const body = {
      uname,
      acno,
      pswd
    }
    // server call to register an account and return response to register component
    return this.http.post('http://localhost:3000/register', body)
  }
  // login
  login(acno: any, pswd: any) {
    const body = {
      acno,
      pswd
    }
    // server call to login an account and return response to login component
    return this.http.post('http://localhost:3000/login', body)
  }
  // /appending token to the http header
  appendToken() {
      // fetch token from local storage
      const token = (localStorage.getItem('token') || '')
      console.log(token);
      
      // create http header
      var headers = new HttpHeaders()
      if(token){
        console.log(token);
        
      // append token inside headers
      headers = headers.append('get-token', token)
      options.headers = headers
    }
      return options
  }
  // getBalance
  getBalance(acno: any) {
    return this.http.get('http://localhost:3000/getBalance/'+acno,this.appendToken())
  }

  // deposit
  deposit(acno:any,amount:any){
    const body = {
      acno,
      amount
    }
   return this.http.post('http://localhost:3000/deposit',body,this.appendToken())
  }

  // fundTransfer
  fundTransfer(toacno:any,pswd:any,amount:any){
    const body ={
    toacno,
    pswd,
    amount
  }
  return this.http.post('http://localhost:3000/fundTransfer',body,this.appendToken())
  }

  // getAllTransactions
  getAllTransactions(){
    return this.http.get('http://localhost:3000/all-transaction',this.appendToken())
  }

  // deleteAccount
  deleteAccount(acno:number){
    return this.http.delete('http://localhost:3000/delete-account/'+acno,this.appendToken())
  }

}

