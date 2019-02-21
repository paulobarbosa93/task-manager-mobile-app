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
    DateTimePickerModalComponent.prototype.ngOnInit = function () {
        this.setDatePicker();
        this.setTimePicker();
    };
    DateTimePickerModalComponent.prototype.setDatePicker = function () {
        this.datePicker = this.page.getViewById('datePicker');
        this.datePicker.height = 170;
        this.datePicker.year = this.preSelectedDateTime.getFullYear();
        this.datePicker.month = this.preSelectedDateTime.getMonth() + 1;
        this.datePicker.day = this.preSelectedDateTime.getDate();
    };
    DateTimePickerModalComponent.prototype.setTimePicker = function () {
        this.timePicker = this.page.getViewById('timePicker');
        this.timePicker.height = 170;
        this.timePicker.hour = this.preSelectedDateTime.getHours();
        this.timePicker.minute = this.preSelectedDateTime.getMinutes();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGV0aW1lLXBpY2tlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0VBQXNFO0FBQ3RFLGdDQUErQjtBQVMvQjtJQUtFLHNDQUEyQixXQUE4QixFQUFVLElBQVU7UUFBbEQsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMzRSxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFO1lBQzNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztTQUN6RTthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRU0sK0NBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLG9EQUFhLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxZQUFZLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFTSxvREFBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQWEsWUFBWSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakUsQ0FBQztJQS9CVSw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0NBQXdDO1NBQ3RELENBQUM7eUNBT3dDLGdDQUFpQixFQUFnQixXQUFJO09BTGxFLDRCQUE0QixDQWdDeEM7SUFBRCxtQ0FBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICd1aS9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSAndWkvdGltZS1waWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGV0aW1lLXBpY2tlci1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHByZVNlbGVjdGVkRGF0ZVRpbWU6IERhdGU7XG4gIHB1YmxpYyBkYXRlUGlja2VyOiBEYXRlUGlja2VyO1xuICBwdWJsaWMgdGltZVBpY2tlcjogVGltZVBpY2tlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGFnZTogUGFnZSl7XG4gICAgaWYodGhpcy5tb2RhbFBhcmFtcy5jb250ZXh0ICYmIHRoaXMubW9kYWxQYXJhbXMuY29udGV4dC5wcmVTZWxlY3RlZERhdGVUaW1lKSB7XG4gICAgICB0aGlzLnByZVNlbGVjdGVkRGF0ZVRpbWUgPSB0aGlzLm1vZGFsUGFyYW1zLmNvbnRleHQucHJlU2VsZWN0ZWREYXRlVGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVTZWxlY3RlZERhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKXtcbiAgICB0aGlzLnNldERhdGVQaWNrZXIoKTtcbiAgICB0aGlzLnNldFRpbWVQaWNrZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXREYXRlUGlja2VyKCl7XG4gICAgdGhpcy5kYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkPERhdGVQaWNrZXI+KCdkYXRlUGlja2VyJyk7XG4gICAgdGhpcy5kYXRlUGlja2VyLmhlaWdodCA9IDE3MDtcbiAgICB0aGlzLmRhdGVQaWNrZXIueWVhciA9IHRoaXMucHJlU2VsZWN0ZWREYXRlVGltZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZGF0ZVBpY2tlci5tb250aCA9IHRoaXMucHJlU2VsZWN0ZWREYXRlVGltZS5nZXRNb250aCgpICsgMTtcbiAgICB0aGlzLmRhdGVQaWNrZXIuZGF5ID0gdGhpcy5wcmVTZWxlY3RlZERhdGVUaW1lLmdldERhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRUaW1lUGlja2VyKCl7XG4gICAgdGhpcy50aW1lUGlja2VyID0gPFRpbWVQaWNrZXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFRpbWVQaWNrZXI+KCd0aW1lUGlja2VyJyk7XG4gICAgdGhpcy50aW1lUGlja2VyLmhlaWdodCA9IDE3MDtcbiAgICB0aGlzLnRpbWVQaWNrZXIuaG91ciA9IHRoaXMucHJlU2VsZWN0ZWREYXRlVGltZS5nZXRIb3VycygpO1xuICAgIHRoaXMudGltZVBpY2tlci5taW51dGUgPSB0aGlzLnByZVNlbGVjdGVkRGF0ZVRpbWUuZ2V0TWludXRlcygpO1xuICB9XG59XG4iXX0=