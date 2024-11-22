import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';

const routes: Routes = [
  { path: '', component: TrainerListComponent }, // Ruta base para la lista
  { path: ':id', component: TrainerDetailComponent }, // Ruta para el detalle del entrenador
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule {}