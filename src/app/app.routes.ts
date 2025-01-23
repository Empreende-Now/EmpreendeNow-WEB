import { Routes } from '@angular/router';
import { LoginComponent } from './login-layout/login.component';
import { LoginFormComponent } from './login-layout/login-form/login-form.component';
import { CadastroFormComponent } from './login-layout/cadastro-form/cadastro-form.component';
import { HomeComponent } from './home-layout/home/home.component';

export const routes: Routes = [
    {path:'', component:LoginComponent, children:[
        {path:'login', component:LoginFormComponent},
        {path:'cadastro', component:CadastroFormComponent},
        {path:'', redirectTo:'login', pathMatch:'full'}
    ],},
    {path:'home', component:HomeComponent}
];
