import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularListComponent } from './components/popular-list/popular-list.component';

const routes: Routes = [
  {
    path: 'popular-list',
    component: PopularListComponent,
    data: { title: 'Popular List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
