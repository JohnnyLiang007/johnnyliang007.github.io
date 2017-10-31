import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule {
  id: number;
  userName: string;
  nickName: string;
  password: string;
  remeberMe:boolean;
  email: string;
  confirmPassword: string;
  vcode:string;
}
