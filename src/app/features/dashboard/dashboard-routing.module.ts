import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from '../../guards/admin.guard';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path:'admin',
    component:AdminComponent, canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}