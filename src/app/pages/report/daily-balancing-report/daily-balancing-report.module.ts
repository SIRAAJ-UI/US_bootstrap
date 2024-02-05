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
import { Ng2MultiSelectDropDownModule } from '../../common-directive/ng-multiselect-dropdown';
import { DailyBalancingReportComponent } from './daily-balancing-report.component';
export const routes:Routes = [
  { path: '', component: DailyBalancingReportComponent, pathMatch: 'full' }
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
    DailyBalancingReportComponent
]
})

export class  DailyBalancingReportModule { }
