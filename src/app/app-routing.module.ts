import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'correoalready',
    loadChildren: () => import('./pages/correoalready/correoalready.module').then(m => m.CorreoalreadyPageModule)
  },
  {
    path: 'email-send',
    loadChildren: () => import('./pages/email-send/email-send.module').then(m => m.EmailSendPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundPageModule)
  },
  {
    path: 'reset-pasword',
    loadChildren: () => import('./pages/reset-pasword/reset-pasword.module').then(m => m.ResetPaswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: '**',
    redirectTo: 'notfound'
  },
  {
    path: 'pag1-graf',
    loadChildren: () => import('./pag1-graf/pag1-graf.module').then( m => m.Pag1GrafPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
