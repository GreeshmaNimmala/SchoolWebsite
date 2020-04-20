import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule,ExtraOptions} from '@angular/router';
import {AngularMaterialModule} from './angular-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { FeaturesComponent } from './home/features/features.component';
import { ProgramsComponent } from './home/programs/programs.component';
import { AboutComponent } from './home/about/about.component';
import { FutureStudentsComponent } from './home/future-students/future-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    FeaturesComponent,
    ProgramsComponent,
    AboutComponent,
    FutureStudentsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,config),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
