import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentLookupComponent } from './payment-lookup.component';

const routes:Routes = [
    { path: '', component: PaymentLookupComponent, pathMatch: 'full' }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentLookupRoutingModule { }


