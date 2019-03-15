import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from '../app/Components/about/about.component';
import { HomeComponent } from './/components/home/home.component';
import { LoginComponent } from './/components/login/login.component';
import { ContactComponent } from './/components/contact/contact.component';
import { RegisterComponent } from './/components/register/register.component';
import { ReviewDeleteComponent } from './/components/review-delete/review-delete.component';
import { ReviewDetailComponent } from './/components/review-detail/review-detail.component';
import { ReviewEditComponent } from './/components/review-edit/review-edit.component';
import { ReviewHomeListallComponent } from './/components/review-home-listall/review-home-listall.component';
import { TransactionCreateComponent } from './/components/transaction-create/transaction-create.component';
import { TransactionDetailComponent } from './/components/transaction-detail/transaction-detail.component';
import { TransactionHomeListallComponent } from './/components/transaction-home-listall/transaction-home-listall.component';
import { VenueCreateComponent } from './/components/venue-create/venue-create.component';
import { VenueDeleteComponent } from './/components/venue-delete/venue-delete.component';
import { VenueDetailsComponent } from './/components/venue-details/venue-details.component';
import { VenueEditComponent } from './/components/venue-edit/venue-edit.component';
import { VenueHomeListallComponent } from './/components/venue-home-listall/venue-home-listall.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    ReviewDeleteComponent,
    ReviewDetailComponent,
    ReviewEditComponent,
    ReviewHomeListallComponent,
    TransactionCreateComponent,
    TransactionDetailComponent,
    TransactionHomeListallComponent,
    VenueCreateComponent,
    VenueDeleteComponent,
    VenueDetailsComponent,
    VenueEditComponent,
    VenueHomeListallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
