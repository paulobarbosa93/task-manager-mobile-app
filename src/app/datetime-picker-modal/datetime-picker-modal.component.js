"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var DateTimePickerModalComponent = /** @class */ (function () {
    function DateTimePickerModalComponent(modalParams, page) {
        this.modalParams = modalParams;
        this.page = page;
    }
    DateTimePickerModalComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGV0aW1lLXBpY2tlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0VBQXNFO0FBQ3RFLGdDQUErQjtBQVMvQjtJQUtFLHNDQUEyQixXQUE4QixFQUFVLElBQVU7UUFBbEQsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFMUUsK0NBQVEsR0FBZixjQUFtQixDQUFDO0lBUFQsNEJBQTRCO1FBTHhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdDQUF3QztTQUN0RCxDQUFDO3lDQU93QyxnQ0FBaUIsRUFBZ0IsV0FBSTtPQUxsRSw0QkFBNEIsQ0FReEM7SUFBRCxtQ0FBQztDQUFBLEFBUkQsSUFRQztBQVJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICd1aS9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSAndWkvdGltZS1waWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGV0aW1lLXBpY2tlci1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHByZVNlbGVjdGVkRGF0ZVRpbWU6IERhdGU7XG4gIHB1YmxpYyBkYXRlUGlja2VyOiBEYXRlUGlja2VyO1xuICBwdWJsaWMgdGltZVBpY2tlcjogVGltZVBpY2tlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGFnZTogUGFnZSl7IH1cblxuICBwdWJsaWMgbmdPbkluaXQoKXsgfVxufVxuIl19