// Types

// number
const dec: number = 10
const pi: number = 3.14

//string
const firstName: string = 'John'
const message: string = `Hello ${firstName}`

//boolean
const isActive: boolean = true

//array
const numbers: number[] = [1, 2, 3]
const strings: Array<string> = ['string1', 'string2']
const arr: Array<string | number | boolean> = [10, 'string', 42, true]

//tuple: Кортеж
const tuple: [string, number] = ['String', 10]

//enum: Перечисление представляет набор именованных числовых констант.
enum Directions {
    Up,
    Down,
    Left,
    Right,
}

const direction: Directions.Left = Directions.Left // 2

//any: Тип any позволяет присваивать переменной любое значение без проверки типа.
let value: any = 42
value = 'string'

//void
const func = (message: string): void => console.log(message)

//null & undefined
const n: null = null
const u: undefined = undefined

//never
// Тип never указывает на значения, которые никогда не произойдут.
// Обычно используется для функций, которые генерируют ошибки или никогда не завершаются.
const error = (errorMessage: string): never => {
    throw new Error(errorMessage)
}

//object
const obj1: object = { key: 'value' }
const obj2: { key: string } = { key: 'value' }

//symbol
// @ts-ignore
const smbl: symbol = Symbol('description')

//bigint (ECMAScript 2020)
// @ts-ignore
const big: bigint = 100n

//unknown: Похож на any, но без возможности непосредственного использования значений с неизвестным типом.
let unknownValue: unknown = 42

//Custom type
type customType = string
const customTypeName: customType = 'name'
