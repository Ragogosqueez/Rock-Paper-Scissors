input.onPinPressed(TouchPin.P0, function () {
    Cha = 0
    Num = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showIcon(IconNames.Happy)
    if (Cha == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Cha == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Cha == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showString("  Invalid")
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(500)
    Num = randint(0, 2)
    if (Num == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Num == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Num == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    if (Num == 0 && Cha == 2 || (Num == 1 && Cha == 0 || Num == 2 && Cha == 1)) {
        basic.showString("You Lose")
        basic.showIcon(IconNames.No)
    } else if (Cha == 0 && Num == 2 || (Cha == 1 && Num == 0 || Cha == 2 && Num == 1)) {
        basic.showString("You Win!!!")
        basic.showIcon(IconNames.Yes)
    } else if (Cha == 3) {
        basic.showString("Invalid")
        basic.showIcon(IconNames.Silly)
    } else {
        basic.showString("It's a draw.")
    }
    Cha = 3
    Num = 3
})
input.onPinPressed(TouchPin.P2, function () {
    Cha = 2
    Num = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showString("  P1")
    if (Cha == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Cha == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Cha == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showString("  Invalid")
    }
    Char = Cha
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.showString("P2")
    if (Num == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Num == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Num == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showString("  Invalid")
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    if (Num == 0 && Char == 2 || (Num == 1 && Char == 0 || Num == 2 && Char == 1)) {
        basic.showString("Player 2 Wins!!!")
        basic.showIcon(IconNames.Yes)
    } else if (Char == 0 && Num == 2 || (Char == 1 && Num == 0 || Char == 2 && Num == 1)) {
        basic.showString("Player 1 Wins!!!")
        basic.showIcon(IconNames.Yes)
    } else if (Char == 3 || Num == 3) {
        basic.showString("Invalid")
        basic.showIcon(IconNames.Silly)
    } else if (Char == Num) {
        basic.showString("It's a draw.")
    }
    Cha = 3
    Num = 3
})
input.onPinPressed(TouchPin.P1, function () {
    Cha = 1
    Num = 1
})
input.onGesture(Gesture.Shake, function () {
    if (Cha == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Cha == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Cha == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let Char = 0
let Num = 0
let Cha = 0
Cha = 3
Num = 3
basic.forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G B A G C5 B A B ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 250), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    music.setVolume(50)
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E B C5 A B G A F ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G B A G C5 B A B ", 250), music.PlaybackMode.UntilDone)
})
