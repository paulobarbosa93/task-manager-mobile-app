"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(id, title, description, done, deadline) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
        this.deadline = deadline;
    }
    Object.defineProperty(Task.prototype, "doneCheckBoxString", {
        get: function () {
            return this.done ? '[x]' : '[ ]';
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2subW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNFLGNBQ1MsRUFBVSxFQUNWLEtBQWEsRUFDYixXQUFvQixFQUNwQixJQUFjLEVBQ2QsUUFBaUI7UUFKakIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUN4QixDQUFDO0lBRUgsc0JBQVcsb0NBQWtCO2FBQTdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNILFdBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb24/OiBzdHJpbmcsXG4gICAgcHVibGljIGRvbmU/OiBib29sZWFuLFxuICAgIHB1YmxpYyBkZWFkbGluZT86IHN0cmluZ1xuICApe31cblxuICBwdWJsaWMgZ2V0IGRvbmVDaGVja0JveFN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRvbmUgPyAnW3hdJyA6ICdbIF0nO1xuICB9XG59XG4iXX0=