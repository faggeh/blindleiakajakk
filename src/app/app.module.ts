import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MaterialModules } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icons/icon.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { NewRaceComponent } from './components/race-admin/new-race/new-race.component';
import { RaceAdminContainerComponent } from './components/race-admin/race-admin-container/race-admin-container.component';
import { AppRoutingModule, appRoutes } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    IconComponent,
    NavBarComponent,
    MenuListItemComponent,
    RaceAdminContainerComponent,
    NewRaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'blindleia'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features,
    ReactiveFormsModule,
    MaterialModules
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
