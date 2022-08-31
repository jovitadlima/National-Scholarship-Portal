import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('HTTP Request started');
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setError(error);
        this.toastr.error(errorMessage);
        console.log(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // for client side error
      errorMessage = error.error.message;
    } else {
      // for server side error
      if (error.status !== 0) {
        console.error(
          `Backend returned code ${error.status}, body was: `,
          error.error
        );
        errorMessage = error.error;
      }
    }
    return errorMessage;
  }
}
