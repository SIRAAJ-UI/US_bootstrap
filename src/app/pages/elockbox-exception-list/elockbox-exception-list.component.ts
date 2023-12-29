import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ElockboxExceptionService } from './elockbox-exception.service';
import { forkJoin, Observable } from 'rxjs';
import { GlobalTaxToolService } from '../_service/global-taxtools-service';
import { DownloadService } from '../_service/download-service';

declare var $: any;
interface Payload {
  from_date?: string;
  to_date?: string;
  status?: string;
  reason?: string;
  uboc_apn?:string;
}
@Component({
  selector: 'app-elockbox-exception-list',
  templateUrl: './elockbox-exception-list.component.html',
  styleUrls: ['./elockbox-exception-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ElockboxExceptionListComponent implements OnInit {

  ngOnInit() {
  
  }

}
