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
//import { LoginUserComponent } from './login-user/login-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
    StarRatingComponent,
    AddingSpacePipe,
    StartsWithPipe,
    RegisterUserComponent
   
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
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
