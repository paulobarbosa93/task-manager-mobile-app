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
    DateTimePickerModalComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGV0aW1lLXBpY2tlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0VBQXNFO0FBQ3RFLGdDQUErQjtBQVMvQjtJQU1JLHNDQUEyQixXQUE4QixFQUFVLElBQVU7UUFBbEQsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU3RSxDQUFDO0lBRU0sK0NBQVEsR0FBZjtJQUVBLENBQUM7SUFaUSw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0NBQXdDO1NBQ3RELENBQUM7eUNBUTBDLGdDQUFpQixFQUFnQixXQUFJO09BTnBFLDRCQUE0QixDQWF4QztJQUFELG1DQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICd1aS90aW1lLXBpY2tlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXRpbWUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHByZVNlbGVjdGVkRGF0ZVRpbWU6IERhdGU7XG4gICAgcHVibGljIGRhdGVQaWNrZXI6IERhdGVQaWNrZXI7XG4gICAgcHVibGljIHRpbWVQaWNrZXI6IFRpbWVQaWNrZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGFnZTogUGFnZSl7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKXtcblxuICAgIH1cbn1cbiJdfQ==