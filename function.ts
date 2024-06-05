//Function with two required arguments
const createPassword1 = (name: string, age: number): string => `${name} ${age}`

// createPassword1('Name') // An argument for age was not provided.

//Function with optional argument 'age'
const createPassword2 = (name: string, age?: number): string => `${name} ${age}`

createPassword2('Name')

//----------------------------------------

//Rest
const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join(', ')}`

//Rest Type
const createSkillsWithTypes = (name: string, ...skills: Array<string>): string => {
    return `${name}, my skills are ${skills.join(', ')}`
}

createSkillsWithTypes('John', 'JS', 'React', 'Typescript') // John, my skills are JS, React, Typescript

//----------------------------------------

//Describe function type
let newFunc: (firstArg: string) => void

const oldFunc = (name: string): void => {
    console.log(name)
}

newFunc = oldFunc