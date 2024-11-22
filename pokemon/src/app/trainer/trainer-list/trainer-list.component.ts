import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.getTrainersFromService();
  }

  getTrainersFromService(): void {
    this.trainerService.getTrainersList().subscribe(
      (data: Array<Trainer>) => {
        this.trainers = data;
      },
      (error) => {
        console.error('Error fetching trainers list', error);
      }
    );
  }

  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}

