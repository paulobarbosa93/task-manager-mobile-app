"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var token_service_1 = require("./token.service");
var AuthService = /** @class */ (function () {
    function AuthService(tokenService) {
        this.tokenService = tokenService;
    }
    AuthService.prototype.signUp = function (user) {
        return this.tokenService.registerAccount(user)
            .catch(this.handlerErrors);
    };
    AuthService.prototype.signIn = function (uid, password) {
        var signInData = {
            email: uid,
            password: password
        };
        return this.tokenService.signIn(signInData)
            .catch(this.handlerErrors);
    };
    AuthService.prototype.signOut = function () {
        return this.tokenService.signOut()
            .catch(this.handlerErrors);
    };
    AuthService.prototype.userSignedIn = function () {
        return this.tokenService.userSignedIn();
    };
    AuthService.prototype.handlerErrors = function (error) {
        console.log('Salvando o erro em um arquivo de log =>', error);
        return Observable_1.Observable.throw(error);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [token_service_1.TokenService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDhDQUE2QztBQUM3QyxpREFBK0M7QUFNL0M7SUFDRSxxQkFBMkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBSSxDQUFDO0lBRW5ELDRCQUFNLEdBQWIsVUFBYyxJQUFVO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBVyxDQUFDO2FBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxHQUFXLEVBQUUsUUFBZ0I7UUFDekMsSUFBSSxVQUFVLEdBQUc7WUFDZixLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSw2QkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTthQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxrQ0FBWSxHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU8sbUNBQWEsR0FBckIsVUFBc0IsS0FBZTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELE9BQU8sdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTlCVSxXQUFXO1FBRnZCLGlCQUFVLEVBQUU7eUNBRzhCLDRCQUFZO09BRDFDLFdBQVcsQ0ErQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi90b2tlbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBUb2tlblNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBzaWduVXAodXNlcjogVXNlcikgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5TZXJ2aWNlLnJlZ2lzdGVyQWNjb3VudCh1c2VyIGFzIGFueSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZXJFcnJvcnMpO1xuICB9XG5cbiAgcHVibGljIHNpZ25Jbih1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGxldCBzaWduSW5EYXRhID0ge1xuICAgICAgZW1haWw6IHVpZCxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy50b2tlblNlcnZpY2Uuc2lnbkluKHNpZ25JbkRhdGEpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVyRXJyb3JzKTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduT3V0KCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy50b2tlblNlcnZpY2Uuc2lnbk91dCgpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVyRXJyb3JzKTtcbiAgfVxuXG4gIHB1YmxpYyB1c2VyU2lnbmVkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5TZXJ2aWNlLnVzZXJTaWduZWRJbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVyRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKCdTYWx2YW5kbyBvIGVycm8gZW0gdW0gYXJxdWl2byBkZSBsb2cgPT4nLCBlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG59XG4iXX0=