basic.forever(function () {
    let _1 = 0
    if (input.lightLevel() > 30) {
    	
    }
    if (_1 == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (_1 == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
