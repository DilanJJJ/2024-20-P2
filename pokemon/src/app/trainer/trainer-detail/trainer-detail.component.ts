import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail: any; // Detalles del entrenador
  pokemons: any[] = []; // Lista de Pokémon
  trainerId!: number; // ID del entrenador

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Captura el parámetro "id"
    if (idParam) {
      this.trainerId = Number(idParam); // Asegúrate de convertirlo en número
      this.loadTrainer(this.trainerId);
    }
  }

  loadTrainer(trainerId: number): void {
    this.trainerService.getTrainerDetail(trainerId).subscribe(
      (data) => {
        this.trainerDetail = data; // Asigna los datos del entrenador
        this.pokemons = data.pokemons; // Asigna los Pokémon
        console.log('Pokémon de', this.trainerDetail.name, ':', this.pokemons); // Verifica los datos
      },
      (error) => {
        console.error('Error al cargar los Pokémon del entrenador:', error);
      }
    );
  }
}

