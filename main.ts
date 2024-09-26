
input.onButtonPressed(Button.A, function() {
hecks()
})
input.onPinPressed(TouchPin.P0, function() {
    pro()
})
function hecks() {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
}
function pro() {
    hecks()
    hecks()
    hecks()
    hecks()
    hecks()
}