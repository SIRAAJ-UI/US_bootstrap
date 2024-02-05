import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable()
export class LegacyDailyPaymentService  {
    constructor(private http: HttpClient) { }

    getReportHistory(postParams): Observable<any> {
        return this.http.post(environment.serverUrl + 'api/Reports/ReportHistory',postParams)
    }
}