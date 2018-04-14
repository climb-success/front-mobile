import { HttpHeaders } from '@angular/common/http';


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const URL = 'http://39.104.60.7:8080/success';
//export const URL = 'http://localhost:8080/success';

//学校API
export const SearchSchoolProvinceURL = URL + '/school/searchSchool?province=';
export const SearchProfessionalSchoolURL = URL + '/school/getSchool?id=';

//学生API
export const StudentUpdateURL = URL + '/student/updateStudent';

//老师API
export const TeacherUpdateURL = URL + '/teacher/updateTeacher';

//群API
export const GroupSearchURL = URL + '/group/searchGroup';

//咨询API
export const InformationSearchURL = URL + '/information/searchInformation';

//省份列表
export const PROVINCES: string[] = [
  '北京', '上海', '广东', '湖北', '湖南', '福建', '黑龙江', 
  '辽宁', '吉林', '江西', '江苏', '山西', '河南', '河北', 
  '四川', '天津', '山东', '安徽', '浙江', '云南', '新疆', 
  '甘肃', '内蒙古', '宁夏', '广西', '重庆', '陕西', '海南', 
  '西藏', '贵州', '青海'
];

//年级列表
export const GRADES: number[] = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 
  2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028
];