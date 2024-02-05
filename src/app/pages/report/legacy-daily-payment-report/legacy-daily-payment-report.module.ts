import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopup } from '../../common-component/ngb-date-picker/datepicker-popup';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';
import { LegacyDailyPaymentReportComponent } from './legacy-daily-payment-report.component';

export const routes:Routes = [
  { path: '', component: LegacyDailyPaymentReportComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    NgbModule,    
    FormsModule,
    ReactiveFormsModule,
    ReportViewerModule,
    NgbDatepickerPopupModule
  ],
  declarations: [
    LegacyDailyPaymentReportComponent
]
})

export class LegacyDailyPaymentReporttModule { }
