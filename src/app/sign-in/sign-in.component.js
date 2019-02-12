"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("../shared/auth.service");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.setupForm();
        this.submitted = false;
        this.formErrors = null;
    }
    SignInComponent.prototype.signInUser = function () {
        var _this = this;
        this.submitted = true;
        this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
            .subscribe(function () {
            _this.router.navigate(['/home']);
            _this.formErrors = null;
        }, function (error) {
            _this.submitted = false;
            if (error.status === 401)
                _this.formErrors = error._body.errors;
            else
                _this.formErrors = ['Não foi possível processar a sua solicitação. Por favor, tente mais tarde.'];
        });
    };
    SignInComponent.prototype.setupForm = function () {
        this.form = this.formBuilder.group({
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            password: [null, [forms_1.Validators.required]]
        });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'sign-in',
            moduleId: module.id,
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            forms_1.FormBuilder,
            router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBaUY7QUFDakYsMENBQXlDO0FBRXpDLHVEQUFvRDtBQVFwRDtJQUtFLHlCQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLE1BQWM7UUFGZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0sb0NBQVUsR0FBakI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNuRixTQUFTLENBQ1I7WUFDRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHO2dCQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOztnQkFFckMsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLDRFQUE0RSxDQUFDLENBQUE7UUFDcEcsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBdkNVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBT3VCLDBCQUFXO1lBQ1gsbUJBQVc7WUFDaEIsZUFBTTtPQVJiLGVBQWUsQ0F3QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZ24taW4nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbi1pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ24taW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25JbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBmb3JtRXJyb3JzOiBBcnJheTxzdHJpbmc+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApe1xuICAgIHRoaXMuc2V0dXBGb3JtKCk7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1FcnJvcnMgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHNpZ25JblVzZXIoKXtcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduSW4odGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZSwgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9ycyA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpXG4gICAgICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSBlcnJvci5fYm9keS5lcnJvcnM7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3JzID0gWydOw6NvIGZvaSBwb3Nzw612ZWwgcHJvY2Vzc2FyIGEgc3VhIHNvbGljaXRhw6fDo28uIFBvciBmYXZvciwgdGVudGUgbWFpcyB0YXJkZS4nXVxuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHNldHVwRm9ybSgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgIHBhc3N3b3JkOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG59XG4iXX0=