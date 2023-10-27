import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UserComponent } from './dashboard/user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/core/services/interceptor/error.interceptor';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './dashboard/admin-dash/sidebar/sidebar.component';
import { AddUserComponent } from './dashboard/admin-dash/add-user/add-user.component';
import { DeleteUserComponent } from './dashboard/admin-dash/delete-user/delete-user.component';
import { UpdateUserComponent } from './dashboard/admin-dash/update-user/update-user.component';
import { AllUsersComponent } from './dashboard/admin-dash/all-users/all-users.component';
import { UserSidebarComponent } from './dashboard/user-dash/user-sidebar/user-sidebar.component';
import { MyProfileComponent } from './dashboard/user-dash/my-profile/my-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    ChangePasswordComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    AllUsersComponent,
    UserSidebarComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
