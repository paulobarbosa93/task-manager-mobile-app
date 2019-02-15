"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular imports
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// nativescript imports
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var forms_2 = require("nativescript-angular/forms");
// app core imports
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// components imports
var home_component_1 = require("./home/home.component");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var tasks_component_1 = require("./tasks/tasks.component");
var task_detail_component_1 = require("./tasks/task-detail/task-detail.component");
// service imports
var auth_guard_1 = require("./guards/auth.guard");
var auth_service_1 = require("./shared/auth.service");
var task_service_1 = require("./tasks/shared/task.service");
var token_service_1 = require("./shared/token.service");
// rxjs operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
// rxjs extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_2.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                tasks_component_1.TasksComponent,
                task_detail_component_1.TaskDetailComponent
            ],
            providers: [
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService,
                token_service_1.TokenService,
                task_service_1.TaskService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBa0I7QUFDbEIsc0NBQTJEO0FBQzNELHdDQUFxRDtBQUVyRCx1QkFBdUI7QUFDdkIsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUsbUJBQW1CO0FBQ25CLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MscUJBQXFCO0FBQ3JCLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBQzlELDJEQUF5RDtBQUN6RCxtRkFBZ0Y7QUFFaEYsa0JBQWtCO0FBQ2xCLGtEQUFnRDtBQUNoRCxzREFBb0Q7QUFDcEQsNERBQTBEO0FBQzFELHdEQUFzRDtBQUV0RCxpQkFBaUI7QUFDakIsbUNBQWlDO0FBQ2pDLDBDQUF3QztBQUN4QyxrREFBZ0Q7QUFDaEQsaUNBQStCO0FBQy9CLHVDQUFxQztBQUVyQyxrQkFBa0I7QUFDbEIsa0NBQWdDO0FBQ2hDLHFDQUFtQztBQWtDbkM7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBaENyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7YUFDYjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDJCQUFtQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixtQ0FBZTtnQkFDZixtQ0FBZTtnQkFDZixnQ0FBYztnQkFDZCwyQ0FBbUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsc0JBQVM7Z0JBQ1QsMEJBQVc7Z0JBQ1gsNEJBQVk7Z0JBQ1osMEJBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7U0FDRixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIG5hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBhcHAgY29yZSBpbXBvcnRzXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbi8vIGNvbXBvbmVudHMgaW1wb3J0c1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25JbkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9IGZyb20gXCIuL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3MvdGFza3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYXNrRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFza3MvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50XCI7XG5cbi8vIHNlcnZpY2UgaW1wb3J0c1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4vdGFza3Mvc2hhcmVkL3Rhc2suc2VydmljZSc7XG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC90b2tlbi5zZXJ2aWNlJztcblxuLy8gcnhqcyBvcGVyYXRvcnNcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbi8vIHJ4anMgZXh0ZW5zaW9uc1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIFNpZ25JbkNvbXBvbmVudCxcbiAgICBTaWduVXBDb21wb25lbnQsXG4gICAgVGFza3NDb21wb25lbnQsXG4gICAgVGFza0RldGFpbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoR3VhcmQsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgVG9rZW5TZXJ2aWNlLFxuICAgIFRhc2tTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=