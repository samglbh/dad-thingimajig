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
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(500)
basic.showIcon(IconNames.Diamond)
let rand = randint(120000, 300000)
loops.everyInterval(rand, function () {
    turn()
    rand = randint(120000, 300000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
