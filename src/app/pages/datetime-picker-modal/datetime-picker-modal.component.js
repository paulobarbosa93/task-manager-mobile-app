"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var DateTimePickerModalComponent = /** @class */ (function () {
    function DateTimePickerModalComponent(modalParams, page) {
        this.modalParams = modalParams;
        this.page = page;
        if (this.modalParams.context && this.modalParams.context.preSelectedDateTime) {
            this.preSelectedDateTime = this.modalParams.context.preSelectedDateTime;
        }
        else {
            this.preSelectedDateTime = new Date();
        }
    }
    DateTimePickerModalComponent.prototype.ngOnInit = function () { };
    DateTimePickerModalComponent.prototype.onDatePickerLoaded = function (args) {
        this.setDatePicker(args);
    };
    DateTimePickerModalComponent.prototype.onTimePickerLoaded = function (args) {
        this.setTimePicker(args);
    };
    DateTimePickerModalComponent.prototype.setDatePicker = function (args) {
        this.datePicker = args.object;
        this.datePicker.height = 150;
        this.datePicker.year = this.preSelectedDateTime.getFullYear();
        this.datePicker.month = this.preSelectedDateTime.getMonth() + 1;
        this.datePicker.day = this.preSelectedDateTime.getDate();
    };
    DateTimePickerModalComponent.prototype.setTimePicker = function (args) {
        this.timePicker = args.object;
        this.timePicker.height = 150;
        this.timePicker.hour = this.preSelectedDateTime.getHours();
        this.timePicker.minute = this.preSelectedDateTime.getMinutes();
    };
    DateTimePickerModalComponent.prototype.sendNewDateTime = function () {
        var newDateTime = new Date(this.datePicker.year, this.datePicker.month - 1, this.datePicker.day, this.timePicker.hour, this.timePicker.minute);
        this.modalParams.closeCallback(newDateTime);
    };
    DateTimePickerModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './datetime-picker-modal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], DateTimePickerModalComponent);
    return DateTimePickerModalComponent;
}());
exports.DateTimePickerModalComponent = DateTimePickerModalComponent;
