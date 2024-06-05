//Namespace close data inside
//Export data from namespace
namespace Utils {
    export const secret: string = '12345'
    const PI: number = 3.14

    export const getPass = (name: string, age: number): string => `${name}-${age}`
    export const isEmpty = <T>(data: T): boolean => !data
}

//Calling exported from namespace methods
const myPass = Utils.getPass('John', 25)
const isSecret = Utils.isEmpty(Utils.secret)

//Constant with the same name outside namespace
const PI: number = 3.14