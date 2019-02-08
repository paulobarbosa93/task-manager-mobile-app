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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0dBQThGO0FBTzlGO0lBQ0Usc0JBQTJCLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGFBQWEsRUFBRTtnQkFDYixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbEMsUUFBUSxFQUFFLGdDQUFnQztpQkFDM0M7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFYVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUV5QyxrREFBc0I7T0FEcEQsWUFBWSxDQVl4QjtJQUFELG1CQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTlNBbmd1bGFyMlRva2VuU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9ucy1hbmd1bGFyMi10b2tlbi9ucy1hbmd1bGFyMi10b2tlbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBOU0FuZ3VsYXIyVG9rZW5TZXJ2aWNlKXtcbiAgICB0aGlzLnRva2VuU2VydmljZS5pbml0KHtcbiAgICAgIGFwaUJhc2U6ICdodHRwOi8vMTAuMC4zLjM6MzAwNCcsXG4gICAgICBnbG9iYWxPcHRpb25zOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLnRhc2ttYW5hZ2VyLnYyJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==