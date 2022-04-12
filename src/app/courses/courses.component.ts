import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse=null;
  courses =null;

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesService.courses;
  }

  resetSelectedCourse(){
    const emptyCourse={
      id:null,
      title:"",
      description:"",
      percentComplete:0,
      favorite:false,
    }
    this.selectedCourse=emptyCourse;
  }

  selectCourse(course){
    console.log("Course selected", course)
    this.selectedCourse=course;
  }

  saveCourse(){
    console.log("Save source");
  }

  deleteCourse(courseId){
    console.log("Course Deleted" , courseId)
  }


  cancel(){
    this.resetSelectedCourse();
  }

}
