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
// service imports
var auth_guard_1 = require("./guards/auth.guard");
var auth_service_1 = require("./shared/auth.service");
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
                tasks_component_1.TasksComponent
            ],
            providers: [
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService,
                token_service_1.TokenService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBa0I7QUFDbEIsc0NBQTJEO0FBQzNELHdDQUFxRDtBQUVyRCx1QkFBdUI7QUFDdkIsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUsbUJBQW1CO0FBQ25CLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MscUJBQXFCO0FBQ3JCLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBQzlELDJEQUF5RDtBQUV6RCxrQkFBa0I7QUFDbEIsa0RBQWdEO0FBQ2hELHNEQUFvRDtBQUNwRCx3REFBc0Q7QUFFdEQsaUJBQWlCO0FBQ2pCLG1DQUFpQztBQUNqQywwQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELGlDQUErQjtBQUMvQix1Q0FBcUM7QUFFckMsa0JBQWtCO0FBQ2xCLGtDQUFnQztBQUNoQyxxQ0FBbUM7QUFnQ25DO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTlCckIsZUFBUSxDQUFDO1lBQ1IsU0FBUyxFQUFFO2dCQUNULDRCQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QiwyQkFBbUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsbUNBQWU7Z0JBQ2YsbUNBQWU7Z0JBQ2YsZ0NBQWM7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDVCxzQkFBUztnQkFDVCwwQkFBVztnQkFDWCw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIGFwcCBjb3JlIGltcG9ydHNcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuLy8gY29tcG9uZW50cyBpbXBvcnRzXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFza3NDb21wb25lbnQgfSBmcm9tIFwiLi90YXNrcy90YXNrcy5jb21wb25lbnRcIjtcblxuLy8gc2VydmljZSBpbXBvcnRzXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoLmd1YXJkJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Rva2VuLnNlcnZpY2UnO1xuXG4vLyByeGpzIG9wZXJhdG9yc1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcblxuLy8gcnhqcyBleHRlbnNpb25zXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgU2lnbkluQ29tcG9uZW50LFxuICAgIFNpZ25VcENvbXBvbmVudCxcbiAgICBUYXNrc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoR3VhcmQsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgVG9rZW5TZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=