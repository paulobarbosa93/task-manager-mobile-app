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
var datetime_picker_modal_component_1 = require("./pages/datetime-picker-modal/datetime-picker-modal.component");
var home_component_1 = require("./pages/home/home.component");
var sign_in_component_1 = require("./pages/sign-in/sign-in.component");
var sign_up_component_1 = require("./pages/sign-up/sign-up.component");
var tasks_component_1 = require("./pages/tasks/tasks.component");
var task_detail_component_1 = require("./pages/tasks/task-detail/task-detail.component");
// service imports
var auth_guard_1 = require("./guards/auth.guard");
var auth_service_1 = require("./shared/auth.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var task_service_1 = require("./pages/tasks/shared/task.service");
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
                datetime_picker_modal_component_1.DateTimePickerModalComponent,
                home_component_1.HomeComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                tasks_component_1.TasksComponent,
                task_detail_component_1.TaskDetailComponent
            ],
            providers: [
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService,
                modal_dialog_1.ModalDialogService,
                token_service_1.TokenService,
                task_service_1.TaskService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [
                datetime_picker_modal_component_1.DateTimePickerModalComponent
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBa0I7QUFDbEIsc0NBQTJEO0FBQzNELHdDQUFxRDtBQUVyRCx1QkFBdUI7QUFDdkIsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUsbUJBQW1CO0FBQ25CLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MscUJBQXFCO0FBQ3JCLGlIQUE2RztBQUM3Ryw4REFBNEQ7QUFDNUQsdUVBQW9FO0FBQ3BFLHVFQUFvRTtBQUNwRSxpRUFBK0Q7QUFDL0QseUZBQXNGO0FBRXRGLGtCQUFrQjtBQUNsQixrREFBZ0Q7QUFDaEQsc0RBQW9EO0FBQ3BELGtFQUF1RTtBQUN2RSxrRUFBZ0U7QUFDaEUsd0RBQXNEO0FBRXRELGlCQUFpQjtBQUNqQixtQ0FBaUM7QUFDakMsMENBQXdDO0FBQ3hDLGtEQUFnRDtBQUNoRCxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBRXJDLGtCQUFrQjtBQUNsQixrQ0FBZ0M7QUFDaEMscUNBQW1DO0FBdUNuQztJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFyQ3JCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVCw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsMkJBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLDhEQUE0QjtnQkFDNUIsOEJBQWE7Z0JBQ2IsbUNBQWU7Z0JBQ2YsbUNBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHNCQUFTO2dCQUNULDBCQUFXO2dCQUNYLGlDQUFrQjtnQkFDbEIsNEJBQVk7Z0JBQ1osMEJBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsOERBQTRCO2FBQzdCO1NBQ0YsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBuYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gYXBwIGNvcmUgaW1wb3J0c1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG4vLyBjb21wb25lbnRzIGltcG9ydHNcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9kYXRldGltZS1waWNrZXItbW9kYWwvZGF0ZXRpbWUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25JbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGFza3MvdGFza3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYXNrRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGFza3MvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50XCI7XG5cbi8vIHNlcnZpY2UgaW1wb3J0c1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4vcGFnZXMvdGFza3Mvc2hhcmVkL3Rhc2suc2VydmljZSc7XG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC90b2tlbi5zZXJ2aWNlJztcblxuLy8gcnhqcyBvcGVyYXRvcnNcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbi8vIHJ4anMgZXh0ZW5zaW9uc1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBEYXRlVGltZVBpY2tlck1vZGFsQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgU2lnbkluQ29tcG9uZW50LFxuICAgIFNpZ25VcENvbXBvbmVudCxcbiAgICBUYXNrc0NvbXBvbmVudCxcbiAgICBUYXNrRGV0YWlsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhHdWFyZCxcbiAgICBBdXRoU2VydmljZSxcbiAgICBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgVG9rZW5TZXJ2aWNlLFxuICAgIFRhc2tTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIERhdGVUaW1lUGlja2VyTW9kYWxDb21wb25lbnRcbiAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==