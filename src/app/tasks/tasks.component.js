"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
        this.tasks = [
            { id: 1, title: 'Comprar notebook novo', done: false },
            { id: 2, title: 'Ir a academia', done: false },
            { id: 3, title: 'Seguir a dieta', done: false },
            { id: 4, title: 'Estudar todos os dias', done: false },
            { id: 5, title: 'Tomar água', done: false }
        ];
    }
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            moduleId: module.id,
            templateUrl: './tasks.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUTFDO0lBR0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDNUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQzdDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztZQUNwRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDO0lBWFUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQzs7T0FFVyxjQUFjLENBWTFCO0lBQUQscUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YXNrcycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi90YXNrcy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUYXNrc0NvbXBvbmVudCB7XG4gIHB1YmxpYyB0YXNrczogYW55W107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy50YXNrcyA9IFtcbiAgICAgIHtpZDogMSwgdGl0bGU6ICdDb21wcmFyIG5vdGVib29rIG5vdm8nLCBkb25lOiBmYWxzZX0sXG4gICAgICB7aWQ6IDIsIHRpdGxlOiAnSXIgYSBhY2FkZW1pYScsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogMywgdGl0bGU6ICdTZWd1aXIgYSBkaWV0YScsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogNCwgdGl0bGU6ICdFc3R1ZGFyIHRvZG9zIG9zIGRpYXMnLCBkb25lOiBmYWxzZX0sXG4gICAgICB7aWQ6IDUsIHRpdGxlOiAnVG9tYXIgw6FndWEnLCBkb25lOiBmYWxzZX1cbiAgICBdO1xuICB9XG59XG4iXX0=