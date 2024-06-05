//Общие типы (general types)

//ES5
// function getter<T>(data: T): T {
//     return data
// }

//ES6
const getter = <T>(data: T): T => data

getter<number>(10)
getter<string>('string').length

//Generic class
class User<T, K extends number> {
    constructor(public name: T, public age: K) {
    }

    public getPass(): string {
        return `${this.name}${this.age}`
    }

    public getSecret(): number {
        return this.age ** 2
    }
}

const john = new User('John', 35)
const johnPass: string = john.getPass()
const johnSecret: number = john.getSecret()