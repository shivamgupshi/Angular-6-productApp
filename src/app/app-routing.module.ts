import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { ProductDetailComponent } from '../app/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
