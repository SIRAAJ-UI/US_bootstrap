import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DailyPaymentReportComponent } from './daily-payment-report.component';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopup } from '../../common-component/ngb-date-picker/datepicker-popup';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field'
import { Ng2MultiSelectDropDownModule } from '../../common-directive/ng-multiselect-dropdown';
import { PipesModule } from '../../payment-lookup/filters/pipes.module';
import { NgbDateFRParserFormatter } from '../../common-directive/ngb-date-picker/ngb-date-fr-parser-formatter';
import { HelperCommonMethod } from '../../_service/payment-common';
export const routes:Routes = [
  { path: '', component: DailyPaymentReportComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    NgbModule,    
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    ReportViewerModule,
    NgbDatepickerPopupModule,
    Ng2MultiSelectDropDownModule,
    PipesModule
  ],
  declarations: [
    DailyPaymentReportComponent
]
})

export class DailyPaymentReportModule { }
