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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyx3Q0FBaUY7QUFDakYsMENBQXlDO0FBRXpDLDBEQUF3RDtBQVF4RDtJQUtFLHlCQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLE1BQWM7UUFGZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0sb0NBQVUsR0FBakI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFhLENBQUM7YUFDN0MsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV2QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7O2dCQUVuRCxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsNEVBQTRFLENBQUMsQ0FBQTtRQUNwRyxDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFTSx1REFBNkIsR0FBcEMsVUFBcUMsSUFBZTtRQUNsRCxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxLQUFLO1lBQ3BHLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRWpELElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkYsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLG9CQUFvQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRCxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQWxEVSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQU91QiwwQkFBVztZQUNYLG1CQUFXO1lBQ2hCLGVBQU07T0FSYixlQUFlLENBbUQzQjtJQUFELHNCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZ24tdXAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbi11cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IHtcbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cDtcbiAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbjtcbiAgcHVibGljIGZvcm1FcnJvcnM6IEFycmF5PHN0cmluZz47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge1xuICAgIHRoaXMuc2V0dXBGb3JtKCk7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1FcnJvcnMgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHNpZ25VcFVzZXIoKSB7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAodGhpcy5mb3JtLnZhbHVlIGFzIFVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoJ0NvbnRhIGNyaWFkYSBjb20gc3VjZXNzbyEnKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9ycyA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MjIpXG4gICAgICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSBlcnJvci5fYm9keS5lcnJvcnMuZnVsbF9tZXNzYWdlcztcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSBbJ07Do28gZm9pIHBvc3PDrXZlbCBwcm9jZXNzYXIgYSBzdWEgc29saWNpdGHDp8Ojby4gUG9yIGZhdm9yLCB0ZW50ZSBtYWlzIHRhcmRlLiddXG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgcGFzc3dvcmRDb25maXJtYXRpb25WYWxpZGF0b3IoZm9ybTogRm9ybUdyb3VwKXtcbiAgICBpZihmb3JtLmdldCgncGFzc3dvcmQnKS5kaXJ0eSAmJiBmb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSA9PT0gZm9ybS5nZXQoJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJykudmFsdWUpXG4gICAgICBmb3JtLmdldCgncGFzc3dvcmRDb25maXJtYXRpb24nKS5zZXRFcnJvcnMobnVsbCk7XG4gICAgZWxzZVxuICAgICAgZm9ybS5nZXQoJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJykuc2V0RXJyb3JzKHsnbWlzbWF0Y2gnOiB0cnVlfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXBGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTAwKV1dLFxuICAgICAgZW1haWw6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgcGFzc3dvcmQ6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCldXSxcbiAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0sIHsgdmFsaWRhdG9yOiB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uVmFsaWRhdG9yIH0pO1xuICB9XG59XG4iXX0=