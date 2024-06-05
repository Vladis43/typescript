interface IUser {
    readonly name: string
    age: number
    role?: string

    [propName: string]: any // Can add any property
}

const john: IUser = {
    name: 'John',
    age: 35,
    nickname: 'JohnDoe', //Interface don`t control this property
}
const sarah: IUser = {
    name: 'Sarah',
    age: 25,
    role: 'admin',
}

john.role = 'user'
// john.name = 'Not John' //Cannot assign to name because it is a read-only property.

//----------------------------------------

interface Admin {
    getPass(): string
}

class John implements IUser, Admin {
    name: string = 'John'
    age: number = 35
    role?: string = 'user'

    getPass(): string {
        return `${this.name}-${this.age}`
    }

    [propName: string]: any
}