import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sigin/signin.component';
import { SigUpComponent } from './signup/signup.component';


const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SignInComponent
            },
            { 
                path: 'signup',
                component: SigUpComponent
            
            },
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule]

})
export class HomeRoutingModule {

}