rand = randint(120000, 300000)

def on_every_interval():
    global rand
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    rand = randint(120000, 300000)
loops.every_interval(rand, on_every_interval)
