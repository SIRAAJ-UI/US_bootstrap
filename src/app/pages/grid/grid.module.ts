import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgbDatepickerPopupModule } from '../common-component/ngb-date-picker/datepicker-popup.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const routes:Routes = [
    { path: '', component: GridComponent, pathMatch: 'full' }
  ];
@NgModule({
 declarations: [
    
    GridComponent
 ],
 imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    NgbDatepickerPopupModule,
    //NgbModule
 ],
 providers: [
    // JeopardyLettersListService,GlobalTaxToolService,PagerService
],
 bootstrap: [],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridModule { }