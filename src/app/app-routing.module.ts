import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { ProductDetailComponent } from '../app/product-detail/product-detail.component';
import { ProductDetailGuard } from '../app/core/guard/product-detail.guard';
import { RegisterUserComponent } from '../app/register-user/register-user.component';
import { LoginUserComponent } from '../app/login-user/login-user.component';
import { AuthGuard } from '../app/core/guard/auth.guard';
import { ProductEditComponent } from '../app/product-edit/product-edit.component';
import { ProductDetailResolver } from '../app/product-detail/product-detail-resolve';

const routes: Routes = [
  
  {path: 'register', component: RegisterUserComponent},
  { path: 'product',canActivate: [AuthGuard], component: ProductListComponent },
  { path: 'welcome', canActivate: [AuthGuard], component: WelcomeComponent },
  { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent , resolve: { data: ProductDetailResolver } },
  { path: 'product/:id/edit', canActivate: [AuthGuard] ,component: ProductEditComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
