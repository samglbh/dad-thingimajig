input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    turn()
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function turn () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(500)
basic.showIcon(IconNames.Diamond)
let rand = randint(1, 5)
loops.everyInterval(rand * 60, function () {
    turn()
    rand = randint(1, 5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
