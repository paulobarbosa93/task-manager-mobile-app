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
