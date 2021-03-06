import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { loginModule } from '../app/login-user/login.module';
import { fakeBackendProvider } from '../app/core/interceptor/fake-backend';
import { tokenInterceptor } from '../app/core/interceptor/token-validator';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { AddingSpacePipe } from './shared/pipes/adding-space.pipe';
import { StartsWithPipe } from './shared/pipes/starts-with.pipe';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailResolver } from './product-detail/product-detail-resolve';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
    StarRatingComponent,
    AddingSpacePipe,
    StartsWithPipe,
    RegisterUserComponent,
    ProductEditComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    loginModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true },
    fakeBackendProvider,ProductDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
