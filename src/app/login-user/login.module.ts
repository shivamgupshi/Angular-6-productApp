import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginUserComponent } from '../login-user/login-user.component';
import { fakeBackendProvider } from '../core/interceptor/fake-backend';

@NgModule({
  declarations:[LoginUserComponent],
  imports:[BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot([
    {path:'login' , component:LoginUserComponent }
  ])],
  providers: [fakeBackendProvider]
})

export class loginModule{ }

