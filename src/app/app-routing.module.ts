import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { NotificationRComponent } from './notification-r/notification-r.component';
import { DetailcoworkingRComponent } from './detailcoworking-r/detailcoworking-r.component';
import { NotificationComponent } from './notification/notification.component';
import { CandidaturesCComponent } from './candidatures-c/candidatures-c.component';
import { CandidaturesRComponent } from './candidatures-r/candidatures-r.component';
import { TestComponent } from './test/test.component';
import { ParametreclComponent } from './parametrecl/parametrecl.component';
import { PremieumcComponent } from './premieumc/premieumc.component';
import { ParametrepComponent } from './parametrep/parametrep.component';
import { ParametrerComponent } from './parametrer/parametrer.component';
import { DemandeComponent } from './demande/demande.component';
import { UpdatecComponent } from './updatec/updatec.component';
import { FicheCComponent } from './fiche-c/fiche-c.component';
import { ListeComponent } from './liste/liste.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { ParametreComponent } from './parametre/parametre.component';
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


const routes: Routes = [
  {path :"parametrecl",component:ParametreclComponent},

  {path :"premieumc",component:PremieumcComponent},
  {path :"parametrep",component:ParametrepComponent},

  {path :"parametrer",component:ParametrerComponent},
  {path :"demande",component:DemandeComponent},
  {path :"upadtec",component:UpdatecComponent},

  {path :"home",component:HomeComponent},
  {path :"login",component:LoginComponent},
  {path :"inscrit",component:InscritComponent},
  {path :"candidat",component:CandidatComponent},
  {path :"recreture",component:RecretureComponent},
  {path :"club",component:ClubComponent},
  {path :"propritaire",component:PropritaireComponent},
  {path :"propos",component:ProposComponent},
  {path :"c",component:CComponent},
  {path :"offre",component:OffreComponent},
  {path :"event",component:EventComponent},
  {path :"cow",component:CowComponent},
  {path :"actualite",component:ActualiteComponent},
  {path :"detailcow",component:DetailcowComponent},
  {path :"detailoffre/:id",component:DetailoffreComponent},
  {path :"reservation",component:ReservationComponent},
 
  {path :"r",component:RComponent},
  {path :"actualiteR",component:ActualiteRComponent},
  {path :"offreR",component:OffreRComponent},
  {path :"eventR",component:EventRComponent},
  {path :"coworkingR",component:CoworkingRComponent},
  {path :"notificationR",component:NotificationRComponent},
  {path :"detailcoworkingR",component:DetailcoworkingRComponent},
  {path :"notification",component:NotificationComponent},
  {path :"candidaturesR",component:CandidaturesRComponent},

  {path :"candidaturesC",component:CandidaturesCComponent},

  {path :"ficheC",component:FicheCComponent},
  {path :"liste",component:ListeComponent},
  {path :"welcome",component:WelcomeComponent},
  {path :"question",component:QuestionComponent},

  {path :"test",component:TestComponent},
  

  {path :"parametre",component:ParametreComponent},

  {path :"p",component:PComponent},
  {path :"actualiteP",component:ActualitePComponent},
  {path :"notificationP",component:NotificationPComponent},

  {path :"cl",component:ClComponent},
  {path :"actualiteCl",component:ActualiteClComponent},
  {path :"notificationCl",component:NotificationClComponent},
  {path :"coworkingCl",component:CoworkingClComponent},
  {path :"sponsors",component:SponsorsComponent},
  {path :"detailCl",component:DetailClComponent},
  {path :"eventCl",component:EventClComponent},


  {path :"admin",component:AdminComponent},
  {path :"profilc",component:ProfilcComponent},
  {path :"detailsc",component:DetailscComponent},
  {path :"profilr",component:ProfilrComponent},
  {path :"detailsr",component:DetailsrComponent},
  {path :"offrer",component:OffrerComponent},
  {path :"postp",component:PostrComponent},
  {path :"profilclub",component:ProfilclubComponent},
  {path :"detailsclub",component:DetailsclubComponent},
  {path :"postclub",component:PostclubComponent},
  {path :"profila",component:ProfilaComponent},
  {path :"detailsa",component:DetailsaComponent},
  {path :"offrea",component:OffreaComponent},


  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {  }
