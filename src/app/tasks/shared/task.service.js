"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var token_service_1 = require("../../shared/token.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDhDQUE2QztBQUU3Qyw0REFBMEQ7QUFDMUQsMkNBQW9DO0FBSXBDO0lBR0UscUJBQTJCLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFGM0MsYUFBUSxHQUFHLE9BQU8sQ0FBQztJQUU0QixDQUFDO0lBRWhELDRCQUFNLEdBQWI7UUFBQSxpQkFNQztRQUxDLElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxRQUFRLDBCQUF1QixDQUFDO1FBRWxELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLEdBQUcsR0FBTSxJQUFJLENBQUMsUUFBUSx1QkFBb0IsQ0FBQztRQUUvQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkFNQztRQUxDLElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxRQUFRLFNBQUksRUFBSSxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMs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RUgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sb0NBQWMsR0FBdEIsVUFBdUIsUUFBa0I7UUFDdkMsT0FBTyxJQUFJLGlCQUFJLENBQ2IsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFDckMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUMzQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQ3BDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDO0lBOUZVLFdBQVc7UUFGdkIsaUJBQVUsRUFBRTt5Q0FLMkIsNEJBQVk7T0FIdkMsV0FBVyxDQStGdkI7SUFBRCxrQkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC90b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2subW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBUYXNrU2VydmljZSB7XG4gIHB1YmxpYyB0YXNrc1VybCA9ICd0YXNrcyc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5IdHRwOiBUb2tlblNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBnZXRBbGwoKTogT2JzZXJ2YWJsZTxUYXNrW10+IHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy50YXNrc1VybH0/cVtzXT11cGRhdGVkX2F0K0RFU0NgO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5IdHRwLmdldCh1cmwpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVyRXJyb3JzKVxuICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB0aGlzLnJlc3BvbnNlVG9UYXNrcyhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHVibGljIGdldEltcG9ydGFudHMoKTogT2JzZXJ2YWJsZTxUYXNrW10+IHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy50YXNrc1VybH0/cVtzXT1kZWFkbGluZStBU0NgO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5IdHRwLmdldCh1cmwpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVyRXJyb3JzKVxuICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB0aGlzLnJlc3BvbnNlVG9UYXNrcyhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHVibGljIGdldEJ5SWQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8VGFzaz4ge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLnRhc2tzVXJsfS8ke2lkfWA7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbkh0dHAuZ2V0KHVybClcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZXJFcnJvcnMpXG4gICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHRoaXMucmVzcG9uc2VUb1Rhc2socmVzcG9uc2UpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUodGFzazogVGFzayk6IE9ic2VydmFibGU8VGFzaz4ge1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGFzayk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbkh0dHAucG9zdCh0aGlzLnRhc2tzVXJsLCBib2R5KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlckVycm9ycylcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gdGhpcy5yZXNwb25zZVRvVGFzayhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSh0YXNrOiBUYXNrKTogT2JzZXJ2YWJsZTxUYXNrPiB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMudGFza3NVcmx9LyR7dGFzay5pZH1gO1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGFzayk7XG5cbiAgICByZXR1cm4gdGhpcy50b2tlbkh0dHAucHV0KHVybCwgYm9keSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZXJFcnJvcnMpXG4gICAgICAubWFwKCgpID0+IHRhc2spO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxudWxsPiB7XG4gICAgbGV0IHVybCA9IGAke3RoaXMudGFza3NVcmx9LyR7aWR9YDtcblxuICAgIHJldHVybiB0aGlzLnRva2VuSHR0cC5kZWxldGUodXJsKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlckVycm9ycylcbiAgICAgIC5tYXAoKCkgPT4gbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoQnlUaXRsZSh0ZXJtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRhc2tbXT4ge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLnRhc2tzVXJsfT9xW3RpdGxlX2NvbnRdPSR7dGVybX1gO1xuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5IdHRwLmdldCh1cmwpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVyRXJyb3JzKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiB0aGlzLnJlc3BvbnNlVG9UYXNrcyhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVyRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKCdTYWx2YW5kbyBvIGVycm8gZW0gdW0gYXJxdWl2byBkZSBsb2cgPT4nLCBlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNwb25zZVRvVGFza3MocmVzcG9uc2U6IFJlc3BvbnNlKTogVGFza1tde1xuICAgIGxldCBjb2xsZWN0aW9uID0gcmVzcG9uc2UuanNvbigpLmRhdGEgYXMgQXJyYXk8YW55PjtcbiAgICBsZXQgdGFza3M6IFRhc2tbXSA9IFtdO1xuXG4gICAgY29sbGVjdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgaXRlbS5pZCxcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgICAgIGl0ZW0uYXR0cmlidXRlcy5kb25lLFxuICAgICAgICBpdGVtLmF0dHJpYnV0ZXNbJ2RlYWRsaW5lLXRvLWJyJ11cbiAgICAgICk7XG5cbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICBwcml2YXRlIHJlc3BvbnNlVG9UYXNrKHJlc3BvbnNlOiBSZXNwb25zZSk6IFRhc2sge1xuICAgIHJldHVybiBuZXcgVGFzayhcbiAgICAgIHJlc3BvbnNlLmpzb24oKS5kYXRhLmlkLFxuICAgICAgcmVzcG9uc2UuanNvbigpLmRhdGEuYXR0cmlidXRlcy50aXRsZSxcbiAgICAgIHJlc3BvbnNlLmpzb24oKS5kYXRhLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgICByZXNwb25zZS5qc29uKCkuZGF0YS5hdHRyaWJ1dGVzLmRvbmUsXG4gICAgICByZXNwb25zZS5qc29uKCkuZGF0YS5hdHRyaWJ1dGVzWydkZWFkbGluZS10by1iciddXG4gICAgKTtcbiAgfVxufVxuIl19