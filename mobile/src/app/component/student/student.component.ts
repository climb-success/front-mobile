import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PROVINCES, GRADES} from '../../data-config/mock-datets';
import { SchoolService } from '../../service/school.service';
import { School } from '../../class/school';
import { Professional } from '../../class/professional';
import { ProfessionalService } from '../../service/professional.service';
import { Student } from '../../class/student';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  provinces: string[];
  schools: School[];
  professionals: Professional[];
  grades: number[];
  student: Student;
  info: string;

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private professionalService: ProfessionalService,
    private location: Location,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.provinces = PROVINCES;
    this.grades = GRADES;
    this.newStudent();
  }

  newStudent(): void {
    this.student = {id: 0, name: '',
    schoolId: '', professionalId: '',
    telePhone: '', qq: '', weixin: '',
    requirement: '', grade: new Date().getFullYear()+''};
  }

  provinceChange(province: string): void {
    this.student.schoolId = '';
    this.student.professionalId = '';
    this.schools = null;
    this.professionals = null;

    if (province == null || province.length == 0) {
      return;
    }

    this.schoolService.getSchoolByProvince(province)
      .subscribe(schools => {
        this.schools = schools;
      });
  }

  schoolChange(id: string): void {
    this.student.professionalId = '';
    this.professionals = null;
    if (id == null || id.length == 0)
      return;
    this.schoolService.getSchoolById(id)
      .subscribe(school => {
        this.professionals = school.professionals;
      });
  }

  refresh(): void {
    //this.location.go(this.location.path(true));
    this.info = '信息我们已经获知，请耐心等待！！';
    alert(this.info);
    setTimeout(function () {
      window.location.reload();
    }, '3000');
  }

  onSubmit() { 
    console.log(JSON.stringify(this.student)); 
    if (this.student.schoolId.length == 0)
      this.student.schoolId = null;

    if (this.student.professionalId.length == 0)
      this.student.professionalId = null;

    this.studentService.updateStudent(this.student)
    .subscribe(() => this.refresh());
  }
}
