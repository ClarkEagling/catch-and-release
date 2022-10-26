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
    badMan.destroy(effects.warmRadial, 2000)
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
music.spooky.loop()
game.onUpdate(function () {
	
})
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
