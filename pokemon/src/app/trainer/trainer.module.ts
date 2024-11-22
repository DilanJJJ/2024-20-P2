import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { TrainerRoutingModule } from './trainer-routing.module';

@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerDetailComponent,
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule, 
  ],

  exports: [
    TrainerListComponent 
  ]
})
export class TrainerModule {}