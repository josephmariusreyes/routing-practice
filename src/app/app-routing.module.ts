import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { NotFoundComponent } from './features/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      canActivateChild: [AuthGuard],
    },
    {
        path: '',
        loadChildren: () =>
        import('./features/users/users.module').then((m) => m.UsersModule),
    },
    {
    path: '**',
    component:NotFoundComponent
    // loadChildren: () =>
    //     import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
