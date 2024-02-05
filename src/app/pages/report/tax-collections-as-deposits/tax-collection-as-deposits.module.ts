import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopupModule } from '../../common-component/ngb-date-picker/datepicker-popup.module';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ng2MultiSelectDropDownModule } from '../../common-directive/ng-multiselect-dropdown';
import { TaxCollectionAsDepositsComponent } from './tax-collection-as-deposits.component';

export const routes:Routes = [
  { path: '', component: TaxCollectionAsDepositsComponent, pathMatch: 'full' }
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
    Ng2MultiSelectDropDownModule,
    NgbDatepickerPopupModule
  ],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TaxCollectionAsDepositsComponent),
    }
  ],
  declarations: [
    TaxCollectionAsDepositsComponent
]
})
export class TaxCollectionAsDepositsModule { }

