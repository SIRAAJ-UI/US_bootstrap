import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class ElockboxExceptionService {

  constructor(private http: HttpClient) { }

  getExceptionListData(postParam: any): Observable<any> {
    return this.http.post(environment.serverUrl + 'api/eLockbox/GetExceptionListData', postParam);
  }
  getDropdownData(type: any): Observable<any> {
    return this.http.get<any>(environment.serverUrl + 'api/eLockbox/GetDropdownData/' + type);
  }
  updateExceptionList(postParam: any): Observable<any> {
    return this.http.post(environment.serverUrl + 'api/eLockbox/UpdateExceptionList', postParam);
  }
}
