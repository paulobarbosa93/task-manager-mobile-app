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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6QyxrREFBMkM7QUFDM0Msc0RBQW9EO0FBRXBELG9DQUFzQztBQUN0QyxnQ0FBK0I7QUFFL0IsdURBQXlEO0FBVXpEO0lBS0Usd0JBQTJCLFdBQXdCLEVBQVUsTUFBYyxFQUFVLElBQVU7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUh4RixVQUFLLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBSTVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLGlDQUFRLEdBQWY7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxrQ0FBUyxHQUFqQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7YUFDdEIsU0FBUyxDQUNWLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQVgsQ0FBVyxDQUFDLEVBQXRELENBQXNELEVBQy9ELFVBQUEsS0FBSyxJQUFJ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Q0FBMEMsQ0FBQzthQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osSUFBSSxFQUFFLENBQUM7UUFFVixXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxpQ0FBUSxHQUFoQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBOUZVLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBT3dDLDBCQUFXLEVBQWtCLGVBQU0sRUFBZ0IsV0FBSTtPQUxwRixjQUFjLENBK0YxQjtJQUFELHFCQUFDO0NBQUEsQUEvRkQsSUErRkM7QUEvRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vc2hhcmVkL3Rhc2subW9kZWwnO1xuaW1wb3J0IHsgVGFza1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC90YXNrLnNlcnZpY2UnO1xuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tICduYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YXNrcycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi90YXNrcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rhc2tzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRhc2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgdGFza3M6IEFycmF5PFRhc2s+O1xuICBwdWJsaWMgaWNvbnM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwdWJsaWMgbmV3VGFzazogVGFzaztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSl7XG4gICAgdGhpcy5uZXdUYXNrID0gbmV3IFRhc2sobnVsbCwgJycpO1xuICAgIHRoaXMuc2V0SWNvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRUYXNrcygpO1xuICAgIHRoaXMucGFnZS5vbignbmF2aWdhdGluZ1RvJywgKCkgPT4gdGhpcy5sb2FkVGFza3MoKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tTZXJ2aWNlLmdldEFsbCgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgdGFza3MgPT4gdGhpcy50YXNrcyA9IHRhc2tzID0gdGFza3Muc29ydCgoYSwgYikgPT4gYi5pZCAtIGEuaWQpLFxuICAgICAgZXJyb3IgPT4gYWxlcnQoJ09jb3JyZXUgdW0gZXJybyBubyBzZXJ2aWRvciwgdGVudGUgbWFpcyB0YXJkZS4nKVxuICAgICAgKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZVRhc2soKTogdm9pZCB7XG4gICAgdGhpcy5uZXdUYXNrLnRpdGxlID0gdGhpcy5uZXdUYXNrLnRpdGxlLnRyaW0oKTtcblxuICAgIGlmICghdGhpcy5uZXdUYXNrLnRpdGxlKSB7XG4gICAgICBhbGVydCgnQSB0YXJlZmEgZGV2ZSB0ZXIgdW0gdMOtdHVsby4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YXNrU2VydmljZS5jcmVhdGUodGhpcy5uZXdUYXNrKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAodGFzaykgPT4ge1xuICAgICAgICAgIHRoaXMudGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgICAgICB0aGlzLm5ld1Rhc2sgPSBuZXcgVGFzayhudWxsLCAnJyk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IsIHRlbnRlIG1haXMgdGFyZGUuJylcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFza0RvbmUodGFzazogVGFzayl7XG4gICAgdGFzay5kb25lID0gIXRhc2suZG9uZTtcblxuICAgIHRoaXMudGFza1NlcnZpY2UudXBkYXRlKHRhc2spXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICB0YXNrLmRvbmUgPSAhdGFzay5kb25lO1xuICAgICAgICAgIGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IsIHRlbnRlIG1haXMgdGFyZGUuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVRhc2sodGFzazogVGFzayk6IHZvaWQge1xuICAgIGRpYWxvZ3MuY29uZmlybShgRGVzZWphIHJlYWxtZW50ZSBleGx1aXIgYSB0YXJlZmEgXCIke3Rhc2sudGl0bGV9P1wiYClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLmRlbGV0ZSh0YXNrLmlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKCkgPT4gdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHQgPT4gdCAhPT0gdGFzayksXG4gICAgICAgICAgICAgICgpID0+IGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IuJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoZWNrQm94SWNvbih0YXNrOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmKHRhc2suZG9uZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvbnMuZ2V0KCdjaGVja2VkJyk7XG4gICAgfWVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvbnMuZ2V0KCd1bmNoZWNrZWQnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpOiB2b2lkIHtcbiAgICBsZXQgaW5kZXggPSBhcmdzLmluZGV4O1xuICAgIGxldCB0YXNrID0gdGhpcy50YXNrc1tpbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGFza3MnLCB0YXNrLmlkXSk7XG4gIH1cblxuICBwdWJsaWMgc2hhcmVUYXNrcygpIHtcbiAgICBsZXQgdGFza0xpc3RTdHJpbmcgPSB0aGlzLnRhc2tzXG4gICAgICAubWFwKHRhc2sgPT4gYCR7dGFzay5kb25lQ2hlY2tCb3hTdHJpbmd9ICR7dGFzay50aXRsZX1gKVxuICAgICAgLmpvaW4oXCIsIFxcblwiKVxuICAgICAgLnRyaW0oKTtcblxuICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dCh0YXNrTGlzdFN0cmluZyk7XG4gIH1cblxuICBwcml2YXRlIHNldEljb25zKCk6IHZvaWQge1xuICAgIHRoaXMuaWNvbnMuc2V0KCd0cmFzaCcsIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDE0KSk7XG4gICAgdGhpcy5pY29ucy5zZXQoJ2FkZCcsIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDU1KSk7XG4gICAgdGhpcy5pY29ucy5zZXQoJ2NoZWNrZWQnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjE0YSkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCd1bmNoZWNrZWQnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA5NikpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdzaGFyZScsIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDQ1KSk7XG4gIH1cbn1cbiJdfQ==