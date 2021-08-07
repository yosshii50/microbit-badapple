music.play_tone(311, music.beat(BeatFraction.HALF))
music.play_tone(349, music.beat(BeatFraction.HALF))
music.play_tone(370, music.beat(BeatFraction.HALF))
music.play_tone(415, music.beat(BeatFraction.HALF))
music.play_tone(466, music.beat(BeatFraction.WHOLE))
music.play_tone(622, music.beat(BeatFraction.HALF))
music.play_tone(554, music.beat(BeatFraction.HALF))
music.play_tone(466, music.beat(BeatFraction.WHOLE))
music.play_tone(311, music.beat(BeatFraction.WHOLE))
music.play_tone(466, music.beat(BeatFraction.HALF))
music.play_tone(415, music.beat(BeatFraction.HALF))
music.play_tone(370, music.beat(BeatFraction.HALF))
music.play_tone(349, music.beat(BeatFraction.HALF))

def on_forever():
    basic.show_leds("""
        # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # #
    """)
    basic.show_leds("""
        # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
    """)
basic.forever(on_forever)
