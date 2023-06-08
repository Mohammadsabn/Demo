import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {

  constructor() { }
  res: any;

  get(Item: string) {
    console.log("service enterd");
    if (Item == "apr") {
      this.res = "apr";
    }
    else if (Item == "brd") {
      this.res = "brd"
    } 
    else if (Item=='cms'){
      this.res = "cms"
    }
    else if (Item=='rmb'){
      this.res = "rmb"
    }
    else if (Item=='emp'){
      this.res = "emp"
    }
  }

  
  returrnAns() {
    return this.res;
  }

}
function returrnAns() {
  throw new Error('Function not implemented.');
}
