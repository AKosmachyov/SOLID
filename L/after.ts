interface User {
    getSessionID(): String
}

interface UserWithAccess {
    hasAccess(action: Actions): boolean
}

interface UserWithProfile {
    updateProfile(data: Profile): CommandStatus
}

class BaseUser implements User {
    constructor() { }

    getSessionID(): String {
        return this.sessionID
    }
}

// у обычных пользователей добавляем методы
// для работы с профилем и для работы с доступами
class RegularUser extends BaseUser implements UserWithAccess, UserWithProfile {
    constructor() { super() }

    hasAccess(action: Actions): boolean {
        // ...
        return access
    }

    updateProfile(data: Profile): CommandStatus {
        // ...
        return status
    }
}

// для гостей же достаточно описать только доступы
class Guest extends BaseUser implements UserWithAccess {
    constructor() { super() }

    hasAccess(action: Actions): boolean {
        // ...
        return access
    }
}

class CommandStatus { }
class Actions { }
class Profile { }