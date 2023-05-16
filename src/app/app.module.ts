import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { CandidatComponent } from './candidat/candidat.component';
import { RecretureComponent } from './recreture/recreture.component';
import { ClubComponent } from './club/club.component';
import { PropritaireComponent } from './propritaire/propritaire.component';
import { ProposComponent } from './propos/propos.component';
import { CComponent } from './c/c.component';
import { OffreComponent } from './offre/offre.component';
import { EventComponent } from './event/event.component';
import { CowComponent } from './cow/cow.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { DetailcowComponent } from './detailcow/detailcow.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RComponent } from './r/r.component';
import { ActualiteRComponent } from './actualite-r/actualite-r.component';
import { OffreRComponent } from './offre-r/offre-r.component';
import { EventRComponent } from './event-r/event-r.component';
import { CoworkingRComponent } from './coworking-r/coworking-r.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationRComponent } from './notification-r/notification-r.component';
import { DetailcoworkingRComponent } from './detailcoworking-r/detailcoworking-r.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidaturesCComponent } from './candidatures-c/candidatures-c.component';

import { ChangeBgDirective } from './change-bg.directive';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CandidaturesRComponent } from './candidatures-r/candidatures-r.component';
import { DatePipe } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FicheCComponent } from './fiche-c/fiche-c.component';
import { ListeComponent } from './liste/liste.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { PComponent } from './p/p.component';
import { ActualitePComponent } from './actualite-p/actualite-p.component';
import { NotificationPComponent } from './notification-p/notification-p.component';
import { ClComponent } from './cl/cl.component';
import { ActualiteClComponent } from './actualite-cl/actualite-cl.component';
import { NotificationClComponent } from './notification-cl/notification-cl.component';
import { CoworkingClComponent } from './coworking-cl/coworking-cl.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { DetailClComponent } from './detail-cl/detail-cl.component';
import { EventClComponent } from './event-cl/event-cl.component';
import { ParametreComponent } from './parametre/parametre.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilcComponent } from './profilc/profilc.component';
import { DetailscComponent } from './detailsc/detailsc.component';
import { ProfilrComponent } from './profilr/profilr.component';
import { DetailsrComponent } from './detailsr/detailsr.component';
import { OffrerComponent } from './offrer/offrer.component';
import { PostrComponent } from './postr/postr.component';
import { ProfilclubComponent } from './profilclub/profilclub.component';
import { DetailsclubComponent } from './detailsclub/detailsclub.component';
import { PostclubComponent } from './postclub/postclub.component';
import { ProfilaComponent } from './profila/profila.component';
import { DetailsaComponent } from './detailsa/detailsa.component';
import { OffreaComponent } from './offrea/offrea.component';
import { ParametrComponent } from './parametr/parametr.component';
import { ParametrerComponent } from './parametrer/parametrer.component';
import { ParametrepComponent } from './parametrep/parametrep.component';
import { UpdatecComponent } from './updatec/updatec.component';
import { DemandeComponent } from './demande/demande.component';
import { PremieumcComponent } from './premieumc/premieumc.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    InscritComponent,
    CandidatComponent,
    RecretureComponent,
    ClubComponent,
    PropritaireComponent,
    ProposComponent,
    CComponent,
    OffreComponent,
    EventComponent,
    CowComponent,
    ActualiteComponent,
  
    DetailcowComponent,
       DetailoffreComponent,
       ReservationComponent,
       RComponent,
       ActualiteRComponent,
       OffreRComponent,
       EventRComponent,
       CoworkingRComponent,
       NotificationComponent,
       NotificationRComponent,
       DetailcoworkingRComponent,
       CandidaturesCComponent,
       CandidaturesRComponent,
       FicheCComponent,
       ListeComponent,
       TestComponent,
       WelcomeComponent,
       QuestionComponent,
       ChangeBgDirective,
       PComponent,
       ActualitePComponent,
       NotificationPComponent,
       ClComponent,
       ActualiteClComponent,
       NotificationClComponent,
       CoworkingClComponent,
       SponsorsComponent,
       DetailClComponent,
       EventClComponent,
      ParametreComponent,
      AdminComponent,
      ProfilcComponent,
      DetailscComponent,
      ProfilrComponent,
      DetailsrComponent,
      OffrerComponent,
      PostrComponent,
      ProfilclubComponent,
      DetailsclubComponent,
      PostclubComponent,
      ProfilaComponent,
      DetailsaComponent,
      OffreaComponent,
      CanvasJSChart,
      ParametrComponent,
      ParametrerComponent,
      ParametrepComponent,
      UpdatecComponent,
      DemandeComponent,
      PremieumcComponent

       
  ],
  imports: [
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {  }
export class HeaderModule { }