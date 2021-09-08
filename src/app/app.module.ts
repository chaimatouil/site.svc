import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { QuinousComponent } from './quinous/quinous.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ServicesComponent } from './services/services.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import{ Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NosservicesComponent } from './nosservices/nosservices.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {path:'acceuil' , component:AcceuilComponent},
  {path:'quinous' , component:QuinousComponent},
  {path:'expertise' , component:ExpertiseComponent},
  {path:'nosservices' , component:NosservicesComponent},
  {path:'references' , component:ReferencesComponent},
  {path:'contact' , component:ContactComponent},
  {path:'notfound' , component:NotfoundComponent},
  {path:'header' , component:HeaderComponent},
  {path:'footer' , component:FooterComponent},
  {path:'**' , redirectTo:'notfound' , pathMatch:'full'}
  
]
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    QuinousComponent,
    ExpertiseComponent,
    ServicesComponent,
    ReferencesComponent,
    ContactComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    NosservicesComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
