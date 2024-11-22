import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/trainers', pathMatch: 'full' }, 
  { path: 'trainers', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) },
  { path: '**', redirectTo: '/trainers' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}