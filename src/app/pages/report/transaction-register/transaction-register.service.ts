import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment.prod";


@Injectable()
export class TransactionRegisterService {
    constructor(private http: HttpClient) { }

    getReportHistory(postParams: any): Observable<any> {
        return this.http.post(environment.serverUrl + 'api/Reports/ReportHistory',postParams)
    }

    getCertifyData(GUID: any): Observable<any> {
        return this.http.get(environment.serverUrl + 'api/APPTN/GetCertifyData/'+GUID)
    }
    saveCertifyData(payload: any): Observable<any> {
        return this.http.post(environment.serverUrl + 'api/APPTN/SaveCertifyData',payload)
    }
    getPrivilege(payload: any): Observable<any> {
        return this.http.post(environment.serverUrl + 
        'api/APPTN/GetPrivilege/'+payload.userName,{});
        //'api/APPTN/GetPrivilege/'+payload.userName+'/'+payload.PrivilegeName,{})
    }
}