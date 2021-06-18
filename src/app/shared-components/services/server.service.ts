import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private baseUrl = 'https://elissandrosilva-com.umbler.net/'
  constructor() { }

  url(path: string): string {
    return this.baseUrl + path;
  }

  handleError(error: any) {
    if (error) {
      return throwError(error.error);
    }

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend retornou o codigo ${error.status}, ` +
        `body foi: ${error.error.message}`
      );
    }
    return throwError('Confira se os dados estão corretos, ou tente novamente mais tarde.');
  }
}
