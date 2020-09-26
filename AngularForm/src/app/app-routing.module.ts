import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

const routes: Routes = [
  //{ path: 'recapitulatif', component: RecapitulatifComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
