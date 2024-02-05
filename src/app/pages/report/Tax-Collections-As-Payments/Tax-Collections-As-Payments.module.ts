import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ng2MultiSelectDropDownModule } from '../../common-directive/ng-multiselect-dropdown';

import { PaymentTaxCollectionComponent } from './Tax-Collections-As-Payments.component';
import { DateValidator } from './date-validator';
import { PipesModule } from '../../payment-lookup/filters/pipes.module';

export const routes:Routes = [
  { path: '', component: PaymentTaxCollectionComponent, pathMatch: 'full' }
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
    Ng2MultiSelectDropDownModule,
    NgbDatepickerPopupModule,
    PipesModule
  ],
  declarations: [
    PaymentTaxCollectionComponent,
    
]
})
export class PaymentTaxCollectionModule { }

