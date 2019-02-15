"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var tasks_component_1 = require("./tasks/tasks.component");
var task_detail_component_1 = require("./tasks/task-detail/task-detail.component");
var auth_guard_1 = require("./guards/auth.guard");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'sign-in', component: sign_in_component_1.SignInComponent },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
    { path: 'tasks', component: tasks_component_1.TasksComponent },
    { path: 'tasks/:id', component: task_detail_component_1.TaskDetailComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSx3REFBc0Q7QUFDdEQsaUVBQThEO0FBQzlELGlFQUE4RDtBQUM5RCwyREFBeUQ7QUFDekQsbUZBQWdGO0FBRWhGLGtEQUFnRDtBQUVoRCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEVBQUU7SUFDcEUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxtQ0FBZSxFQUFFO0lBQy9DLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQWUsRUFBRTtJQUMvQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUN0RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbkluQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduLWluL3NpZ24taW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9IGZyb20gJy4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrc0NvbXBvbmVudCB9IGZyb20gJy4vdGFza3MvdGFza3MuY29tcG9uZW50JztcbmltcG9ydCB7IFRhc2tEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Rhc2tzL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2F1dGguZ3VhcmQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9ob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gIHsgcGF0aDogJ3NpZ24taW4nLCBjb21wb25lbnQ6IFNpZ25JbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdzaWduLXVwJywgY29tcG9uZW50OiBTaWduVXBDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAndGFza3MnLCBjb21wb25lbnQ6IFRhc2tzQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3Rhc2tzLzppZCcsIGNvbXBvbmVudDogVGFza0RldGFpbENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19