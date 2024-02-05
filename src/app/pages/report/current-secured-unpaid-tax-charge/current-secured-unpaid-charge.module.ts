import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentSecuredUnpaidTaxChargeComponent } from './current-secured-unpaid-tax-charge.component';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';

export const routes:Routes = [
  { path: '', component: CurrentSecuredUnpaidTaxChargeComponent, pathMatch: 'full' }
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
  declarations: [CurrentSecuredUnpaidTaxChargeComponent]
})
export class CurrentSecuredUnpaidChargeModule { }
