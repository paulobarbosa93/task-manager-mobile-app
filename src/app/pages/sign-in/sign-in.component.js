"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../shared/auth.service");
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
