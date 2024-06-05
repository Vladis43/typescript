//Readonly<T>
interface User {
    name: string
}

const john: Readonly<User> = {
    name: 'John',
}
// john.name = 'sarah' //Error: cannot reassign readonly property

//----------------------------------------

//Required<T>
interface Props {
    a?: number
    b?: string
}

const obj: Props = { a: 5 }
// const obj2: Required<Props> = { b: 5 } // Error: property 'a' is missing

//----------------------------------------

//Record<T, K>
interface PageInfo {
    title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<Page, PageInfo> = {
    home: { title: 'home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
}

//----------------------------------------

//Omit<T, K>
interface Todo {
    title: string
    description: string
    isCompleted: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
    title: 'todo',
    isCompleted: false,
}
