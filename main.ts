input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
// Desvolvimento 02 Bl
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
    // Projeto Bl Fase 01
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 45) {
        basic.showString("NE")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 90) {
        basic.showString("L")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 135) {
    	
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 225) {
        basic.showString("SW")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
    if (input.compassHeading() == 315) {
        basic.showString("NW")
    } else {
        basic.showString("" + (input.compassHeading()))
    }
})
input.onButtonPressed(Button.B, function () {
    // Projeto Bl Fase 01
    if (input.compassHeading() == 0) {
        basic.showString("N")
    }
    if (input.compassHeading() == 45) {
        basic.showString("NE")
    }
    if (input.compassHeading() == 45) {
        basic.showString("NE")
    }
    if (input.compassHeading() == 90) {
        basic.showString("L")
    }
    if (input.compassHeading() == 135) {
        basic.showString("SE")
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
    }
    if (input.compassHeading() == 225) {
        basic.showString("SW")
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
    }
    if (input.compassHeading() == 315) {
        basic.showString("NW")
    }
})
basic.showIcon(IconNames.Yes)
