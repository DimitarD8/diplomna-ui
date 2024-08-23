import { Component } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { TrainingResponse } from '../../../models/training/training';
import { StudentService } from '../../../service/student/student.service';
import { StudentMobilityResponse } from '../../../models/student/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-training',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './student-training.component.html',
  styleUrl: './student-training.component.css'
})
export class StudentTrainingComponent {
  studentTrainings?: TrainingResponse[] = [];

  constructor(private studentService: StudentService){

  }

  ngOnInit(): void {
    this.studentService.getAllStudentMobilities().subscribe((response: StudentMobilityResponse[])=>{
      this.studentTrainings = response
      .map(st => st.training)
      .reduce((acc, trainings) => acc.concat(trainings,[]));
    })
  }
}
