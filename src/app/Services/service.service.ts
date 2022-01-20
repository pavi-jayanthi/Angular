import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  match()
 {
  let c=localStorage.getItem('user')
  let d =localStorage.getItem('pass')
  let a=localStorage.getItem('uemail')
  let b=localStorage.getItem('upass')
  if(a===c && b===d)
 {
   return true;
 }
 else{
   return false;
 }
 }
  constructor() { }
}
