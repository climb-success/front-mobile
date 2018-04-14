import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TeacherUpdateURL } from '../data-config/mock-datets';
import { Teacher } from '../class/teacher';
import { httpOptions } from '../data-config/mock-datets';
import { LogService } from './log.service';

@Injectable()
export class TeacherService {

  private teacherUpdateURL = TeacherUpdateURL;
  constructor(
    private http: HttpClient,
    private logService: LogService,
  ) { }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(this.teacherUpdateURL, teacher, httpOptions).pipe(
      tap(_=> this.logService.log(`update teacher`)),
      catchError(this.logService.error<any>('update teacher'))
    );
  }

}
