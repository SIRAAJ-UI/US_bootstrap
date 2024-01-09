// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';
// import { PagesComponent } from './pages.component';
// import { BlankComponent } from './blank/blank.component';
// import { SearchComponent } from './search/search.component';
 import { AboutComponent } from './about/about.component';
import { GridComponent } from './grid/grid.component';
// export const routes: Routes = [
//     {
//         path: '',
//         component: PagesComponent,
//         children: [
//             { path: '', redirectTo: 'home', pathMatch: 'full' },
//              { path: 'home', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Home' } },
//             { path: 'paymentlookup', loadChildren: 'app/pages/payment-lookup/payment-lookup.module#PaymentLookupModule', data: { breadcrumb: 'Payment Lookup' } },
//             { path: 'paymentcorrection', loadChildren: 'app/pages/payment-correction/payment-correction.module#PaymentCorrectionModule', data: { breadcrumb: 'Payment Correction' } },
//             { path: 'reapplypayment', loadChildren: 'app/pages/reapply-payment/reapply-payment.module#ReapplyPaymentModule', data: { breadcrumb: 'Reapply Payment' } },

//             // // ReversalExceptionModule

//             { path: 'elockboxExceptionList', loadChildren: 'app/pages/elockbox-exception-list/elockbox-exception-list.module#ElockboxExceptionListModule', data: { breadcrumb: 'eLockbox Exception List' } },

//             { path: 'reversalException', loadChildren: 'app/pages/reversal-exception/reversal-exception.module#ReversalExceptionModule', data: { breadcrumb: 'Return/Reversal Exception List' } },

//             { path: 'report/dailyexceptionreport', loadChildren: 'app/pages/report/daily-exception-report/daily-exception-report.module#DailyExceptionReportModule', data: { breadcrumb: 'Daily Exception Report' } },

//             { path: 'payments/paymentstatus', loadChildren: 'app/pages/double-payment-status/double-payment-status.module#DoublePaymentStatusModule', data: { breadcrumb: 'Double Payment Status' } },
//             { path: 'report/dailypaymentreport', loadChildren: 'app/pages/report/daily-payment-report/daily-payment-report.module#DailyPaymentReportModule', data: { breadcrumb: 'Daily Payment Report' } },


//             { path: 'report/transactionreport', loadChildren: 'app/pages/report/transaction-register/transaction-register.module#TransactionRegisterModule', data: { breadcrumb: 'Transaction Register' } },

//             { path: 'report/dailybatchreport', loadChildren: 'app/pages/report/daily-batch-report/daily-batch-report.module#DailyBatchReportModule', data: { breadcrumb: 'Daily Batch Report' } },

//             { path: 'report/dailypendingpaymentreport', loadChildren: 'app/pages/report/daily-pending-payment-report/daily-pending-payment-report.module#DailyPendingPaymentReportModule', data: { breadcrumb: 'Pending Payments Report' } },

//             { path: 'report/selfservicereport', loadChildren: 'app/pages/report/self-service-report/self-service-report.module#SelfServiceReportModule', data: { breadcrumb: 'Batch Type-Self Service Report' } },

//             { path: 'report/paymentTaxCollection', loadChildren: 'app/pages/report/Tax-Collections-As-Payments/Tax-Collections-As-Payments.module#PaymentTaxCollectionModule', data: { breadcrumb: 'Tax Collections as Payments' } },

//             { path: 'report/depositsTaxCollection', loadChildren: 'app/pages/report/tax-collections-as-deposits/tax-collection-as-deposits.module#TaxCollectionAsDepositsModule', data: { breadcrumb: 'Tax Collection as Deposits Report' } },

//             {
//                 path: 'report/legacyDailyPaymentReport',
//                 loadChildren: 'app/pages/report/legacy-daily-payment-report/legacy-daily-payment-report.module#LegacyDailyPaymentReporttModule',
//                 data: { breadcrumb: 'Legacy Daily Payment Report' }
//             }, {
//                 path: 'report/supplementalreport',
//                 loadChildren: 'app/pages/report/year-end-supplemental-report/year-end-supplemental-report.module#YearEndSupplementalReportModule',
//                 data: { breadcrumb: 'Year End Supplemental Pending Paid Report' }
//             },
//             {
//                 path: 'report/dailybalancingreport',
//                 loadChildren: 'app/pages/report/daily-balancing-report/daily-balancing-report.module#DailyBalancingReportModule',
//                 data: { breadcrumb: 'Daily Balancing Report' }
//             },
//             {
//                 path: 'report/elockbox/:type',
//                 loadChildren: 'app/pages/report/eLockbox/eLockbox-report.module#ELockboxModule',
//                 // data: { breadcrumb: 'E-lockbox Exception Report' }
//             },
//              {
//                 path: 'report/Apportionment/currentsecuredcollections',
//                 loadChildren: 'app/pages/report/apportionment/current-secured-collections/current-secured-collections.module#CurrentSecuredCollectionsModule',
//                 data: { breadcrumb: 'Current Secured Collections' }
//             },
//             {
//                 path: 'report/currentsecuredunpaidcharge',
//                 loadChildren: 'app/pages/report/current-secured-unpaid-tax-charge/current-secured-unpaid-charge.module#CurrentSecuredUnpaidChargeModule',
//                 data: { breadcrumb: 'Current Secured Unpaid Tax Charges' }
//             },
//             {
//                 path:'report/jeopardyletterslist',
//                 loadChildren:'app/pages/report/jeopardy-letters-list/jeopardy-letters-list.module#JeopardyLettersListModule',
//                 data:{breadcrumb:'Jeopardy Letters'}
//             },
//             { path: 'help/batchNoAssignments', loadChildren: 'app/pages/help/batch-no-assignment/batch-no-assignment.module#BatchNoAssignmentsModule', data: { breadcrumb: 'Batch No Assignments' } },

//             { path: 'help/userGuide', loadChildren: 'app/pages/help/user-guide/user-guide.module#UserGuideModule', data: { breadcrumb: 'User Guide' } },
//             { path: 'preference', loadChildren: 'app/pages/preference/preference.module#PreferenceModule', data: { breadcrumb: 'Preferences' } }, { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },

//             {path:'about', component:AboutComponent,data:{breadcrumb:''}},
//             { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }
//         ]
//     }
// ];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);


import { PagesComponent } from './pages.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { 
                path: 'home', 
                loadChildren: () => import('./dashboard/dashboard.module').then( d => d.DashboardModule), 
                data: { breadcrumb: 'Home' } 
            },
            { 
                path: 'paymentlookup', 
                loadChildren: () => import('./payment-lookup/payment-lookup.module').then( d => d.PaymentLookupModule), 
                data: { breadcrumb: 'Payment Lookup' } 
           },

           { 
            path: 'paymentcorrection', 
                loadChildren: () => import('./payment-correction/payment-correction.module').then( d => d.PaymentCorrectionModule), 
            // loadChildren: 'app/pages/payment-correction/payment-correction.module#PaymentCorrectionModule',
             data: { breadcrumb: 'Payment Correction' } 
            },
            // { path: 'reapplypayment', loadChildren: 'app/pages/reapply-payment/reapply-payment.module#ReapplyPaymentModule', data: { breadcrumb: 'Reapply Payment' } },
            {
                path: 'reapplypayment',
                loadChildren:() => import('./reapply-payment/reapply-payment.module').then( r => r.ReapplyPaymentModule),
                data: { breadcrumb: 'Reapply Payment' }
            },
            //{ path: 'reversalException', loadChildren: 'app/pages/reversal-exception/reversal-exception.module#ReversalExceptionModule', data: { breadcrumb: 'Return/Reversal Exception List' } },
            {
                path: 'reversalException',
                loadChildren:() => import('./reversal-exception/reversal-exception.module').then( r => r.ReversalExceptionModule),
                data: { breadcrumb: 'Return/Reversal Exception List' }
            },

            //{ path: 'elockboxExceptionList', loadChildren: 'app/pages/elockbox-exception-list/elockbox-exception-list.module#ElockboxExceptionListModule', data: { breadcrumb: 'eLockbox Exception List' } },
            {
                path: 'elockboxExceptionList',
                loadChildren:() => import('./elockbox-exception-list/elockbox-exception-list.module').then( r => r.ElockboxExceptionListModule),
                data: { breadcrumb: 'eLockbox Exception List' }
            },

            //             { path: 'help/batchNoAssignments', loadChildren: 'app/pages/help/batch-no-assignment/batch-no-assignment.module#BatchNoAssignmentsModule', data: { breadcrumb: 'Batch No Assignments' } },
            {
                path: 'help/batchNoAssignments',
                loadChildren:() => import('./help/batch-no-assignment/batch-no-assignment.module').then( r => r.BatchNoAssignmentsModule),
                data: { breadcrumb: 'Batch No Assignments' }
            },

//             { path: 'help/userGuide', loadChildren: 'app/pages/help/user-guide/user-guide.module#UserGuideModule', data: { breadcrumb: 'User Guide' } },
{
    path: 'help/userGuide',
    loadChildren:() => import('./help/user-guide/user-guide.module').then( r => r.UserGuideModule),
    data: { breadcrumb: 'User Guide' }
},
//             { path: 'preference', loadChildren: 'app/pages/preference/preference.module#PreferenceModule', data: { breadcrumb: 'Preferences' } }, { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
// {
//     path: 'preference',
//     loadChildren:() => import('./preference/preference.module').then( r => r.PreferenceModule),
//     data: { breadcrumb: 'Blank page' }
// },
            {path:'about', 
            loadChildren:() => import('./grid/grid.module').then( r => r.GridModule),data:{breadcrumb:''}},
            {path:'grid', component:GridComponent,data:{breadcrumb:''}},
//             { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }


        ]

    }
    
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
