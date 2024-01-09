import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { JeopardyLettersListService } from '../report/jeopardy-letters-list/jeopardy-letters-list.service';
import { GlobalTaxToolService } from '../_service/global-taxtools-service';
import { PagerService } from '../payment-lookup/pager.service';
import { PaginationComponent } from '../pagination/pagination.component'
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [ PagerService],

})
export class GridComponent implements OnInit {
  @ViewChild('instance') paginationInstance;
  @ViewChild(PaginationComponent) pagerData: any;

  public jeoPardyLetterList:any[] = [];


  public notificationText = null;
  public jeoPardyPreviewList = [];

  public page = 1;
  public totalPages: number[] = [0, 1, 2, 3, 4];
  public pageRecordLimitData: number[] = [10, 25, 50, 100];
  public pageRecordLimit = 10;
  public start;
  public last;  
  public order = 'null';// for sort bydefault name
  reverse: boolean = false;// sort order

  public search = {
    year: 2023
  };
  searchParams;
  p = 1;
  public jeopardyListCopy = [];
  public totalSelectedCount = 0;
  public isValid=false;
  public isToDate = false;
  searchModel:any = {};
  startCalenderDate = { month: new Date().getMonth() + 1, day: new Date().getDate(), year: new Date().getFullYear() };

  public userPrivilege = {
    'canCertify': true,
    'canApprove': true,
    'canEditJPL': true,
    'canViewJPL': true
  };
  constructor(private jeopardyLetterService: JeopardyLettersListService, 
    private globalTaxToolService: GlobalTaxToolService) {
  }
  ngOnInit() {
    this.getUserPrivilege​();
    this.page = 1;
    var _item = this.globalTaxToolService.getData();
    const myProfileInfo = _item;
    const previousDay = myProfileInfo['previousDay'];

    this.searchModel['exceptionFromDate'] = this.FormatDateString(previousDay);
  }
  private FormatDateString(value) {
    var retPrevDate;
    let newtDate = new Date(value);
    return newtDate.getMonth() + 1 + '/' + newtDate.getDate() + '/' + newtDate.getFullYear();
  }
  public getUserPrivilege​() {
   
    let headers: string[] = ['Name', 'Situs', 'MailingAddress'];
    let data: any[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        Name: 'WICKHAM HAVENS INC ' ,
        Situs: 'WICKHAM HAVENS INC GRIZZLY PEAK BLVD BERKELEY CA' ,
        MailingAddress: 'TAX DELINQNC UNIT 1221 OAK ST R131 OAKLAND CA 94612 '
      });
         
    }
    
    this.jeoPardyLetterList.push(headers);
    
    for (let i = 0; i < data.length; i++) {
        this.jeoPardyLetterList.push(data[i]);
        this.pageChanged(this.page);   
    }
    

    
    
    //alert(this.jeoPardyLetterList[1][1]);
    // const userDate = this.globalTaxToolService.getData();
    // this.jeopardyLetterService.getUserPrivilege​(userDate.userId).subscribe(response => {
    //   this.userPrivilege['canEditJPL'] = response.canEditJPL;
    //   this.userPrivilege['canViewJPL'] = response.canViewJPL;
    //   this.getGeoPardyLettersList();
    // }, err => {
    //   this.getGeoPardyLettersList();
    // });
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  public getGeoPardyLettersList(): void {
    this.jeopardyLetterService.getJeoPardyLettersList(this.search.year).subscribe(response => {
      this.jeoPardyLetterList = this.sortResponse(response);
      this.jeopardyListCopy = response;
      try {
        response.map(item => {
          if (!!item.canProcess) {
            this.totalSelectedCount++;
          }
        });
      } catch (error) {

      }
    });
  }

  public pageChanged($event: number): void {
    // this.p= $event;

    this.start = $event;
    this.start = this.start * this.pageRecordLimit - (this.pageRecordLimit - 1);
    this.last = $event * this.pageRecordLimit;
    if (this.last > this.jeoPardyLetterList.length) {
      this.last = this.jeoPardyLetterList.length;
    }
  }
  private sortResponse(list) {
    return list.sort((a, b) => {
      // Compare by the "defaultYear" key
      if (a.defaultYear < b.defaultYear) {
        return -1;
      }
      if (a.defaultYear > b.defaultYear) {
        return 1;
      }
    });
  }

}
