import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { NosservicesComponent } from './nosservices/nosservices.component';

const routes: Routes = [{path:'acceuil' , component:AcceuilComponent},
{path:'quinous' , component:QuinousComponent},
{path:'expertise' , component:ExpertiseComponent},
{path:'services' , component:ServicesComponent},
{path:'references' , component:ReferencesComponent},
{path:'contact' , component:ContactComponent},
{path:'login' , component:LoginComponent},
{path:'register' , component:RegisterComponent},
{path:'notfound' , component:NotfoundComponent},
{path:'nosservices' , component:NosservicesComponent},
{path:'header' , component:HeaderComponent},
{path:'footer' , component:FooterComponent},
{path:'**' , redirectTo:'notfound' , pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
