import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModuleModule } from '../user-module/user-module.module';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModuleModule = new UserModuleModule();
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit() {
  }
  login() {
    this.router.navigateByUrl("forgetpwd");
  }
  forgetPwd() {

  }
}
