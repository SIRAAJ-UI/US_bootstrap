import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class CommonService {

  private paymentDetails: Subject<any>;
  // private paymentDetails: any;
  public count=0;
  constructor() {
     this.paymentDetails = new BehaviorSubject({});
  }

  savePaymentDetail( userData: any ) {
    this.paymentDetails.next(userData); 
  
    
  }
  
  getPaymentDetail() {
      return this.paymentDetails.asObservable();

  }
}