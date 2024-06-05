enum Directions {
    Up,
    Down,
    Left,
    Right = 6,
}
const directionIndexUp: Directions.Up = Directions.Up // 0
const directionIndexDown: Directions.Down = Directions.Down // 1
const directionIndexLeft: Directions.Left = Directions.Left // 2
const directionIndexRight: Directions.Right = Directions.Right // 6

const directionKeyUp: string = Directions[Directions.Up] // Up
const directionKeyDown: string = Directions[Directions.Down] // Down
const directionKeyLeft: string = Directions[Directions.Left] // Left
const directionKeyRight: string = Directions[Directions.Right] // Right

enum links {
    google = 'https://google.com/',
    facebook = 'https://facebook.com/',
    youtube = 'https://youtube.com/',
}
const google: links.google = links.google
const facebook: links.facebook = links.facebook
const youtube: links.youtube = links.youtube