let _1 = 0
basic.forever(function () {
    if (input.lightLevel() > 30) {
        if (_1 == 1) {
            basic.showIcon(IconNames.Scissors)
        } else if (_1 == 2) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.SmallSquare)
        }
    } else {
        basic.clearScreen()
        _1 = randint(1, 3)
    }
})
