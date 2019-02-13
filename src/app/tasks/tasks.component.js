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
            { id: 5, title: 'Tomar água', done: false },
            { id: 5, title: 'Fazer AEJ', done: false },
            { id: 5, title: 'Assistir videoaulas', done: false },
            { id: 5, title: 'Assistir série', done: false },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUTFDO0lBR0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDNUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQzdDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztZQUNwRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQ3pDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDeEMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQ2xELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztZQUM3QyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDO0lBZlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQzs7T0FFVyxjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFza3MnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFza3MuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVGFza3NDb21wb25lbnQge1xuICBwdWJsaWMgdGFza3M6IGFueVtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMudGFza3MgPSBbXG4gICAgICB7aWQ6IDEsIHRpdGxlOiAnQ29tcHJhciBub3RlYm9vayBub3ZvJywgZG9uZTogZmFsc2V9LFxuICAgICAge2lkOiAyLCB0aXRsZTogJ0lyIGEgYWNhZGVtaWEnLCBkb25lOiBmYWxzZX0sXG4gICAgICB7aWQ6IDMsIHRpdGxlOiAnU2VndWlyIGEgZGlldGEnLCBkb25lOiBmYWxzZX0sXG4gICAgICB7aWQ6IDQsIHRpdGxlOiAnRXN0dWRhciB0b2RvcyBvcyBkaWFzJywgZG9uZTogZmFsc2V9LFxuICAgICAge2lkOiA1LCB0aXRsZTogJ1RvbWFyIMOhZ3VhJywgZG9uZTogZmFsc2V9LFxuICAgICAge2lkOiA1LCB0aXRsZTogJ0ZhemVyIEFFSicsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdBc3Npc3RpciB2aWRlb2F1bGFzJywgZG9uZTogZmFsc2V9LFxuICAgICAge2lkOiA1LCB0aXRsZTogJ0Fzc2lzdGlyIHPDqXJpZScsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdUb21hciDDoWd1YScsIGRvbmU6IGZhbHNlfVxuICAgIF07XG4gIH1cbn1cbiJdfQ==