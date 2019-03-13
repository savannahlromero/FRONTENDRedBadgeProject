import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ReviewDeleteComponent } from './review-delete/review-delete.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewHomeListallComponent } from './review-home-listall/review-home-listall.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionHomeListallComponent } from './transaction-home-listall/transaction-home-listall.component';
import { VenueCreateComponent } from './venue-create/venue-create.component';
import { VenueDeleteComponent } from './venue-delete/venue-delete.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { VenueEditComponent } from './venue-edit/venue-edit.component';
import { VenueHomeListallComponent } from './venue-home-listall/venue-home-listall.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
