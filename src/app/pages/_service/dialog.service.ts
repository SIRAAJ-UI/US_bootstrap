import { Injectable } from "@angular/core";
import { of, Observable } from 'rxjs';

@Injectable()
export class DialogService {
  confirm(message?: string): Observable<boolean> {
    const confirmation: any = window.confirm(message || 'Are you sure?');
    return of(confirmation);
  };
} 