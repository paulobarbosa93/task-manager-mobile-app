// angular imports
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

// nativescript imports
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// app core imports
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// components imports
import { DateTimePickerModalComponent } from "./datetime-picker-modal/datetime-picker-modal.component";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";

// service imports
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/auth.service';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { TaskService } from './tasks/shared/task.service';
import { TokenService } from './shared/token.service';

// rxjs operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// rxjs extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DateTimePickerModalComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    ModalDialogService,
    TokenService,
    TaskService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    DateTimePickerModalComponent
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
