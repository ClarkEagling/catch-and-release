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
        sprite.destroy(effects.fire, 100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 662, 257, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("catch", 300, function () {
        catchReady = 0
    })
    timer.debounce("action", 300, function () {
        catchReady = 1
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
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    badMan.destroy(effects.fire, 2000)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.InBackground)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.randomizeSound(music.createSoundEffect(WaveShape.Triangle, 608, 454, 255, 0, 688, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), SoundExpressionPlayMode.UntilDone)
})
function MakeHero () {
    mySprite = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c c c c c c c f . 
        . f f c c c c c c c c f f . 
        . f f f c c c c c c f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . . e f f f f f f f f e . . 
        . e 4 f f f f f f f f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . c c c c c c . . . . 
        . . . . c c . . c c . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(80, 99)
    controller.moveSprite(mySprite)
    mySprite.setStayInScreen(true)
    info.setLife(10)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    badmanStatusbar.value += -1
    sprite.destroy()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 865, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
let badShot: Sprite = null
let badmanStatusbar: StatusBarSprite = null
let badMan: Sprite = null
let catchReady = 0
let mySprite: Sprite = null
let goodShot: Sprite = null
effects.starField.startScreenEffect()
MakeHero()
MakeBadman()
game.onUpdateInterval(777, function () {
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
})
