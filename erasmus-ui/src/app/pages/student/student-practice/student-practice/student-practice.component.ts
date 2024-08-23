import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { PracticeResponse } from '../../../models/practice/practice';
import { StudentService } from '../../../service/student/student.service';
import { StudentMobilityResponse } from '../../../models/student/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-practice',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './student-practice.component.html',
  styleUrl: './student-practice.component.css'
})
export class StudentPracticeComponent implements OnInit{

  studentPractices?: PracticeResponse[] = [];

  constructor(private studentService: StudentService){

  }

  ngOnInit(): void {
    this.studentService.getAllStudentMobilities().subscribe((response: StudentMobilityResponse[])=>{
      this.studentPractices = response
      .map(st => st.practice)
      .reduce((acc, practices) => acc.concat(practices,[]));
    })
  }

}
