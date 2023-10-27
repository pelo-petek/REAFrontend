import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UserComponent } from './dashboard/user/user.component';
import { adminControl, userControl } from './admin-control';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './dashboard/admin-dash/sidebar/sidebar.component';
import { AddUserComponent } from './dashboard/admin-dash/add-user/add-user.component';
import { DeleteUserComponent } from './dashboard/admin-dash/delete-user/delete-user.component';
import { UpdateUserComponent } from './dashboard/admin-dash/update-user/update-user.component';
import { AllUsersComponent } from './dashboard/admin-dash/all-users/all-users.component';
import { MyProfileComponent } from './dashboard/user-dash/my-profile/my-profile.component';
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'admin', component: AdminComponent, canActivate:[adminControl]},
  { path: 'user', component: UserComponent, canActivate:[userControl]},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'about', component: AboutComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'addUser', component: AddUserComponent,canActivate:[adminControl] },
  { path: 'deleteUser', component: DeleteUserComponent,canActivate:[adminControl]},
  { path: 'updateUser', component: UpdateUserComponent,canActivate:[adminControl]},
  { path: 'allUsers', component: AllUsersComponent},
  { path: 'myProfile', component: MyProfileComponent,canActivate:[userControl]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
