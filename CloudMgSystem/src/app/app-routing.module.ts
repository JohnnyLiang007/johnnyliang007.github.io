///路由配置文件
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

///引入组件
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetpwdComponent } from './component/forgetpwd/forgetpwd.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgetpwd',
    component: ForgetpwdComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch:  'full'
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
