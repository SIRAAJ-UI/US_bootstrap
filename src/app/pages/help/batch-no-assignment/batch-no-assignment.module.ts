import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BatchNoAssignmentComponent } from './batch-no-assignment.component';

// import { PdfViewerModule } from 'ng2-pdf-viewer';

export const routes:Routes = [
  { path: '', component: BatchNoAssignmentComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
  ],
  declarations: [
    BatchNoAssignmentComponent
  ]
})

export class BatchNoAssignmentsModule {

  
}
