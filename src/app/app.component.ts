import { Component } from '@angular/core';
import { Settings } from './app.settings.model';
import { AppSettings } from './app.settings';
import { Router } from '@angular/router';
import { LoginUserService } from './pages/_service/login-user-service';
import { GlobalTaxToolService } from './pages/_service/global-taxtools-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginUserService]
})

export class AppComponent {
  public settings: Settings;
  
  constructor(public appSettings: AppSettings,private router: Router,
    private loginUserService: LoginUserService,
    private _globalTaxToolService: GlobalTaxToolService,) {
    this.settings = this.appSettings.settings;
  }
  
  ngOnInit() {
    this.router.navigate(['']);
  }

  // private getAuthInfo() {
  //     this.loginUserService.getUserInfo().subscribe(data => {
  //         this._globalTaxToolService.saveData(data);
  //     });
  // }

}
