def on_button_pressed_a():
    basic.show_icon(IconNames.SMALL_DIAMOND)
    turn()
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def turn():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digital_write_pin(DigitalPin.P0, 0)
pins.digital_write_pin(DigitalPin.P0, 0)
basic.show_icon(IconNames.SMALL_DIAMOND)
basic.pause(500)
basic.show_icon(IconNames.DIAMOND)
rand = randint(120000, 300000)

def on_every_interval():
    global rand
    turn()
    rand = randint(120000, 300000)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
loops.every_interval(rand, on_every_interval)
