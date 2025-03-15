input.onButtonPressed(Button.A, function () {
    if (Jackpot == 0) {
        if (Money > 0) {
            basic.clearScreen()
            Money += -1
            Gamble = randint(1, 5)
            Gamble_2 = randint(1, 5)
            Gamble_3 = randint(1, 5)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    Jackpot = 1
    basic.clearScreen()
    basic.showNumber(Money)
    basic.pause(1000)
    Jackpot = 0
})
let Gamble_2 = 0
let Gamble = 0
let Jackpot = 0
let Money = 0
let Gamble_3 = 0
Gamble_3 = 6
Money = 50
basic.forever(function () {
    if (Gamble == Gamble_2) {
        if (Gamble_2 == Gamble_3) {
            Jackpot = 1
            Money += 125
            basic.showString("Jackpot!")
            basic.pause(1000)
            Gamble_3 = 6
            Jackpot = 0
        }
    }
})
basic.forever(function () {
    if (Jackpot == 0) {
        if (Gamble == 1) {
            led.plot(0, 0)
        } else if (Gamble == 2) {
            led.plot(0, 0)
            led.plot(0, 1)
        } else if (Gamble == 3) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
        } else if (Gamble == 4) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
        } else if (Gamble == 5) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
        } else {
        	
        }
    }
})
basic.forever(function () {
    if (Jackpot == 0) {
        if (Gamble_2 == 1) {
            led.plot(2, 0)
        } else if (Gamble_2 == 2) {
            led.plot(2, 0)
            led.plot(2, 1)
        } else if (Gamble_2 == 3) {
            led.plot(2, 0)
            led.plot(2, 1)
            led.plot(2, 2)
        } else if (Gamble_2 == 4) {
            led.plot(2, 0)
            led.plot(2, 1)
            led.plot(2, 2)
            led.plot(2, 3)
        } else if (Gamble_2 == 5) {
            led.plot(2, 0)
            led.plot(2, 1)
            led.plot(2, 2)
            led.plot(2, 3)
            led.plot(2, 4)
        } else {
        	
        }
    }
})
basic.forever(function () {
    if (Jackpot == 0) {
        if (Gamble_3 == 1) {
            led.plot(4, 0)
        } else if (Gamble_3 == 2) {
            led.plot(4, 0)
            led.plot(4, 1)
        } else if (Gamble_3 == 3) {
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
        } else if (Gamble_3 == 4) {
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
        } else if (Gamble_3 == 5) {
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
            led.plot(4, 4)
        } else {
        	
        }
    }
})
