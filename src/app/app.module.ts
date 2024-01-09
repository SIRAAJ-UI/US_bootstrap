import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import {HTTPInterceptor} from './pages/interceptor/http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';
import { CommonService } from './pages/_service/common.service';
import { GlobalTaxToolService } from './pages/_service/global-taxtools-service';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { PaymentLookupService } from './pages/payment-lookup/payment-lookup.service';
import { DeactivateGuardService } from './pages/interceptor/can-deactive-guards';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopupModule } from './pages/common-component/ngb-date-picker/datepicker-popup.module';

@NgModule({
  declarations: [
    AppComponent,NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
     NgbModule,
     NgbDatepickerPopupModule,
     
   // NgbPaginationConfig
  ],
  providers: [
    AppSettings,
    CommonService,
    PaymentLookupService,
    GlobalTaxToolService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptor,
      multi: true
    },
    DeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
