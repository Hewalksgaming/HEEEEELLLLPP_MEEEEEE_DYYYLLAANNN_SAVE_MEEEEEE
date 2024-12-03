namespace SpriteKind {
    export const KOIN = SpriteKind.create()
    export const KOIN2 = SpriteKind.create()
    export const MYRUSTYDAGGERITEMINSHOP = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    500,
    true
    )
    info.setScore(coins)
})
function KLEARKOIN2 () {
    sprites.destroy(MYKOIN2, effects.confetti, 500)
}
function FL1 () {
    game.showLongText("*YOU FEEL THE GROUND SHAKING BENEATH YOU* OH NO! WHATS THAT? THE FLOOR IS SHAKING!", DialogLayout.Bottom)
    game.splash("THE FLOOR OPENED UP BENEATH ", "YOU AND YOU FALL INTO A HOLE...")
    tiles.setCurrentTilemap(tilemap`level8`)
    AN_ENEMY = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    AN_ENEMY.follow(mySprite, 45)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.KOIN2, function (sprite, otherSprite) {
    KLEARKOIN2()
    game.splash("YOU FOUND A COIN!")
    coins += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KOIN, function (sprite, otherSprite) {
    KLEARKOIN()
    game.splash("YOU FOUND A COIN!")
    coins += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim1`,
    500,
    true
    )
    info.setScore(coins)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MYRUSTYDAGGERITEMINSHOP, function (sprite, otherSprite) {
    game.showLongText("WOULD YOU LIKE TO BUY THE RUSTY DAGGER FOR ONE COIN?", DialogLayout.Bottom)
    story.showPlayerChoices("YES! (-1 COIN)", "NO!")
    if (story.checkLastAnswer("YES! (-1 COIN)")) {
        if (1 <= info.score()) {
            coins += -1
            sprites.destroy(MYRUSTYDAGGERITEMINSHOP2, effects.confetti, 100)
            HAS_RD = 1
            FL1()
        }
    } else if (story.checkLastAnswer("NO!")) {
        pause(5000)
    }
})
info.onScore(2, function () {
    game.showLongText("WELL DONE... YOU FOUND ALL MY COINS! NOW MAYBE WE SHOULD FIND OUT WHAT IS INSIDE THAT HOUSE...", DialogLayout.Bottom)
})
function KLEARKOIN () {
    sprites.destroy(MY_KOIN, effects.confetti, 500)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    500,
    true
    )
    info.setScore(coins)
})
function clearlevel () {
    sprites.destroy(MY_KOIN)
    sprites.destroy(MYKOIN2)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    500,
    true
    )
    info.setScore(coins)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GGS!  YOU DIED... BETTER LUCJK NEXT TIME!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    MYRUSTYDAGGERITEMINSHOP2 = sprites.create(assets.image`myImage4`, SpriteKind.MYRUSTYDAGGERITEMINSHOP)
    tiles.setCurrentTilemap(tilemap`level0`)
    mySprite.setPosition(138, 210)
    clearlevel()
    tiles.placeOnTile(MYRUSTYDAGGERITEMINSHOP2, tiles.getTileLocation(5, 5))
    game.showLongText("HMMM... WHATS IN THIS BASEMENT?", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let HAS_RD = 0
let MYRUSTYDAGGERITEMINSHOP2: Sprite = null
let AN_ENEMY: Sprite = null
let coins = 0
let MYKOIN2: Sprite = null
let MY_KOIN: Sprite = null
let mySprite: Sprite = null
game.splash("welcome to ... try to find", "some coins!")
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite.setPosition(5, 210)
MY_KOIN = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.KOIN)
MYKOIN2 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.KOIN2)
MYKOIN2.setPosition(230, 173)
tiles.setCurrentTilemap(tilemap`level`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
mySprite.setBounceOnWall(true)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
500,
true
)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
info.setLife(3)
// Changed to myProjectile
let myProjectile = sprites.create(img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Projectile)
let enemy = sprites.create(img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Enemy)
enemy.setPosition(100, 100)
let health = 3
