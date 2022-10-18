let FireV = 0
basic.forever(function () {
    FireV = pins.analogReadPin(AnalogPin.P0)
    if (FireV < 100) {
        basic.showString("Fire!")
    } else {
        basic.showString("safe~")
    }
})
