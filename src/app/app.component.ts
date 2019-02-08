import { Component } from "@angular/core";
import { NSAngular2TokenService } from "./shared/ns-angular2-token/ns-angular2-token.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
  public constructor(private tokenService: NSAngular2TokenService){
    this.tokenService.init({
      apiBase: 'http://10.0.3.3:3004',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    });
    
    this.tokenService.signIn({
      email: 'denilson@gmail.com',
      password: '123123123'
    }).subscribe(
      res => console.dir(res),
      err => console.log(err)
    );
  }
}
