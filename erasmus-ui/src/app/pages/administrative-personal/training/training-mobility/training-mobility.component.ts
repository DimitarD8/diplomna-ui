import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { TrainingResponse } from '../../../models/training/training';
import { AdministrativeService } from '../../../service/administrative/administrative.service';
import { AdiministrativeMobilityResponse } from '../../../models/administrative/administrative';

@Component({
  selector: 'app-training-mobility',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './training-mobility.component.html',
  styleUrl: './training-mobility.component.css'
})
export class TrainingMobilityComponent implements OnInit {
  administrativeTrainings?: TrainingResponse[] = [];

  constructor(private adiministrativeService: AdministrativeService) { }

  ngOnInit(): void {
    this.adiministrativeService.getAllAdiministrativeMobilities().subscribe((result: AdiministrativeMobilityResponse[]) => {
      this.administrativeTrainings = result
        .map(adm => adm.training)
        .reduce((acc, trainings) => acc.concat(trainings, []));
    })
  }
}
