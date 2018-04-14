import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PROVINCES, GRADES } from '../../data-config/mock-datets';
import { SchoolService } from '../../service/school.service';
import { School } from '../../class/school';
import { Professional } from '../../class/professional';
import { ProfessionalService } from '../../service/professional.service';
import { Teacher } from '../../class/teacher';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  provinces: string[];
  schools: School[];
  professionals: Professional[];
  grades: number[];
  teacher: Teacher;
  info: string;
  selectTeacherScope: SelectTeacherScope;
  
  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private professionalService: ProfessionalService,
    private location: Location,
    private teacherService: TeacherService,
  ) { }

  ngOnInit() {
    this.provinces = PROVINCES;
    this.grades = GRADES;
    this.newTeacher();
    this.newSelectTeacherScope();
  }

  newTeacher():void{
    this.teacher = {id: 0, name: '',
    schoolId: '', professionalId: '',
    telePhone: '', qq: '', weixin: '',
    requirement: '', score: '', grade: new Date().getFullYear()+''};
  }

  newSelectTeacherScope(): void{
    this.selectTeacherScope = {
      province: ''
    };
  }
  
  provinceChange(province: string): void {
    this.teacher.schoolId = '';
    this.teacher.professionalId = '';
    this.schools = null;
    this.professionals = null;
    
    province = province.trim();
    if (province == null || province.length == 0) {
      return;
    }

    this.schoolService.getSchoolByProvince(province)
      .subscribe(schools => {
        this.schools = schools;
      });
  }

  schoolChange(id: string): void {
    this.professionals = null;
    this.teacher.professionalId = '';

    if (id == null || id.length == 0)
      return;

    this.schoolService.getSchoolById(id)
      .subscribe(school => {
        this.professionals = school.professionals;
      });
  }

  refresh(): void {
    this.info = '信息我们已经获知，请耐心等待！！';
    alert(this.info);
    setTimeout(function () {
      window.location.reload();
    }, '3000');
  }

  onSubmit() { 
    console.log(JSON.stringify(this.teacher)); 
    if (this.teacher.schoolId.length == 0)
      this.teacher.schoolId = null;

    if (this.teacher.professionalId.length == 0)
      this.teacher.professionalId = null;
    
    this.teacherService.updateTeacher(this.teacher)
    .subscribe(() => this.refresh());
  }

}

export class SelectTeacherScope {
  province: string;
}