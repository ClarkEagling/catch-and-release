namespace SpriteKind {
    export const BadProjectile = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0) {
        goodShot = sprites.createProjectileFromSprite(img`
            . . . . . . . a . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . a 2 2 a . . . . . . 
            . . . . . a 1 4 2 a . . . . . . 
            . . . . . a 2 1 4 2 a . . . . . 
            . . . . a 1 2 4 3 4 2 a . . . . 
            . . . a 1 2 4 3 1 1 4 1 a . . . 
            . . . a 2 4 3 . 3 3 4 2 a . . . 
            . . . 2 4 3 . . . . 3 4 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
        info.changeScoreBy(-1)
    }
})
sprites.onOverlap(SpriteKind.BadProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (catchReady == 1) {
        info.changeScoreBy(1)
        sprite.destroy(effects.confetti, 100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1229, 3580, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        info.changeLifeBy(-1)
        sprite.destroy(effects.ashes, 100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 662, 257, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("catch", 400, function () {
        catchReady = 1
        mySprite.setImage(img`
            . 5 5 5 . 5 5 5 5 . 5 5 5 . 
            5 5 5 5 5 c c c c 5 5 5 5 5 
            5 5 5 5 b c c c c b 5 5 5 5 
            5 5 5 c 3 c c c c 3 c 5 5 5 
            . 5 3 3 c c c c c c 3 3 5 . 
            . 5 c c c c c c c c c c 5 . 
            . 5 5 c c c c c c c c 5 5 . 
            . 5 5 5 c c c c c c 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 . . 
            . . e 5 5 5 5 5 5 5 5 e . . 
            . e 4 5 5 5 5 5 5 5 5 4 e . 
            . 4 d 5 3 3 3 3 3 3 c d 4 . 
            . 4 4 5 6 6 6 6 6 6 f 4 4 . 
            . . . . 5 5 5 5 5 5 . . . . 
            . . . . 5 5 . . 5 5 . . . . 
            `)
        timer.debounce("catch", 250, function () {
            catchReady = 0
            mySprite.setImage(img`
                . 8 8 8 . f f f f . 8 8 8 . 
                8 8 8 8 8 c c c c 8 8 8 8 8 
                8 8 8 8 b c c c c b 8 8 8 8 
                8 8 8 c 3 c c c c 3 c 8 8 8 
                . 8 3 3 c c c c c c 3 3 8 . 
                . 8 c c c c c c c c c c 8 . 
                . 8 8 c c c c c c c c 8 8 . 
                . 8 8 8 c c c c c c 8 8 8 . 
                . 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 8 8 8 8 . . 
                . . e 8 8 8 8 8 8 8 8 e . . 
                . e 4 8 8 8 8 8 8 8 8 4 e . 
                . 4 d 8 3 3 3 3 3 3 c d 4 . 
                . 4 4 8 6 6 6 6 6 6 f 4 4 . 
                . . . . c c c c c c . . . . 
                . . . . c c . . c c . . . . 
                `)
        })
    })
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
	
})
function MakeBadman () {
    badMan = sprites.create(img`
        .........ffcccccccccff..........
        ...ccccffbbbb33333bbbbffcccc....
        ...ccccffbbbb33333bbbbffcccc....
        .ccbb3333bbbbcccccbbbb3333bbcc..
        .ccbb3333bbbbcccccbbbb3333bbcc..
        .ff33ccccccbbcccccbbcccccc33ff..
        .ff33ccccccbbcccccbbcccccc33ff..
        fccbbbbccccbbcccccbbccccbbbbccff
        fccbbbbccccbbcccccbbccccbbbbccff
        c33ccccbbcccccccccccccbbcccc33cc
        c33ccccbbcccccccccccccbbcccc33cc
        c33ccccccccccccccccccccccccc33cc
        c33ccccccccccccccccccccccccc33cc
        .ffbbbbcccccccccccccccccbbbbff..
        .ffbbbbcccccccccccccccccbbbbff..
        ...ffbbbbcc889999988ccbbbbff....
        ...ffbbbbcc889999988ccbbbbff....
        ...ffbbbbcc889999988ccbbbbff....
        ...ccccccff993311199ffcccccc....
        ...ccccccff993311199ffcccccc....
        .cc33ffffff993333399ffffff33cc..
        .cc33ffffff993333399ffffff33cc..
        c33ffffffff889999988ffffffff33cc
        c33ffffffff889999988ffffffff33cc
        f33ccccfffffffffffffffffcccc33ff
        f33ccccfffffffffffffffffcccc33ff
        fbb33ccbbbbffbbbbbffbbbbcc33bbff
        fbb33ccbbbbffbbbbbffbbbbcc33bbff
        .ccbbbb3333bb33333bb3333bbbbcc..
        .ccbbbb3333bb33333bb3333bbbbcc..
        ...fffffffffffffffffffffffff....
        ...fffffffffffffffffffffffff....
        `, SpriteKind.Enemy)
    badMan.setKind(SpriteKind.Enemy)
    badMan.setPosition(80, 15)
    badMan.setVelocity(50, 0)
    badMan.setBounceOnWall(true)
    badmanStatusbar = statusbars.create(20, 4, StatusBarKind.Health)
    badmanStatusbar.positionDirection(CollisionDirection.Bottom)
    badmanStatusbar.setOffsetPadding(-37, 5)
    badmanStatusbar.setLabel("Space Oyster")
    badShotOn = 1
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    scene.cameraShake(4, 2000)
    badMan.destroy(effects.halo, 5000)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.InBackground)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.InBackground)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 581, 176, 255, 85, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    badShotOn = 0
})
function MakeHero () {
    mySprite = sprites.create(img`
        . 8 8 8 . 8 8 8 8 . 8 8 8 . 
        8 8 8 8 8 c c c c 8 8 8 8 8 
        8 8 8 8 b c c c c b 8 8 8 8 
        8 8 8 c 3 c c c c 3 c 8 8 8 
        . 8 3 3 c c c c c c 3 3 8 . 
        . 8 c c c c c c c c c c 8 . 
        . 8 8 c c c c c c c c 8 8 . 
        . 8 8 8 c c c c c c 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . e 8 8 8 8 8 8 8 8 e . . 
        . e 4 8 8 8 8 8 8 8 8 4 e . 
        . 4 d 8 3 3 3 3 3 3 c d 4 . 
        . 4 4 8 6 6 6 6 6 6 f 4 4 . 
        . . . . c c c c c c . . . . 
        . . . . c c . . c c . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(80, 99)
    controller.moveSprite(mySprite)
    mySprite.setStayInScreen(true)
    info.setLife(10)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    badmanStatusbar.value += -10
    sprite.destroy(effects.fire, 100)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 865, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
let badShot: Sprite = null
let badShotOn = 0
let badmanStatusbar: StatusBarSprite = null
let badMan: Sprite = null
let catchReady = 0
let mySprite: Sprite = null
let goodShot: Sprite = null
effects.starField.startScreenEffect()
MakeHero()
MakeBadman()
scene.setBackgroundImage(img`
    fffff555fff5fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff55555ffffffffffff
    ffffff5ffff55fff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffff
    fffffffffff555f555ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffff
    ffffffffffff55555ffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff5ffffff5ffffffffffffff
    ffffffffff555555555fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55ffffffffff5f5ffffffff
    fffffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffff555ffffffff
    ffffffffffff55555ffffff5fff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffffffff55555fffffff
    fffffffffffff555fffffff55f55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555fffffffff5fffffffff
    fffffffffffff555fffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffff6fffffffff
    ffffffffffffff5fffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffff
    ffffffffffffff5ffffff555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
    ffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffff
    ffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5fffffffffffffff5f5fffffffffffff
    ffff5fff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffff555fffffffffffff
    ffff55f55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffff55555ffffffffffff
    ffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffff5ffffffffffffff
    fff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffffffffff6ffffffffffffff
    ff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff5fffff
    fffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffff
    fffff555ffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff
    ffffff5ffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff5fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff6ff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
    ffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
    ffffffff6666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
    ffffffff66666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffff
    fffffff66666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666ffffff
    fffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffff
    ffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff5fff
    fffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55fff
    fffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fff
    fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ff
    fffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555f
    fffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffff
    fffffffffffffbfffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffff
    fffffffffffffbfffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff
    fffffffffffffbfffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffff
    fffffffffffffbffffffffffffffffffffffffffb5bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff5ffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff5ffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff5ffffffffffffffffffffffffffb5bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66fffffffffff5ffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f66ffffffffff5fffffffffffffffffffffffb55bbb55bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff66ffffffff5ffffffffffffffffffffff55555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff66fffffff5fffffffffffffffffffffb55555555555bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff66fffffb5bffffffffffffffffffff55b5888885b55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff6ffff555ffffffffffffffffffff5b858888858b5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff66ffbbbffffffffffffffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff66fb5bffffffffffffffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff6f555ffffffffffffffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffb55bbb55bfffffffffffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff555555555556fffffffffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffb55555555555b6666fffffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66
    fffffff55b5886685b55f666666ffffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ff
    fffffff5b858886858b5fffff6666ffffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffff
    fffffff5885888665885fffffff6666ffff5885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffff
    fffffff5885888865885ffffffffff6666f5885888885885fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffff
    fffffff5885888885885ffffffffbfff6665885888885885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffff
    fffffff5885888885685ffffffffbfffff656b5b888b5b85ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffff
    fffffff5885888885685ffffffffbfffffb5655588855585bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffff
    fffffff5885888885665ffffffffbfffffbb86b68888b8bbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffff
    fffffff5885888885865ffffffff5ffffb555555555555555bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffff
    fffffff5885888885885ffffffff5ffff555bbb5555bbb5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffff
    fffffff58858888858856fffffff5ffffbfbbbbb555bbbbffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffffff
    fffffff58858888858856fffffff5ffffffff555b5b555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffff
    fffffff588588888588566ffffff5ffffffffff55b5566fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffff
    fffffff58b5b888b5b8566ffffff5ffffffffffffbfff666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffff
    ffffffb5855588855585b6ffffff5ffffffffffff5ffff666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffff
    ffffffbb88b88888b8bbb66ffffb5bfffffffffff5fffff666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffff
    fffffb555555555555555b6ffff555fffffffffff5ffffff666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffff
    fffff555bbb5555bbb555566fffbbbfffffffffff5fffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffffff
    fffffbfbbbbb555bbbbffb66fffb5bfffffffffff5ffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffff
    fffffffff555b5b555fffff6fff555fffffffffff5fffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffff
    fffffffffff55b55fffffff6b55bbb55bffffffff5ffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffff
    bbbbbbbbfffffbfffffffff55555555555fffffff5fffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffff
    ffffffbbbbbbb5ffffffffb55555555555bffffff5ffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffff
    fffffffffffff5fbbbbbff55b5888885b55ffffff5ffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffff
    fffffffffffff5fffffbbb5b658888858b5ffffff5fffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffffffffff
    fffffffffffff5ffffffff58b5bbb885885ffffff5ffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffbbbb
    fffffffffffff5ffffffff588568bbb5b85ffffff5fffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffbbffff
    fffffffffffff5ffffffff5885688885bb5bfffff5fffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffbbffffff
    fffffffffffff5ffffffff5885688885885bbbbff5ffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffbbffffffff
    fffffffffffff5ffffffff5885688885885fffbbb5ffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffbfffffffff
    fffffffffffff5ffffffff5885668885885fffffb5bffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffbbbffffffffff
    fffffffffffff5ffffffff5885668885885ffffff5fbbfffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffbbfffffffffffff
    fffffffffffff5ffffffff5885868885885ffffff5fffbbfffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ffffffffffbbfffffffffffffff
    fffffffffffff5ffffffff5885868885885ffffffbfffffbbffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555b555fffffffffbbffffffffffffffff
    fffffffffffff5ffffffff5885866885885ffffff5fffffffbbffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb55555bfffffffbbffffffffffffffffff
    fffffffffffff5ffffffff5885886885885ffffffbffffffffbbfffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb55555bffffffbffffffffffffffffffff
    fffffffffffff5ffffffff58b5b868b5b85ffffffbffffffffffbfffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb5555555ffffbbfffffffffffffffffffff
    fffffffffffff5fffffffb5855586855585bfffff5fffffffffffbbfffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb55555555bfbbfffffffffffffffffffffff
    fffffffffffff5fffffffbb88b88668b8bbbfffffbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb555555bbffffffffffffffffffffffff
    fffffffffffff5ffffffb555555555555555bffffbfffffffffffffbbffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55688bffffffffffffffffffffffffff
    fffffffffffff5ffffff555bbb5555bbb5555ffffbfffffffffffffffbfffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb58bbfffffffffffffffffffffffffff
    fffffffffffffbffffffbfbbbbb555bbbbffbffff5ffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6bbffffffffffffffffffffffffffff
    fffffffffffff5ffffffffff555b5b555ffffffffbfffffffffffffffffbffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb6ffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffff55b55ffffffffffbffffffffffffffffffbfff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb6fffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffffbf6ffffffffffbfffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb6fffffffffffffffffffffffffffffff
    fffffffffffff5ffffffffffffff5f6ffffffffffbfffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff6fffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5f66fffffffffbffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff6ffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ff6fffffffffbfffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfff6ffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ff6fffffffffbffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffff6ffffffffffffffffffffffffffffffff
    fffffffffffff5ffffffffffffff5ff6fffffffffbffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffff6ffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5fff6ffffffffbfffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffff6ffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5fff6ffffffffbffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffbfffffff6fffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5fff6ffffffffbffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff6fffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ffff6fffffffbfffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ffff6fffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffff6ffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ffff6fffffffbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffbfffffffff6ffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffff6ffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5fffff6ffffffbfffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5fffff6ffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff6ffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ffffff6fffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffbffffffffffffff5ffffff6fffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.onUpdateInterval(777, function () {
    if (badShotOn == 1) {
        badShot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 4 3 . . . . 3 4 2 . . . 
            . . . a 2 4 3 3 . 3 4 2 a . . . 
            . . . a . 4 . . 3 4 2 . a . . . 
            . . . . a 2 4 3 4 2 . a . . . . 
            . . . . . a 2 4 . 2 a . . . . . 
            . . . . . . a 2 4 . a . . . . . 
            . . . . . . a 2 2 a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            `, badMan, randint(-30, 30), randint(30, 100))
        badShot.setKind(SpriteKind.BadProjectile)
        badShot.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
game.setGameOverSound(false, music.bigCrash)
game.setGameOverSound(true, music.beamUp)