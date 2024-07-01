import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-pasword',
    loadChildren: () => import('./pages/reset-pasword/reset-pasword.module').then( m => m.ResetPaswordPageModule)
  },
  {
    path: 'email-send',
    loadChildren: () => import('./pages/email-send/email-send.module').then( m => m.EmailSendPageModule)
  },
  {
    path: 'correoalready',
    loadChildren: () => import('./pages/correoalready/correoalready.module').then( m => m.CorreoalreadyPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'status-ground',
    loadChildren: () => import('./status-ground/status-ground.module').then( m => m.StatusGroundPageModule)
  },
  {
    path: 'porfile',
    loadChildren: () => import('./porfile/porfile.module').then( m => m.PorfilePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
