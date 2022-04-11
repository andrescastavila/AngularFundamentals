import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse=null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript, the REALLY HARD PART',
      description: 'Worship Will sentace',
      percentComplete: 50,
      favorite: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course){
    console.log("Course selected", course)
    this.selectedCourse=course;
  }

  deleteCourse(courseId){
    console.log("Course Deleted" , courseId)
  }

}
