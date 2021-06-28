class User {
    sessionID: String

    constructor() {
        // ...
    }

    getSessionID(): String {
        return this.sessionID;
    }

    hasAccess(action: Actions): boolean {
        // ...
        return access;
    }

    updateProfile(data: Profile): CommandStatus {
        // ...
        return status;
    }
}

class Guest extends User {
    constructor() { super() }

    hasAccess(action: Actions): boolean {
        // описываем логику доступа для гостей
        return access
    }

    updateProfile(data: Profile): CommandStatus {
        // а вот тут проблема: у гостей профиля нет,
        // из-за чего приходится выбрасывать исключение;
        // гостевой режим как бы заставляет нас учитывать большее количество
        // обстоятельств, прежде чем выполнить обновление профиля
        throw new Error(`Guests don't have profiles`)
    }
}

class CommandStatus { }
class Actions { }
class Profile { }