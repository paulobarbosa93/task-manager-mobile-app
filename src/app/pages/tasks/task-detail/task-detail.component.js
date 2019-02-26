"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var datetime_picker_modal_component_1 = require("../../datetime-picker-modal/datetime-picker-modal.component");
var task_model_1 = require("../shared/task.model");
var task_service_1 = require("../shared/task.service");
var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(taskService, route, formBuilder, modalService, vcRef) {
        this.taskService = taskService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.vcRef = vcRef;
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
    TaskDetailComponent.prototype.showDatetimePickerModal = function () {
        var _this = this;
        var modalOptions = {
            fullscreen: false,
            viewContainerRef: this.vcRef,
            context: {
                preSelectedDateTime: this.getFormDeadlineToDate()
            }
        };
        this.modalService.showModal(datetime_picker_modal_component_1.DateTimePickerModalComponent, modalOptions)
            .then(function (newDeadine) { return _this.setNewDeadline(newDeadine); });
    };
    TaskDetailComponent.prototype.getFormDeadlineToDate = function () {
        var deadline = this.form.get('deadline').value;
        if (deadline) {
            var _a = deadline.split(' '), date = _a[0], time = _a[1];
            var _b = date.split('/'), day = _b[0], month = _b[1], year = _b[2];
            var _c = time.split(':'), hours = _c[0], minutes = _c[1];
            return new Date(year, month - 1, day, hours, minutes);
        }
    };
    TaskDetailComponent.prototype.setNewDeadline = function (newDeadline) {
        if (newDeadline) {
            var formatedDeadline = newDeadline.getDate() + "/" + (newDeadline.getMonth() + 1) + "/" + newDeadline.getFullYear();
            formatedDeadline += " " + newDeadline.getHours() + ":" + newDeadline.getMinutes();
            this.form.patchValue({ deadline: formatedDeadline });
        }
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-detail',
            templateUrl: './task-detail.component.html'
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUF3RDtBQUN4RCx3Q0FBZ0Y7QUFFaEYsa0VBQTJGO0FBQzNGLCtHQUEwRztBQUUxRyxtREFBMkM7QUFDM0MsdURBQW9EO0FBUXBEO0lBSUUsNkJBQ1UsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFKdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRS9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUN0RSxTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUMxQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxFQUF2RCxDQUF1RCxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSx3Q0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FDVixjQUFNLE9BQUEsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQXZDLENBQXVDLEVBQzdDLGNBQU0sT0FBQSxLQUFLLENBQUMsMERBQTBELENBQUMsRUFBakUsQ0FBaUUsQ0FDdEUsQ0FBQTtJQUNMLENBQUM7SUFFTSxxREFBdUIsR0FBOUI7UUFBQSxpQkFXQztRQVZDLElBQUksWUFBWSxHQUF1QjtZQUNyQyxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFO2FBQ2xEO1NBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLDhEQUE0QixFQUFFLFlBQVksQ0FBQzthQUNwRSxJQUFJLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLG1EQUFxQixHQUE1QjtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUvQyxJQUFHLFFBQVEsRUFBQztZQUNOLElBQUEsd0JBQWtDLEVBQWpDLFlBQUksRUFBRSxZQUEyQixDQUFDO1lBQ25DLElBQUEsb0JBQW9DLEVBQW5DLFdBQUcsRUFBRSxhQUFLLEVBQUUsWUFBdUIsQ0FBQztZQUNyQyxJQUFBLG9CQUFrQyxFQUFqQyxhQUFLLEVBQUUsZUFBMEIsQ0FBQztZQUV2QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRU0sNENBQWMsR0FBckIsVUFBc0IsV0FBaUI7UUFDckMsSUFBRyxXQUFXLEVBQUM7WUFDYixJQUFJLGdCQUFnQixHQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUksQ0FBQztZQUM3RyxnQkFBZ0IsSUFBSSxNQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsU0FBSSxXQUFXLENBQUMsVUFBVSxFQUFJLENBQUM7WUFFN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQWhGVSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1NBQzVDLENBQUM7eUNBT3VCLDBCQUFXO1lBQ2pCLHVCQUFjO1lBQ1IsbUJBQVc7WUFDVixpQ0FBa0I7WUFDekIsdUJBQWdCO09BVHRCLG1CQUFtQixDQWlGL0I7SUFBRCwwQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGF0ZXRpbWUtcGlja2VyLW1vZGFsL2RhdGV0aW1lLXBpY2tlci1tb2RhbC5jb21wb25lbnQnXG5cbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9zaGFyZWQvdGFzay5tb2RlbCdcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Rhc2suc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGFzay1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFzay1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVGFza0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyB0YXNrOiBUYXNrO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB0aXRsZTogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU1KV1dLFxuICAgICAgZGVhZGxpbmU6IFtudWxsXSxcbiAgICAgIGRvbmU6IFtudWxsXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbbnVsbF1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRhc2sgPSBuZXcgVGFzayhudWxsLCBudWxsKTtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy50YXNrU2VydmljZS5nZXRCeUlkKCtwYXJhbXNbJ2lkJ10pKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIHRhc2sgPT4gdGhpcy5zZXRUYXNrKHRhc2spLFxuICAgICAgZXJyb3IgPT4gYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvciwgdGVudGUgbWFpcyB0YXJkZS4nKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRUYXNrKHRhc2s6IFRhc2spOiB2b2lkIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRhc2spO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRhc2soKTogdm9pZCB7XG4gICAgdGhpcy50YXNrLnRpdGxlID0gdGhpcy5mb3JtLmdldCgndGl0bGUnKS52YWx1ZTtcbiAgICB0aGlzLnRhc2suZGVhZGxpbmUgPSB0aGlzLmZvcm0uZ2V0KCdkZWFkbGluZScpLnZhbHVlO1xuICAgIHRoaXMudGFzay5kb25lID0gdGhpcy5mb3JtLmdldCgnZG9uZScpLnZhbHVlO1xuICAgIHRoaXMudGFzay5kZXNjcmlwdGlvbiA9IHRoaXMuZm9ybS5nZXQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZSh0aGlzLnRhc2spXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gYWxlcnQoJ1RhcmVmYSBhdHVhbGl6YWRhIGNvbSBzdWNlc3NvLicpLFxuICAgICAgKCkgPT4gYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvciwgdGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJylcbiAgICAgIClcbiAgfVxuXG4gIHB1YmxpYyBzaG93RGF0ZXRpbWVQaWNrZXJNb2RhbCgpOiB2b2lkIHtcbiAgICBsZXQgbW9kYWxPcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHByZVNlbGVjdGVkRGF0ZVRpbWU6IHRoaXMuZ2V0Rm9ybURlYWRsaW5lVG9EYXRlKClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERhdGVUaW1lUGlja2VyTW9kYWxDb21wb25lbnQsIG1vZGFsT3B0aW9ucylcbiAgICAgIC50aGVuKG5ld0RlYWRpbmUgPT4gdGhpcy5zZXROZXdEZWFkbGluZShuZXdEZWFkaW5lKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybURlYWRsaW5lVG9EYXRlKCl7XG4gICAgbGV0IGRlYWRsaW5lID0gdGhpcy5mb3JtLmdldCgnZGVhZGxpbmUnKS52YWx1ZTtcblxuICAgIGlmKGRlYWRsaW5lKXtcbiAgICAgIGxldCBbZGF0ZSwgdGltZV0gPSBkZWFkbGluZS5zcGxpdCgnICcpO1xuICAgICAgbGV0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGRhdGUuc3BsaXQoJy8nKTtcbiAgICAgIGxldCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZS5zcGxpdCgnOicpO1xuXG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIGhvdXJzLCBtaW51dGVzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0TmV3RGVhZGxpbmUobmV3RGVhZGxpbmU6IERhdGUpe1xuICAgIGlmKG5ld0RlYWRsaW5lKXtcbiAgICAgIGxldCBmb3JtYXRlZERlYWRsaW5lID0gYCR7bmV3RGVhZGxpbmUuZ2V0RGF0ZSgpfS8ke25ld0RlYWRsaW5lLmdldE1vbnRoKCkgKyAxfS8ke25ld0RlYWRsaW5lLmdldEZ1bGxZZWFyKCl9YDtcbiAgICAgIGZvcm1hdGVkRGVhZGxpbmUgKz0gYCAke25ld0RlYWRsaW5lLmdldEhvdXJzKCl9OiR7bmV3RGVhZGxpbmUuZ2V0TWludXRlcygpfWA7XG5cbiAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtkZWFkbGluZTogZm9ybWF0ZWREZWFkbGluZX0pO1xuICAgIH1cbiAgfVxufVxuIl19