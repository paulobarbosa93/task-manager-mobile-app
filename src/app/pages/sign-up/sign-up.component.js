"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../shared/auth.service");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.setupForm();
        this.submitted = false;
        this.formErrors = null;
    }
    SignUpComponent.prototype.signUpUser = function () {
        var _this = this;
        this.submitted = true;
        this.authService.signUp(this.form.value)
            .subscribe(function () {
            alert('Conta criada com sucesso!');
            _this.router.navigate(['/home']);
            _this.formErrors = null;
        }, function (error) {
            _this.submitted = false;
            if (error.status === 422)
                _this.formErrors = error._body.errors.full_messages;
            else
                _this.formErrors = ['Não foi possível processar a sua solicitação. Por favor, tente mais tarde.'];
        });
    };
    SignUpComponent.prototype.passwordConfirmationValidator = function (form) {
        if (form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value)
            form.get('passwordConfirmation').setErrors(null);
        else
            form.get('passwordConfirmation').setErrors({ 'mismatch': true });
    };
    SignUpComponent.prototype.setupForm = function () {
        this.form = this.formBuilder.group({
            name: [null, [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            passwordConfirmation: [null, [forms_1.Validators.required]]
        }, { validator: this.passwordConfirmationValidator });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'sign-up',
            moduleId: module.id,
            templateUrl: './sign-up.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            forms_1.FormBuilder,
            router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
