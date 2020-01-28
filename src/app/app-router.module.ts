import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntonymsComponent } from './antonyms/antonyms.component';
import { FindTheSoundComponent } from './findthesound/findthesound.component';
import { AuthGuard } from './auth/auth.guard';
import { SetupComponent } from './setup/setup.component';
import { HomeComponent } from './home/home.component';
import { AntonymComponent } from './antonym/antonym.component';


const routes: Routes = [
  {
    path: 'antonyms',
    component: AntonymsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'antonyms/:id',
    component: AntonymComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'findTheSound',
    component: FindTheSoundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: SetupComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
