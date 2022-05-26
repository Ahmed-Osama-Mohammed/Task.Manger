import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurProgramsService {
 
coursesType=[
  {name:"Languages Courses",img:"../../assets/image/languages.jpg",describtion:""},
  {name:"IT Courses",img:"../../assets/image/it.jpg",describtion:""},
  {name:"Business Administraton & Management Program ",img:"../../assets/image/business.jpg",describtion:""},
  {name:"Soft Skills Courses",img:"../../assets/image/soft.jpg",describtion:""},
  {name:"Teaching Diploma",img:"../../assets/image/teaching.jpg",describtion:""},
  {name:"Kids Program",img:"../../assets/image/kid.jpg",describtion:""},

]
LanguagesCourses=[
  {name:"General English",describtion:""}
]

  constructor() { }
  getCourses() {
    return this.coursesType
  }
  getLanguages() {
  return this.LanguagesCourses
  }
}
