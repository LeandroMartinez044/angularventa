import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { ClienteComponent } from './cliente/cliente.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'cliente', component: ClienteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
