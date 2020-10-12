import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandComponent } from './command/command.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CommandManageComponent } from './command-manage/command-manage.component';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { GainManageComponent } from './gain-manage/gain-manage.component';
import { UsersManageComponent } from './users-manage/users-manage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { AuthServiceService } from './auth-service.service';
import { MenuService } from './menu.service';
import { DemoMaterialModule } from 'material-module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    PageNotFoundComponent,
    CommandComponent,
    AdminHomeComponent,
    CommandManageComponent,
    MenuManageComponent,
    GainManageComponent,
    UsersManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule
  ],
  providers: [AuthServiceService,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
