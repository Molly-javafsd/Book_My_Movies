import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AdminAddGenreComponent } from './admin-add-genre/admin-add-genre.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAddMovieTicketToCartComponent } from './user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserListOfAllMoviesComponent } from './user-list-of-all-movies/user-list-of-all-movies.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserPortalComponent,
    AdminPortalComponent,
    AdminDashboardComponent,
    EditMovieComponent,
    AddTicketComponent,
    AdminAddGenreComponent,
    UserDashboardComponent,
    SearchMoviesComponent,
    UserCartComponent,
    UserAddMovieTicketToCartComponent,
    UserListOfAllMoviesComponent,
    UserCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
