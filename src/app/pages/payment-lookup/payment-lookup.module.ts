import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PaymentLookupComponent } from './payment-lookup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PaginationComponent } from '../pagination/pagination.component';
import { Ng2MultiSelectDropDownModule } from '../common-directive/ng-multiselect-dropdown/ng-multiselect-dropdown.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from './filters/pipes.module';
import { FieldErrorDisplayComponent } from  '../field-error-display/field-error-display.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { OrderModule } from 'ngx-order-pipe';
import { LimitToDirective}  from '../common-directive/limit-to-directive';
import { NgbDatepickerPopupModule } from '../common-component/ngb-date-picker/datepicker-popup.module';
import { CommonDirectivepModule } from '../common-directive/common-directive.module';
import { NumberOnlyDirective } from '../common-directive/number.directive';
import { PaymentLookupRoutingModule } from './payment-lookup.routing';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    PaymentLookupRoutingModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    Ng2MultiSelectDropDownModule,
    MatRadioModule,MatCheckboxModule,
    MatFormFieldModule,
    NgbModule,
    PipesModule,
    NgxPaginationModule,
    OrderModule,
    NgbDatepickerModule,
    NgbDatepickerPopupModule,
    CommonDirectivepModule
  ],  
  declarations: [
    PaymentLookupComponent,
    PaginationComponent,
    FieldErrorDisplayComponent,
    LimitToDirective,
    NumberOnlyDirective
    // NgbDatepickerPopup
  ]
})

export class PaymentLookupModule { }
