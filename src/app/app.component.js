"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var token_service_1 = require("./shared/token.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(tokenService) {
        this.tokenService = tokenService;
        this.tokenService.init({
            apiBase: 'https://taskmanager-api-paulo.herokuapp.com',
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.taskmanager.v2'
                }
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [token_service_1.TokenService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0RBQXNEO0FBT3REO0lBQ0Usc0JBQTJCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSw2Q0FBNkM7WUFDdEQsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxRQUFRLEVBQUUsZ0NBQWdDO2lCQUMzQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVhVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBRXlDLDRCQUFZO09BRDFDLFlBQVksQ0FZeEI7SUFBRCxtQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC90b2tlbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBUb2tlblNlcnZpY2Upe1xuICAgIHRoaXMudG9rZW5TZXJ2aWNlLmluaXQoe1xuICAgICAgYXBpQmFzZTogJ2h0dHBzOi8vdGFza21hbmFnZXItYXBpLXBhdWxvLmhlcm9rdWFwcC5jb20nLFxuICAgICAgZ2xvYmFsT3B0aW9uczoge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3ZuZC50YXNrbWFuYWdlci52MidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=