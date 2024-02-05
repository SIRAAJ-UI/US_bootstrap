import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DailyExceptionReportComponent } from "./daily-exception-report.component";
import { RouterModule, Routes } from "@angular/router";
import { NgbDatepickerPopupModule } from "./../../common-component/ngb-date-picker/datepicker-popup.module";
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateFRParserFormatter } from "../../common-directive/ngb-date-picker/ngb-date-fr-parser-formatter";
import { HelperCommonMethod } from "../../_service/payment-common";
import { ReportViewerModule } from "ngx-ssrs-reportviewer";
import { FormsModule } from "@angular/forms";

export const routes:Routes = [
  { path: "", component: DailyExceptionReportComponent, pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgbDatepickerPopupModule,
    ReportViewerModule,
    FormsModule,
    
  ],
  declarations: [DailyExceptionReportComponent],
  providers: [
    HelperCommonMethod,
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
  ],
})
export class DailyExceptionReportModule {}
