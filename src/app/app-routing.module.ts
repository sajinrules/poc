import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameCriteriaComponent } from './name-criteria/name-criteria.component';

const routes: Routes = [
  { path: 'name-criteria', component: NameCriteriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
