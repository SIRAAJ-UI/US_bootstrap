import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { CurrentSecuredCollectionsComponent } from './current-secured-collections.component';
export const routes:Routes = [
  { path: '', component: CurrentSecuredCollectionsComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule, 
    FormsModule,
    ReactiveFormsModule,
    ReportViewerModule,
  ],
  declarations: [CurrentSecuredCollectionsComponent]
})
export class CurrentSecuredCollectionsModule { }
