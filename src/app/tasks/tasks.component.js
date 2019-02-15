"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_model_1 = require("./shared/task.model");
var task_service_1 = require("./shared/task.service");
var dialogs = require("ui/dialogs");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.icons = new Map();
        this.newTask = new task_model_1.Task(null, '');
        this.setIcons();
    }
    TasksComponent.prototype.ngOnInit = function () {
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
    TasksComponent.prototype.setIcons = function () {
        this.icons.set('trash', String.fromCharCode(0xf014));
        this.icons.set('add', String.fromCharCode(0xf055));
        this.icons.set('checked', String.fromCharCode(0xf14a));
        this.icons.set('unchecked', String.fromCharCode(0xf096));
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            moduleId: module.id,
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUEyQztBQUMzQyxzREFBb0Q7QUFDcEQsb0NBQXNDO0FBU3RDO0lBS0Usd0JBQTJCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDVDLFVBQUssR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFJNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7YUFDdEIsU0FBUyxDQUNWLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQVgsQ0FBVyxDQUFDLEVBQXRELENBQXNELEVBQy9ELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLEVBQXZELENBQXVELENBQy9ELENBQUE7SUFDTCxDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN2QixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdB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bnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9zaGFyZWQvdGFzay5tb2RlbCc7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Rhc2suc2VydmljZSc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YXNrcycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi90YXNrcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rhc2tzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRhc2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgdGFza3M6IEFycmF5PFRhc2s+O1xuICBwdWJsaWMgaWNvbnM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwdWJsaWMgbmV3VGFzazogVGFzaztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2Upe1xuICAgIHRoaXMubmV3VGFzayA9IG5ldyBUYXNrKG51bGwsICcnKTtcbiAgICB0aGlzLnNldEljb25zKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50YXNrU2VydmljZS5nZXRBbGwoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIHRhc2tzID0+IHRoaXMudGFza3MgPSB0YXNrcyA9IHRhc2tzLnNvcnQoKGEsIGIpID0+IGIuaWQgLSBhLmlkKSxcbiAgICAgIGVycm9yID0+IGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IsIHRlbnRlIG1haXMgdGFyZGUuJylcbiAgICAgIClcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUYXNrKCk6IHZvaWQge1xuICAgIHRoaXMubmV3VGFzay50aXRsZSA9IHRoaXMubmV3VGFzay50aXRsZS50cmltKCk7XG5cbiAgICBpZiAoIXRoaXMubmV3VGFzay50aXRsZSkge1xuICAgICAgYWxlcnQoJ0EgdGFyZWZhIGRldmUgdGVyIHVtIHTDrXR1bG8uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFza1NlcnZpY2UuY3JlYXRlKHRoaXMubmV3VGFzaylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHRhc2spID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgdGhpcy5uZXdUYXNrID0gbmV3IFRhc2sobnVsbCwgJycpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBhbGVydCgnT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLCB0ZW50ZSBtYWlzIHRhcmRlLicpXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRhc2tEb25lKHRhc2s6IFRhc2spe1xuICAgIHRhc2suZG9uZSA9ICF0YXNrLmRvbmU7XG5cbiAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZSh0YXNrKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgdGFzay5kb25lID0gIXRhc2suZG9uZTtcbiAgICAgICAgICBhbGVydCgnT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLCB0ZW50ZSBtYWlzIHRhcmRlLicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVUYXNrKHRhc2s6IFRhc2spOiB2b2lkIHtcbiAgICBkaWFsb2dzLmNvbmZpcm0oYERlc2VqYSByZWFsbWVudGUgZXhsdWlyIGEgdGFyZWZhIFwiJHt0YXNrLnRpdGxlfT9cImApXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy50YXNrU2VydmljZS5kZWxldGUodGFzay5pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICgpID0+IHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0ID0+IHQgIT09IHRhc2spLFxuICAgICAgICAgICAgICAoKSA9PiBhbGVydCgnT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLicpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0JveEljb24odGFzazogYW55KXtcbiAgICBpZih0YXNrLmRvbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmdldCgnY2hlY2tlZCcpO1xuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmdldCgndW5jaGVja2VkJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRJY29ucygpOiB2b2lkIHtcbiAgICB0aGlzLmljb25zLnNldCgndHJhc2gnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjAxNCkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdhZGQnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA1NSkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdjaGVja2VkJywgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxNGEpKTtcbiAgICB0aGlzLmljb25zLnNldCgndW5jaGVja2VkJywgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwOTYpKTtcbiAgfVxufVxuIl19