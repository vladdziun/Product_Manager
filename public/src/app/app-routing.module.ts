import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: 'edit/:id',component: EditComponent },
  { path: 'products',component: ProductsComponent },
  { path: '',component: HomeComponent },
  { path: 'new',component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
