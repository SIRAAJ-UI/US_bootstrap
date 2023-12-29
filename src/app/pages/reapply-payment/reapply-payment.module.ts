import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReapplyPaymentComponent } from './reapply-payment.component';
// import { CommonDirectivepModule } from '../common-directive/common-directive.module';
import { DeactivateGuardService } from '../interceptor/can-deactive-guards';
export const routes:Routes = [
  { path: '', component: ReapplyPaymentComponent, pathMatch: 'full',
  canDeactivate:[DeactivateGuardService] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    // CommonDirectivepModule
  ],
  declarations: [
    ReapplyPaymentComponent,
  
]
})

export class ReapplyPaymentModule { }
