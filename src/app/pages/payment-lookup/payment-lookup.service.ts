import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { HttpClient} from '@angular/common/http'; //added import
import { PaymentSearchResult } from './PaymentSearchResult';
import { LoginUserInfo } from '../_service/login-user-info';
import { map,catchError,Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {environment} from '../../../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

@Injectable()
export class PaymentLookupService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,     
    private location: Location) {
  }
  userId: any;
  webApiUrl: string;
  webApiUrl1: string;
  progress$: Observable<number>;
  progress: number = 0;
  progressObserver: any;
  menuId: Object[];
  endPointUrl: String =  environment.serverUrl;
  encodedJwtToken: any;
  userInfoObservable: Observable<LoginUserInfo[]>

  get(): Observable<any> {
    return this.http.get('./assets/data/lookup.json');
  }
  getAPNPaymentLookupResponse(postData: any): Observable<any> {
    return this.http.post('api/PaymentLookup/APN', postData);
  }
  getTransactionDateLookupResponse(postData: any): Observable<any> {
    return this.http.post('api/PaymentLookup/TransactionDate', postData);
  }
  getPaymentFiscalYearLookupResponse(postData: any): Observable<any> {
    return this.http.post('api/PaymentLookup/PaymentFiscalYear', postData)
  }
  getTaxBillTaxBillFiscalYearLookupResponse(postData: any): Observable<any> {
    return this.http.post('api/PaymentLookup/TaxBillFiscalYear', postData)
  }
  getPaymentLookupHistoryResponse(object: any): Observable<any> {
    return this.http.get('api/PaymentLookup/' + object);
  }

 // postUserInfo(): Observable<LoginUserInfo[]

  getUserInfo(): Observable<any> {
    return this.http.get(this.endPointUrl + 'api/UserLogin/Login');

  }

  postSearchByApnNoInfo(payLoad: any): Observable<any> { 
    return this.http.post(this.endPointUrl + 'api/PaymentLookup/APN', payLoad);
  }

   getSearchHistory(trxnId: any,paymentId: any): Observable<any> { 
     return this.http.get(this.endPointUrl + 'api/PaymentLookup/'+ trxnId+'/'+paymentId);
   }
  // getSearchHistory(trxnId): Observable<any> { 
  //   return this.http.get(this.endPointUrl + 'api/PaymentLookup/'+ trxnId);
  // }

  postSearchTransactionInfo(user: any): Observable<any> {
    return this.http.post(this.endPointUrl + 'api/PaymentLookup/TransactionDate', user);
  }

  postSearchCreditDateInfo(user: any): Observable<any> {
    return this.http.post(this.endPointUrl + 'api/PaymentLookup/CreditDate', user);
  }

  postSearchDepositDateInfo(user: any): Observable<any> {
    return this.http.post(this.endPointUrl + 'api/PaymentLookup/DepositDate', user);
  }

  postSearchByPaymentFiscalyear(user: any): Observable<any> {
    return this.http.post(this.endPointUrl + 'api/PaymentLookup/PaymentFiscalYear', user);
  }

  postSearchTaxBillFiscalyear(user: any): Observable<any> { 
    return this.http.post(this.endPointUrl + 'api/PaymentLookup/TaxBillFiscalYear',  user);
  }

  public getObserver(): Observable<number> {
    return this.progress$;
  }

}