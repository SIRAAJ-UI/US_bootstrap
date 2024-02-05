import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
   })
export class JeopardyLettersListService {

    constructor(private http: HttpClient) { }

    getJeoPardyLettersList(year): Observable<any> {

        // return of([
        //     {
        //         "parcel": "A-000006",
        //         "assessedTo": "TELESPHERE NETWORK INC.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "",
        //         "defaultYear": "1987",
        //         "defaultNumber": "398137",
        //         "redemptionAmount": "$911,253.93",
        //         "situs": "OAK",
        //         "situsAddress1": "TELESPHERE NETWORK INC.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:29",
        //         "modifiedBy": "dchitty",
        //         "id": "1"
        //     },
        //     {
        //         "parcel": "A-000008",
        //         "assessedTo": "TELESPHERE NETWORK,INC.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1992",
        //         "defaultNumber": "466378",
        //         "redemptionAmount": "$274,948.67",
        //         "situs": "",
        //         "situsAddress1": "TELESPHERE NETWORK,INC.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:29",
        //         "modifiedBy": "dchitty",
        //         "id": "2"
        //     },
        //     {
        //         "parcel": "A-000018",
        //         "assessedTo": "ADVANCED PAGING & COMMUNICATIONS, INC.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1995",
        //         "defaultNumber": "505609",
        //         "redemptionAmount": "$1,056.37",
        //         "situs": "",
        //         "situsAddress1": "ADVANCED PAGING & COMMUNICATIONS, INC.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:29",
        //         "modifiedBy": "dchitty",
        //         "id": "3"
        //     },
        //     {
        //         "parcel": "A-000036",
        //         "assessedTo": "CALIFORNIA BRAMTEL,INC.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "",
        //         "defaultYear": "1990",
        //         "defaultNumber": "438369",
        //         "redemptionAmount": "$28,555.65",
        //         "situs": "",
        //         "situsAddress1": "CALIFORNIA BRAMTEL,INC.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:29",
        //         "modifiedBy": "dchitty",
        //         "id": "4"
        //     },
        //     {
        //         "parcel": "A-000041",
        //         "assessedTo": "INTERNATIONAL PAGING CORP.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1994",
        //         "defaultNumber": "493020",
        //         "redemptionAmount": "$12,867.09",
        //         "situs": "",
        //         "situsAddress1": "INTERNATIONAL PAGING CORP.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "5"
        //     },
        //     {
        //         "parcel": "A-000041",
        //         "assessedTo": "INTERNATIONAL PAGING CORP.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1994",
        //         "defaultNumber": "493020",
        //         "redemptionAmount": "$12,867.09",
        //         "situs": "",
        //         "situsAddress1": "INTERNATIONAL PAGING CORP.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "5"
        //     },
        //     {
        //         "parcel": "A-000041",
        //         "assessedTo": "INTERNATIONAL PAGING CORP.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1994",
        //         "defaultNumber": "493020",
        //         "redemptionAmount": "$12,867.09",
        //         "situs": "",
        //         "situsAddress1": "INTERNATIONAL PAGING CORP.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "5"
        //     },
        //     {
        //         "parcel": "A-000041",
        //         "assessedTo": "INTERNATIONAL PAGING CORP.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1994",
        //         "defaultNumber": "493020",
        //         "redemptionAmount": "$12,867.09",
        //         "situs": "",
        //         "situsAddress1": "INTERNATIONAL PAGING CORP.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "5"
        //     },
        //     {
        //         "parcel": "A-000041",
        //         "assessedTo": "INTERNATIONAL PAGING CORP.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1994",
        //         "defaultNumber": "493020",
        //         "redemptionAmount": "$12,867.09",
        //         "situs": "",
        //         "situsAddress1": "INTERNATIONAL PAGING CORP.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "5"
        //     },
        //     {
        //         "parcel": "A-000041",
        //         "assessedTo": "INTERNATIONAL PAGING CORP.",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "1994",
        //         "defaultNumber": "493020",
        //         "redemptionAmount": "$12,867.09",
        //         "situs": "",
        //         "situsAddress1": "INTERNATIONAL PAGING CORP.",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "5"
        //     },
        //     {
        //         "parcel": "A-000295",
        //         "assessedTo": "Alameda Belt Line",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "2011",
        //         "defaultNumber": "723235",
        //         "redemptionAmount": "$90,006.46",
        //         "situs": "",
        //         "situsAddress1": "Alameda Belt Line",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "dchitty",
        //         "id": "6"
        //     },
        //     {
        //         "parcel": "A-000298",
        //         "assessedTo": "Alameda Belt Line",
        //         "mailAddress1": "",
        //         "mailAddress2": "CODE AREA TOTAL",
        //         "mailAddress3": "FOR THIS ASSESSEE",
        //         "mailZip": "0-   0",
        //         "defaultYear": "2010",
        //         "defaultNumber": "711085",
        //         "redemptionAmount": "$52,527.65",
        //         "situs": "",
        //         "situsAddress1": "Alameda Belt Line",
        //         "situsAddress2": "CODE AREA TOTAL",
        //         "situsAddress3": "FOR THIS ASSESSEE",
        //         "situsZip": "0-   0",
        //         "processYear": "2023",
        //         "canProcess": true,
        //         "isGenerated": true,
        //         "createdDate": "2023-08-22T15:55:32",
        //         "createdBy": "ServiceJob",
        //         "modifiedDate": "2023-08-25T18:37:30",
        //         "modifiedBy": "",
        //         "id": "7"
        //     }]);
        return this.http.get(environment.serverUrl + 'api/JeopardyLetter/GetJeopardyLetters/' + year);
    }

    updateJeopardyLetter(payload): Observable<any> {
        return this.http.post(environment.serverUrl + 'api/JeopardyLetter/UpdateAllJeopardyLetter', payload);
    }
    generateAllJeopardyLetter(payload): Observable<any> {
        return this.http.post(environment.serverUrl + 'api/JeopardyLetter/GenerateAll/' + payload.processYear + '/' + payload.genType, {});
    }

    getUserPrivilege​(userName): Observable<any> {
        return this.http.get(environment.serverUrl + 'api/UserLogin/GetUserPrivilege/' + userName);
// return this.http.get(environment.serverUrl + 'api/UserLogin/GetUserPrivilege​' + userName,{});

    }
}
