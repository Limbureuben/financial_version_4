import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { authGuard } from '../service/guards/auth.guard';
import { adminGuard } from '../service/adminGuard/auth.guard';

const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'adminhome', component: AdminhomeComponent},
  { path: 'homepage', component: HomepageComponent},
  { 
    path: 'admin-dashboard', component: AdminDashboardComponent,
    canActivate: [authGuard, adminGuard],

  },
  { path: 'updateuser', component: UpdateuserComponent},
  { path: 'edit-user-dialog', component: EditUserDialogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
