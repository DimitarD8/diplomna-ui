import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { IntensiveShortTermTrainingResponse } from '../../../models/intensiveShortTermTraining/intensiveShortTermTraining';
import { DoctoralService } from '../../../service/doctoral/doctoral.service';
import { DoctoralMobilityResponse } from '../../../models/doctoral/doctoral';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctoral-short-term-training',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './doctoral-short-term-training.component.html',
  styleUrl: './doctoral-short-term-training.component.css'
})
export class DoctoralShortTermTrainingComponent implements OnInit {
  intensiveShortTermTrainings?: IntensiveShortTermTrainingResponse[] = [];

  constructor(private doctoralService: DoctoralService) {

  }

  ngOnInit(): void {
    this.doctoralService.getAllDoctoralMobilities().subscribe((response: DoctoralMobilityResponse[]) => {
      this.intensiveShortTermTrainings = response
        .map(doc => doc.intensiveShortTermTraining)
        .reduce((acc,
          intensiveShortTermTrainings
        ) => acc.concat(intensiveShortTermTrainings, []));
    })
  }


}
