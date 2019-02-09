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
                sign_up_component_1.SignUpComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBa0I7QUFDbEIsc0NBQTJEO0FBQzNELHdDQUFxRDtBQUVyRCx1QkFBdUI7QUFDdkIsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUsbUJBQW1CO0FBQ25CLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MscUJBQXFCO0FBQ3JCLHdEQUFzRDtBQUN0RCxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBRTlELGtCQUFrQjtBQUNsQixrREFBZ0Q7QUFDaEQsc0RBQW9EO0FBQ3BELHdEQUFzRDtBQUV0RCxpQkFBaUI7QUFDakIsbUNBQWlDO0FBQ2pDLDBDQUF3QztBQUN4QyxrREFBZ0Q7QUFDaEQsaUNBQStCO0FBQy9CLHVDQUFxQztBQUVyQyxrQkFBa0I7QUFDbEIsa0NBQWdDO0FBQ2hDLHFDQUFtQztBQStCbkM7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUU7Z0JBQ1QsNEJBQVk7YUFDYjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDJCQUFtQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixtQ0FBZTtnQkFDZixtQ0FBZTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxzQkFBUztnQkFDVCwwQkFBVztnQkFDWCw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIGFwcCBjb3JlIGltcG9ydHNcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuLy8gY29tcG9uZW50cyBpbXBvcnRzXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudFwiO1xuXG4vLyBzZXJ2aWNlIGltcG9ydHNcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvdG9rZW4uc2VydmljZSc7XG5cbi8vIHJ4anMgb3BlcmF0b3JzXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuXG4vLyByeGpzIGV4dGVuc2lvbnNcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtcbiAgICBBcHBDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBTaWduSW5Db21wb25lbnQsXG4gICAgU2lnblVwQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhHdWFyZCxcbiAgICBBdXRoU2VydmljZSxcbiAgICBUb2tlblNlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==