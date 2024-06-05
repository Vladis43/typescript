//old version
class oldVersionPerson {
    public name: string
    public age: number
    public role: string

    constructor(name: string, age: number, role: string) {
        this.name = name
        this.age = age
        this.role = role
    }
}

//new version
class newVersionPerson {
    constructor(
        public name: string,
        public age: number,
        public role: string,
    ) {
    }
}

//----------------------------------------

class User {
    private age: number = 25

    constructor(public name: string) {
    }

    //method
    setAge(age: number) {
        this.age = age
    }

    //property
    set myAge(age: number) {
        this.age = age
    }
}

const john = new User('John')
john.setAge(26)
john.myAge = 26
