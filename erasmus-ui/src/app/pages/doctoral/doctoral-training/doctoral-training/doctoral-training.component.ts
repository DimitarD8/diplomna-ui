import { Component, OnInit } from '@angular/core';
import {NavigationComponent} from "../../../../navigation/navigation/navigation.component";
import {CommonModule} from "@angular/common";
import {TrainingResponse} from "../../../../models/training/training";
import {DoctoralService} from "../../../../service/doctoral/doctoral.service";
import {DoctoralMobilityResponse} from "../../../../models/doctoral/doctoral";


@Component({
  selector: 'app-doctoral-training',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './doctoral-training.component.html',
  styleUrl: './doctoral-training.component.css'
})
export class DoctoralTrainingComponent implements OnInit {

  doctoralTrainings: TrainingResponse[] = [];

  constructor(private doctoralService: DoctoralService) { }

  ngOnInit(): void {
    this.doctoralService.getAllDoctoralMobilities().subscribe((response: DoctoralMobilityResponse[]) => {
      this.doctoralTrainings = response
        .map(doc => doc.training)
        .reduce((acc, trainings) => acc.concat(trainings, []));
    })
  }
}
