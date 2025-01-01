let rand = randint(120000, 300000)
loops.everyInterval(rand, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    rand = randint(120000, 300000)
})
