"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ns_angular2_token_service_1 = require("./shared/ns-angular2-token/ns-angular2-token.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(tokenService) {
        this.tokenService = tokenService;
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
        }).subscribe(function (res) { return console.dir(res); }, function (err) { return console.log(err); });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [ns_angular2_token_service_1.NSAngular2TokenService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0dBQThGO0FBTzlGO0lBQ0Usc0JBQTJCLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGFBQWEsRUFBRTtnQkFDYixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbEMsUUFBUSxFQUFFLGdDQUFnQztpQkFDM0M7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQyxDQUFDLFNBQVMsQ0FDVixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLEVBQ3ZCLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FDeEIsQ0FBQztJQUNKLENBQUM7SUFuQlUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FFeUMsa0RBQXNCO09BRHBELFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOU0FuZ3VsYXIyVG9rZW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL25zLWFuZ3VsYXIyLXRva2VuL25zLWFuZ3VsYXIyLXRva2VuLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0b2tlblNlcnZpY2U6IE5TQW5ndWxhcjJUb2tlblNlcnZpY2Upe1xuICAgIHRoaXMudG9rZW5TZXJ2aWNlLmluaXQoe1xuICAgICAgYXBpQmFzZTogJ2h0dHA6Ly8xMC4wLjMuMzozMDA0JyxcbiAgICAgIGdsb2JhbE9wdGlvbnM6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi92bmQudGFza21hbmFnZXIudjInXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNpZ25Jbih7XG4gICAgICBlbWFpbDogJ2Rlbmlsc29uQGdtYWlsLmNvbScsXG4gICAgICBwYXNzd29yZDogJzEyMzEyMzEyMydcbiAgICB9KS5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4gY29uc29sZS5kaXIocmVzKSxcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgKTtcbiAgfVxufVxuIl19