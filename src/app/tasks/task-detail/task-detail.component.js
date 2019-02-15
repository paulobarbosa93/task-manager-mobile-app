"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var task_model_1 = require("../shared/task.model");
var task_service_1 = require("../shared/task.service");
var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(taskService, route, formBuilder) {
        this.taskService = taskService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            title: [null, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(255)]],
            deadline: [null],
            done: [null],
            description: [null]
        });
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = new task_model_1.Task(null, null);
        this.route.params
            .switchMap(function (params) { return _this.taskService.getById(+params['id']); })
            .subscribe(function (task) { return _this.setTask(task); }, function (error) { return alert('Ocorreu um erro no servidor, tente mais tarde.'); });
    };
    TaskDetailComponent.prototype.setTask = function (task) {
        this.task = task;
        this.form.patchValue(task);
    };
    TaskDetailComponent.prototype.updateTask = function () {
        this.task.title = this.form.get('title').value;
        this.task.deadline = this.form.get('deadline').value;
        this.task.done = this.form.get('done').value;
        this.task.description = this.form.get('description').value;
        this.taskService.update(this.task)
            .subscribe(function () { return alert('Tarefa atualizada com sucesso.'); }, function () { return alert('Ocorreu um erro no servidor, tente novamente mais tarde.'); });
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-detail',
            templateUrl: './task-detail.component.html'
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBDQUF3RDtBQUN4RCx3Q0FBZ0Y7QUFFaEYsbURBQTJDO0FBQzNDLHVEQUFvRDtBQVFwRDtJQUlFLDZCQUNVLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLFdBQXdCO1FBRnhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUN0RSxTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUMxQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxFQUF2RCxDQUF1RCxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSx3Q0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FDVixjQUFNLE9BQUEsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQXZDLENBQXVDLEVBQzdDLGNBQU0sT0FBQSxLQUFLLENBQUMsMERBQTBELENBQUMsRUFBakUsQ0FBaUUsQ0FDdEUsQ0FBQTtJQUNMLENBQUM7SUE1Q1UsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM1QyxDQUFDO3lDQU91QiwwQkFBVztZQUNqQix1QkFBYztZQUNSLG1CQUFXO09BUHZCLG1CQUFtQixDQTZDL0I7SUFBRCwwQkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vc2hhcmVkL3Rhc2subW9kZWwnXG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC90YXNrLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3Rhc2stZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRhc2tEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgdGFzazogVGFzaztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcbiAgKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU1KV1dLFxuICAgICAgZGVhZGxpbmU6IFtudWxsXSxcbiAgICAgIGRvbmU6IFtudWxsXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbbnVsbF1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRhc2sgPSBuZXcgVGFzayhudWxsLCBudWxsKTtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy50YXNrU2VydmljZS5nZXRCeUlkKCtwYXJhbXNbJ2lkJ10pKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIHRhc2sgPT4gdGhpcy5zZXRUYXNrKHRhc2spLFxuICAgICAgZXJyb3IgPT4gYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvciwgdGVudGUgbWFpcyB0YXJkZS4nKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRUYXNrKHRhc2s6IFRhc2spOiB2b2lkIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRhc2spO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRhc2soKTogdm9pZCB7XG4gICAgdGhpcy50YXNrLnRpdGxlID0gdGhpcy5mb3JtLmdldCgndGl0bGUnKS52YWx1ZTtcbiAgICB0aGlzLnRhc2suZGVhZGxpbmUgPSB0aGlzLmZvcm0uZ2V0KCdkZWFkbGluZScpLnZhbHVlO1xuICAgIHRoaXMudGFzay5kb25lID0gdGhpcy5mb3JtLmdldCgnZG9uZScpLnZhbHVlO1xuICAgIHRoaXMudGFzay5kZXNjcmlwdGlvbiA9IHRoaXMuZm9ybS5nZXQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhc2spXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gYWxlcnQoJ1RhcmVmYSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvLicpLFxuICAgICAgKCkgPT4gYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvciwgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJylcbiAgICAgIClcbiAgfVxufVxuIl19