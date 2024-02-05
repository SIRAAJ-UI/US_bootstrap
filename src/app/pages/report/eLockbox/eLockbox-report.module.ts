import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';
import { NgbDateFRParserFormatter } from '../../payment-lookup/ngb-date-fr-parser-formatter';
import { HelperCommonMethod } from '../../_service/payment-common';
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ELockboxComponent } from './eLockbox-report.component';
import { TransactionRegisterService } from '../transaction-register/transaction-register.service';
import { AppCommons } from '../../shared/app.commons';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';


export const routes:Routes = [
  { path: '', component: ELockboxComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgbDatepickerPopupModule,
    FormsModule,
    ReportViewerModule
  ],
  declarations: [ELockboxComponent],
  providers: [
    HelperCommonMethod,
    TransactionRegisterService,
    AppCommons,
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
  ]
})
export class ELockboxModule { }
