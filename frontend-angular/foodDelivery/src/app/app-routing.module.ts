import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommandComponent } from './command/command.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { CommandManageComponent } from './command-manage/command-manage.component';
import { GainManageComponent } from './gain-manage/gain-manage.component';
import { UsersManageComponent } from './users-manage/users-manage.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
    
  },
  {
    path : 'home',
    component : HomePageComponent
  },
  {
    path : 'menu',
    component : MenuComponent
  },
  {
    path : 'command',
    component : CommandComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'admin-home',
    component : AdminHomeComponent
  },
  {
    path : 'admin-menu',
    component : MenuManageComponent
  },
  {
    path : 'admin-command',
    component : CommandManageComponent
  },
  {
    path : 'admin-gain',
    component : GainManageComponent
  },
  {
    path : 'admin-users',
    component : UsersManageComponent
  },
  {
    path :'**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
