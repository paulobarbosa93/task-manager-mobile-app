"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var token_service_1 = require("../../../shared/token.service");
var task_model_1 = require("./task.model");
var TaskService = /** @class */ (function () {
    function TaskService(tokenHttp) {
        this.tokenHttp = tokenHttp;
        this.tasksUrl = 'tasks';
    }
    TaskService.prototype.getAll = function () {
        var _this = this;
        var url = this.tasksUrl + "?q[s]=updated_at+DESC";
        return this.tokenHttp.get(url)
            .catch(this.handlerErrors)
            .map(function (response) { return _this.responseToTasks(response); });
    };
    TaskService.prototype.getImportants = function () {
        var _this = this;
        var url = this.tasksUrl + "?q[s]=deadline+ASC";
        return this.tokenHttp.get(url)
            .catch(this.handlerErrors)
            .map(function (response) { return _this.responseToTasks(response); });
    };
    TaskService.prototype.getById = function (id) {
        var _this = this;
        var url = this.tasksUrl + "/" + id;
        return this.tokenHttp.get(url)
            .catch(this.handlerErrors)
            .map(function (response) { return _this.responseToTask(response); });
    };
    TaskService.prototype.create = function (task) {
        var _this = this;
        var body = JSON.stringify(task);
        return this.tokenHttp.post(this.tasksUrl, body)
            .catch(this.handlerErrors)
            .map(function (response) { return _this.responseToTask(response); });
    };
    TaskService.prototype.update = function (task) {
        var url = this.tasksUrl + "/" + task.id;
        var body = JSON.stringify(task);
        return this.tokenHttp.put(url, body)
            .catch(this.handlerErrors)
            .map(function () { return task; });
    };
    TaskService.prototype.delete = function (id) {
        var url = this.tasksUrl + "/" + id;
        return this.tokenHttp.delete(url)
            .catch(this.handlerErrors)
            .map(function () { return null; });
    };
    TaskService.prototype.searchByTitle = function (term) {
        var _this = this;
        var url = this.tasksUrl + "?q[title_cont]=" + term;
        return this.tokenHttp.get(url)
            .catch(this.handlerErrors)
            .map(function (response) { return _this.responseToTasks(response); });
    };
    TaskService.prototype.handlerErrors = function (error) {
        console.log('Salvando o erro em um arquivo de log =>', error);
        return Observable_1.Observable.throw(error);
    };
    TaskService.prototype.responseToTasks = function (response) {
        var collection = response.json().data;
        var tasks = [];
        collection.forEach(function (item) {
            var task = new task_model_1.Task(item.id, item.attributes.title, item.attributes.description, item.attributes.done, item.attributes['deadline-to-br']);
            tasks.push(task);
        });
        return tasks;
    };
    TaskService.prototype.responseToTask = function (response) {
        return new task_model_1.Task(response.json().data.id, response.json().data.attributes.title, response.json().data.attributes.description, response.json().data.attributes.done, response.json().data.attributes['deadline-to-br']);
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [token_service_1.TokenService])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
