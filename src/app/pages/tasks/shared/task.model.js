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
