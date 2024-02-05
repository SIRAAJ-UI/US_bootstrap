import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; //added import


@Injectable()
export class ReapplyPaymentService {

  constructor(public http: HttpClient) { }

  getFromTracerReapplyPaymentDetail(year:any, tracerNo:any, install_no:any): Observable<any> {
    return this.http.get(environment.serverUrl + 'api/PaymentReapply/From/' + year + '/' + tracerNo + '/' + install_no)
  }
  getToTracerReapplyPaymentDetail(year:any, tracerNo:any, install_no:any): Observable<any> {
    return this.http.get(environment.serverUrl + 'api/PaymentReapply/To/' + year + '/' + tracerNo + '/' + install_no)
  }

  saveReapplyPayment(object:any) {
    return this.http.post(environment.serverUrl + 'api/PaymentReapply', object);
  }

  getReaaplyPaymentDetailByID(ID:any) {
    return this.http.get(environment.serverUrl + 'api/PaymentReapply/Id?ttpinstallPaymentId='+ ID);
  }
}