import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const spinner_loader = document.getElementById("spinner_loader") as HTMLDivElement;
    spinner_loader.style.display = "block";
    spinner_loader.style.opacity = "1";
    spinner_loader.style.visibility = "visible";

    const authKey=localStorage.getItem('authKey');
    let requestKey: HttpRequest<any>;
    // if (request.url.endsWith('/login')) {
    //   requestKey =  request.clone({setHeaders: {'Content-Type': 'application/json','Accept':'application/Json','User-Agent': 'Fiddler'}});
    // } else {
        requestKey = request.clone();
     requestKey = request.clone({setHeaders: {'Content-Type': 'application/json','Accept':'application/Json','User-Agent': 'Fiddler'}});
    //}

    return next.handle(requestKey).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
                // stop our loader here
                const spinner_loader = document.getElementById("spinner_loader") as HTMLDivElement;
                spinner_loader.style.display = "none";
                spinner_loader.style.opacity = "0";
                spinner_loader.style.visibility = "hidden";
              }
        }, error => {
          const spinner_loader = document.getElementById("spinner_loader") as HTMLDivElement;
          spinner_loader.style.display = "none";
          spinner_loader.style.opacity = "0";
          spinner_loader.style.visibility = "hidden";
        }));
    
    }
}
