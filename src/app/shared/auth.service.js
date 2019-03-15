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
