import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StudentUpdateURL } from '../data-config/mock-datets';
import { Student } from '../class/student';
import { httpOptions } from '../data-config/mock-datets';
import { LogService } from './log.service'


@Injectable()
export class StudentService {
  private studentUpdateURL = StudentUpdateURL;

  constructor(
    private http: HttpClient,
    private logService: LogService,
  ) { }

  updateStudent(student: Student): Observable<any> {
    return this.http.post(this.studentUpdateURL, student, httpOptions).pipe(
      tap(_=> this.logService.log(`update student`)),
      catchError(this.logService.error<any>('update student'))
    );
  }
}
