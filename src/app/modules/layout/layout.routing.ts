import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path :'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadChildren:'./home/home.module#HomeModule'},
    
  ];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class LayoutRoutingModule {
}

