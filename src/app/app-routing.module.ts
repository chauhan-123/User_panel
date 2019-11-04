import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountGuard } from './modules/gaurd/account.guard';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'', redirectTo : 'user' , pathMatch:'full'},
  {path :'user', loadChildren :'./modules/account/account.module#AccountModule'},
   { path: 'Users', loadChildren: './modules/layout/layout.module#LayoutModule', canLoad: [AccountGuard] },
  { path: '**', component: NotfoundComponent },
  { path: 'link-expired', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
