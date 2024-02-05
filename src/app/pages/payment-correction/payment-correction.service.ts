import {Injectable} from '@angular/core'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { catchError } from 'rxjs'

//import {PaymentCorrectionSearchDetails} from './PaymentCorrectionSearchDetails';
import { HttpClient} from '@angular/common/http'; //added import


@Injectable()
export class PaymentCorrectionService {
    constructor(
        private http : HttpClient
    ){}
    endPointURL : string = environment.serverUrl;

    getSearchResult(id: any) : Observable<any> {
        return this.http.get(this.endPointURL +'api/PaymentCorrection/Id?installPaymentId=' + id );
    }
    getPaymentCorrectionSearchResult(rollYear: any,tracerNo: any, installNo: any) : Observable<any> {
        return this.http.get(this.endPointURL + 'api/PaymentCorrection' + '/' + rollYear  +'/' + tracerNo + '/' + installNo);
    }
    // savePaymentDetailchange_old(postParam) : Observable<any> {
    //     return this.http.post(this.endPointURL + 'api/PaymentCorrection' ,postParam);
    // }

    savePaymentDetailchange(postParam: any) : Observable<any> {
        return this.http.post(this.endPointURL + 'api/PaymentCorrection' ,postParam);
    }

    getBatchAgencyCount(postParam: any) : Observable<any> {
       // return this.http.post(this.endPointURL + 'api/PaymentCorrection' ,postParam);
       return this.http.post(this.endPointURL + 'api/PaymentCorrection/BatchAgency',postParam);
       //return this.http.post(this.endPointURL + '/api/PaymentCorrection/BatchAgency' ,postParam);
    }

    getBatchAgencyList() : Observable<any> {
        return this.http.get(this.endPointURL + 'api/PaymentCorrection/BatchAgencyList');
    }
}