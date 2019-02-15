"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
        this.icons = new Map();
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
        this.setIcons();
    }
    TasksComponent.prototype.setIcons = function () {
        this.icons.set('trash', String.fromCharCode(0xf014));
        this.icons.set('add', String.fromCharCode(0xf055));
        this.icons.set('checked', String.fromCharCode(0xf14a));
        this.icons.set('unchecked', String.fromCharCode(0xf096));
    };
    TasksComponent.prototype.checkBoxIcon = function (task) {
        if (task.done) {
            return this.icons.get('checked');
        }
        else {
            return this.icons.get('unchecked');
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBUTFDO0lBSUU7UUFGTyxVQUFLLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRzVELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztZQUM1QyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDN0MsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDekMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztZQUN4QyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7WUFDbEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBQzdDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUM7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7YUFBSztZQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBakNVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7O09BRVcsY0FBYyxDQWtDMUI7SUFBRCxxQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rhc2tzJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rhc2tzLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRhc2tzQ29tcG9uZW50IHtcbiAgcHVibGljIHRhc2tzOiBhbnlbXTtcbiAgcHVibGljIGljb25zOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnRhc2tzID0gW1xuICAgICAge2lkOiAxLCB0aXRsZTogJ0NvbXByYXIgbm90ZWJvb2sgbm92bycsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogMiwgdGl0bGU6ICdJciBhIGFjYWRlbWlhJywgZG9uZTogZmFsc2V9LFxuICAgICAge2lkOiAzLCB0aXRsZTogJ1NlZ3VpciBhIGRpZXRhJywgZG9uZTogZmFsc2V9LFxuICAgICAge2lkOiA0LCB0aXRsZTogJ0VzdHVkYXIgdG9kb3Mgb3MgZGlhcycsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdUb21hciDDoWd1YScsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdGYXplciBBRUonLCBkb25lOiBmYWxzZX0sXG4gICAgICB7aWQ6IDUsIHRpdGxlOiAnQXNzaXN0aXIgdmlkZW9hdWxhcycsIGRvbmU6IGZhbHNlfSxcbiAgICAgIHtpZDogNSwgdGl0bGU6ICdBc3Npc3RpciBzw6lyaWUnLCBkb25lOiBmYWxzZX0sXG4gICAgICB7aWQ6IDUsIHRpdGxlOiAnVG9tYXIgw6FndWEnLCBkb25lOiBmYWxzZX1cbiAgICBdO1xuXG4gICAgdGhpcy5zZXRJY29ucygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJY29ucygpOiB2b2lkIHtcbiAgICB0aGlzLmljb25zLnNldCgndHJhc2gnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjAxNCkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdhZGQnLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA1NSkpO1xuICAgIHRoaXMuaWNvbnMuc2V0KCdjaGVja2VkJywgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxNGEpKTtcbiAgICB0aGlzLmljb25zLnNldCgndW5jaGVja2VkJywgU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwOTYpKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0JveEljb24odGFzazogYW55KXtcbiAgICBpZih0YXNrLmRvbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmdldCgnY2hlY2tlZCcpO1xuICAgIH1lbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zLmdldCgndW5jaGVja2VkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=