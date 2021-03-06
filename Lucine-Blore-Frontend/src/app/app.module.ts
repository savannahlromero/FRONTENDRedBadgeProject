import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from '../app/components/about/about.component';
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
import { TransactionEditComponent } from './/components/transaction-edit/transaction-edit.component';
import { TransactionHomeListallComponent } from './/components/transaction-home-listall/transaction-home-listall.component';
import { VenueCreateComponent } from './/components/venue-create/venue-create.component';
import { VenueDeleteComponent } from './/components/venue-delete/venue-delete.component';
import { VenueDetailsComponent } from './/components/venue-details/venue-details.component';
import { VenueEditComponent } from './/components/venue-edit/venue-edit.component';
import { VenueHomeListallComponent } from './/components/venue-home-listall/venue-home-listall.component';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { ReviewService } from './services/reviewservice';
import { TransactionService } from './services/transactionservice';
import { VenueService } from './services/venueservice';
import { ReviewCreateComponent } from './/components/review-create/review-create.component';
import { FooterComponent } from './footer/footer.component';

const routes = [
  {path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  {
    path: 'venues', children: [
      { path: '', component: VenueHomeListallComponent },
      { path: 'create', component: VenueCreateComponent },
      { path: 'detail/:id', component: VenueDetailsComponent },
      { path: 'edit/:id', component: VenueEditComponent },
      { path: 'delete/:id', component: VenueDeleteComponent },
    ]
  },
  {
    path: 'transactions', children: [
      { path: '', component: TransactionHomeListallComponent },
      { path: 'create', component: TransactionCreateComponent },
      { path: 'detail/:id', component: TransactionDetailComponent },
      { path: 'edit/:id', component: TransactionEditComponent },
    ]
   },
  {
    path: 'reviews', children:[
      {path: '', component: ReviewHomeListallComponent},
      {path: 'create', component: ReviewCreateComponent},
      {path: 'detail/:id', component: ReviewDetailComponent},
      {path: 'edit/:id', component: ReviewEditComponent},
      {path: 'delete/:id', component: ReviewDeleteComponent},
    ]
  },
  { path: '**', component: HomeComponent },
];

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
    TransactionEditComponent,
    TransactionHomeListallComponent,
    VenueCreateComponent,
    VenueDeleteComponent,
    VenueDetailsComponent,
    VenueEditComponent,
    VenueHomeListallComponent,
    HeaderComponent,
    ReviewCreateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    ReviewService,
    TransactionService,
    VenueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
