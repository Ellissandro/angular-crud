import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CRUDService<T>{

  constructor(public http: HttpClient, public server: ServerService, @Inject(String) private API_URL: string) { }

  create(record: T): Observable<any> {
    return this.http.post(this.server.url(`${this.API_URL}`), record)
      .pipe(catchError(this.server.handleError))
  }

  get(): Observable<any> {
    return this.http.get(this.server.url(`${this.API_URL}`))
      .pipe(catchError(this.server.handleError))
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.server.url(`${this.API_URL}/${id}`))
      .pipe(catchError(this.server.handleError))
  }

  update(record: T, id: number): Observable<any> {
    return this.http.put(this.server.url(`${this.API_URL}/${id}`), record)
      .pipe(catchError(this.server.handleError))
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.server.url(`${this.API_URL}/${id}`))
      .pipe(catchError(this.server.handleError))
  }
}
