function サビA2 () {
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
}
function BadApple () {
    while (true) {
        Aメロ()
        サビA()
        サビB()
    }
}
input.onButtonPressed(Button.A, function () {
    if (音量 < 255) {
        音量 += 1
        音量変更()
    }
})
function サビA1 () {
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
}
function サビB () {
    サビ2()
    サビ2()
    サビB2()
}
function Aメロ4 () {
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
}
function Aメロ1 () {
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
}
function Aメロ () {
    Aメロ1()
    Aメロ2()
    Aメロ1()
    Aメロ3()
    Aメロ1()
    Aメロ2()
    Aメロ1()
    Aメロ4()
}
function Aメロ2 () {
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
}
function 音量変更 () {
    music.setVolume(音量)
}
function サビ1 () {
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.B, function () {
    if (音量 > 0) {
        音量 += -1
        音量変更()
    }
})
function サビ2 () {
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    サビ1()
}
function サビB2 () {
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function Aメロ3 () {
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(277, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
}
function サビA () {
    サビ1()
    サビ2()
    サビA1()
    サビA2()
}
let 音量 = 0
音量 = 127
音量変更()
basic.forever(function () {
    basic.showIcon(IconNames.EigthNote)
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    BadApple()
})
