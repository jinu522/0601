radio.onReceivedNumber(function (receivedNumber) {
    let receiveNumber = 0
    if (receiveNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (receiveNumber == 2) {
        basic.showIcon(IconNames.Angry)
    }
    if (receiveNumber == 3) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(6)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
radio.setGroup(1)
