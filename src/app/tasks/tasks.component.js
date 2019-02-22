"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_model_1 = require("./shared/task.model");
var task_service_1 = require("./shared/task.service");
var page_1 = require("ui/page");
var dialogs = require("ui/dialogs");
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
        __metadata("design:paramtypes", [task_service_1.TaskService, router_1.Router, page_1.Page])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6QyxrREFBMkM7QUFDM0Msc0RBQW9EO0FBQ3BELGdDQUErQjtBQUUvQixvQ0FBc0M7QUFTdEM7SUFLRSx3QkFBMkIsV0FBd0IsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSHhGLFVBQUssR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFJNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLGtDQUFTLEdBQWpCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTthQUN0QixTQUFTLENBQ1YsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBWCxDQUFXLENBQUMsRUFBdEQsQ0FBc0QsRUFDL0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENB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QUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXBGVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQU93QywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLFdBQUk7T0FMcEYsY0FBYyxDQXFGMUI7SUFBRCxxQkFBQztDQUFBLEFBckZELElBcUZDO0FBckZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3NoYXJlZC90YXNrLm1vZGVsJztcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvdGFzay5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFza3MnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFza3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YXNrcy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYXNrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIHRhc2tzOiBBcnJheTxUYXNrPjtcbiAgcHVibGljIGljb25zOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHVibGljIG5ld1Rhc2s6IFRhc2s7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2Upe1xuICAgIHRoaXMubmV3VGFzayA9IG5ldyBUYXNrKG51bGwsICcnKTtcbiAgICB0aGlzLnNldEljb25zKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkVGFza3MoKTtcbiAgICB0aGlzLnBhZ2Uub24oJ25hdmlnYXRpbmdUbycsICgpID0+IHRoaXMubG9hZFRhc2tzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGFza3MoKSB7XG4gICAgdGhpcy50YXNrU2VydmljZS5nZXRBbGwoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIHRhc2tzID0+IHRoaXMudGFza3MgPSB0YXNrcyA9IHRhc2tzLnNvcnQoKGEsIGIpID0+IGIuaWQgLSBhLmlkKSxcbiAgICAgIGVycm9yID0+IGFsZXJ0KCdPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IsIHRlbnRlIG1haXMgdGFyZGUuJylcbiAgICAgIClcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVUYXNrKCk6IHZvaWQge1xuICAgIHRoaXMubmV3VGFzay50aXRsZSA9IHRoaXMubmV3VGFzay50aXRsZS50cmltKCk7XG5cbiAgICBpZiAoIXRoaXMubmV3VGFzay50aXRsZSkge1xuICAgICAgYWxlcnQoJ0EgdGFyZWZhIGRldmUgdGVyIHVtIHTDrXR1bG8uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFza1NlcnZpY2UuY3JlYXRlKHRoaXMubmV3VGFzaylcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHRhc2spID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgdGhpcy5uZXdUYXNrID0gbmV3IFRhc2sobnVsbCwgJycpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiBhbGVydCgnT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLCB0ZW50ZSBtYWlzIHRhcmRlLicpXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRhc2tEb25lKHRhc2s6IFRhc2spe1xuICAgIHRhc2suZG9uZSA9ICF0YXNrLmRvbmU7XG5cbiAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZSh0YXNrKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgdGFzay5kb25lID0gIXRhc2suZG9uZTtcbiAgICAgICAgICBhbGVydCgnT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLCB0ZW50ZSBtYWlzIHRhcmRlLicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVUYXNrKHRhc2s6IFRhc2spOiB2b2lkIHtcbiAgICBkaWFsb2dzLmNvbmZpcm0oYERlc2VqYSByZWFsbWVudGUgZXhsdWlyIGEgdGFyZWZhIFwiJHt0YXNrLnRpdGxlfT9cImApXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy50YXNrU2VydmljZS5kZWxldGUodGFzay5pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICgpID0+IHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih0ID0+IHQgIT09IHRhc2spLFxuICAgICAgICAgICAgICAoKSA9PiBhbGVydCgnT2NvcnJldSB1bSBlcnJvIG5vIHNlcnZpZG9yLicpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0JveEljb24odGFzazogYW55KTogc3RyaW5nIHtcbiAgICBpZih0YXNrLmRvbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmdldCgnY2hlY2tlZCcpO1xuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmdldCgndW5jaGVja2VkJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKTogdm9pZCB7XG4gICAgbGV0IGluZGV4ID0gYXJncy5pbmRleDtcbiAgICBsZXQgdGFzayA9IHRoaXMudGFza3NbaW5kZXhdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Rhc2tzJywgdGFzay5pZF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJY29ucygpOiB2b2lkIHtcbiAgICB0aGlzLmljb25zLnNldCgndHJhc2gnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjAxNCkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdhZGQnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA1NSkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdjaGVja2VkJywgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxNGEpKTtcbiAgICB0aGlzLmljb25zLnNldCgndW5jaGVja2VkJywgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwOTYpKTtcbiAgfVxufVxuIl19