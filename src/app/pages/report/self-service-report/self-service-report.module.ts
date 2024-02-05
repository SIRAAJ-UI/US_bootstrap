import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopup } from '../../common-component/ngb-date-picker/datepicker-popup';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SelfServiceReportComponent } from './self-service-report.component';
import { Ng2MultiSelectDropDownModule } from '../../common-directive/ng-multiselect-dropdown';
import { DateValidator } from '../Tax-Collections-As-Payments/date-validator';
import { PipesModule } from '../../payment-lookup/filters/pipes.module';

export const routes:Routes = [
  { path: '', component: SelfServiceReportComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    NgbModule,    
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ReportViewerModule,
    NgbDatepickerPopupModule,
    Ng2MultiSelectDropDownModule,
    PipesModule
  ],
  declarations: [
    SelfServiceReportComponent,
    // DateValidator
]
})
export class SelfServiceReportModule { }
