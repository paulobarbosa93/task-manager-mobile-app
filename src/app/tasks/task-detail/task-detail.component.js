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
        var modalOptions = {
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(datetime_picker_modal_component_1.DateTimePickerModalComponent, modalOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUF3RDtBQUN4RCx3Q0FBZ0Y7QUFFaEYsa0VBQTJGO0FBQzNGLCtHQUEwRztBQUUxRyxtREFBMkM7QUFDM0MsdURBQW9EO0FBUXBEO0lBSUUsNkJBQ1UsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFKdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRS9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxzQ0FBUSxHQUFmO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUN0RSxTQUFTLENBQ1YsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUMxQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxFQUF2RCxDQUF1RCxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSx3Q0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVMsQ0FDVixjQUFNLE9BQUEsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLEVBQXZDLENBQXVDLEVBQzdDLGNBQU0sT0FBQSxLQUFLLENBQUMsMERBQTBELENBQUMsRUFBakUsQ0FBaUUsQ0FDdEUsQ0FBQTtJQUNMLENBQUM7SUFFTSxxREFBdUIsR0FBOUI7UUFDRSxJQUFJLFlBQVksR0FBdUI7WUFDckMsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLDhEQUE0QixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUF2RFUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM1QyxDQUFDO3lDQU91QiwwQkFBVztZQUNqQix1QkFBYztZQUNSLG1CQUFXO1lBQ1YsaUNBQWtCO1lBQ3pCLHVCQUFnQjtPQVR0QixtQkFBbUIsQ0F3RC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RhdGV0aW1lLXBpY2tlci1tb2RhbC9kYXRldGltZS1waWNrZXItbW9kYWwuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vc2hhcmVkL3Rhc2subW9kZWwnXG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC90YXNrLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3Rhc2stZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRhc2tEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwO1xuICBwdWJsaWMgdGFzazogVGFzaztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NSldXSxcbiAgICAgIGRlYWRsaW5lOiBbbnVsbF0sXG4gICAgICBkb25lOiBbbnVsbF0sXG4gICAgICBkZXNjcmlwdGlvbjogW251bGxdXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YXNrID0gbmV3IFRhc2sobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMudGFza1NlcnZpY2UuZ2V0QnlJZCgrcGFyYW1zWydpZCddKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICB0YXNrID0+IHRoaXMuc2V0VGFzayh0YXNrKSxcbiAgICAgIGVycm9yID0+IGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IsIHRlbnRlIG1haXMgdGFyZGUuJylcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2V0VGFzayh0YXNrOiBUYXNrKTogdm9pZCB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0YXNrKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVUYXNrKCk6IHZvaWQge1xuICAgIHRoaXMudGFzay50aXRsZSA9IHRoaXMuZm9ybS5nZXQoJ3RpdGxlJykudmFsdWU7XG4gICAgdGhpcy50YXNrLmRlYWRsaW5lID0gdGhpcy5mb3JtLmdldCgnZGVhZGxpbmUnKS52YWx1ZTtcbiAgICB0aGlzLnRhc2suZG9uZSA9IHRoaXMuZm9ybS5nZXQoJ2RvbmUnKS52YWx1ZTtcbiAgICB0aGlzLnRhc2suZGVzY3JpcHRpb24gPSB0aGlzLmZvcm0uZ2V0KCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuXG4gICAgdGhpcy50YXNrU2VydmljZS51cGRhdGUodGhpcy50YXNrKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICgpID0+IGFsZXJ0KCdUYXJlZmEgYXR1YWxpemFkYSBjb20gc3VjZXNzby4nKSxcbiAgICAgICgpID0+IGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IsIHRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicpXG4gICAgICApXG4gIH1cblxuICBwdWJsaWMgc2hvd0RhdGV0aW1lUGlja2VyTW9kYWwoKTogdm9pZCB7XG4gICAgbGV0IG1vZGFsT3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgfTtcblxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXRlVGltZVBpY2tlck1vZGFsQ29tcG9uZW50LCBtb2RhbE9wdGlvbnMpO1xuICB9XG59XG4iXX0=