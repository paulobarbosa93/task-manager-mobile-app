"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./pages/home/home.component");
var sign_in_component_1 = require("./pages/sign-in/sign-in.component");
var sign_up_component_1 = require("./pages/sign-up/sign-up.component");
var tasks_component_1 = require("./pages/tasks/tasks.component");
var task_detail_component_1 = require("./pages/tasks/task-detail/task-detail.component");
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
