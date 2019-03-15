"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_model_1 = require("./shared/task.model");
var task_service_1 = require("./shared/task.service");
var dialogs = require("ui/dialogs");
var page_1 = require("ui/page");
var SocialShare = require("nativescript-social-share");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService, router, page) {
        this.taskService = taskService;
        this.router = router;
        this.page = page;
        this.icons = new Map();
        this.newTask = new task_model_1.Task(null, '');
        this.setIcons();
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTasks();
        this.page.on('navigatingTo', function () { return _this.loadTasks(); });
    };
    TasksComponent.prototype.loadTasks = function () {
        var _this = this;
        this.taskService.getAll()
            .subscribe(function (tasks) { return _this.tasks = tasks = tasks.sort(function (a, b) { return b.id - a.id; }); }, function (error) { return alert('Ocorreu um erro no servidor, tente mais tarde.'); });
    };
    TasksComponent.prototype.createTask = function () {
        var _this = this;
        this.newTask.title = this.newTask.title.trim();
        if (!this.newTask.title) {
            alert('A tarefa deve ter um título.');
        }
        else {
            this.taskService.create(this.newTask)
                .subscribe(function (task) {
                _this.tasks.unshift(task);
                _this.newTask = new task_model_1.Task(null, '');
            }, function () { return alert('Ocorreu um erro no servidor, tente mais tarde.'); });
        }
    };
    TasksComponent.prototype.taskDone = function (task) {
        task.done = !task.done;
        this.taskService.update(task)
            .subscribe({
            error: function () {
                task.done = !task.done;
                alert('Ocorreu um erro no servidor, tente mais tarde.');
            }
        });
    };
    TasksComponent.prototype.deleteTask = function (task) {
        var _this = this;
        dialogs.confirm("Deseja realmente exluir a tarefa \"" + task.title + "?\"")
            .then(function (result) {
            if (result) {
                _this.taskService.delete(task.id)
                    .subscribe(function () { return _this.tasks = _this.tasks.filter(function (t) { return t !== task; }); }, function () { return alert('Ocorreu um erro no servidor.'); });
            }
        });
    };
    TasksComponent.prototype.checkBoxIcon = function (task) {
        if (task.done) {
            return this.icons.get('checked');
        }
        else {
            return this.icons.get('unchecked');
        }
    };
    TasksComponent.prototype.onItemTap = function (args) {
        var index = args.index;
        var task = this.tasks[index];
        this.router.navigate(['/tasks', task.id]);
    };
    TasksComponent.prototype.shareTasks = function () {
        var taskListString = this.tasks
            .map(function (task) { return task.doneCheckBoxString + " " + task.title; })
            .join(", \n")
            .trim();
        SocialShare.shareText(taskListString);
    };
    TasksComponent.prototype.setIcons = function () {
        this.icons.set('trash', String.fromCharCode(0xf014));
        this.icons.set('add', String.fromCharCode(0xf055));
        this.icons.set('checked', String.fromCharCode(0xf14a));
        this.icons.set('unchecked', String.fromCharCode(0xf096));
        this.icons.set('share', String.fromCharCode(0xf045));
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            moduleId: module.id,
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService, router_1.Router, page_1.Page])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
