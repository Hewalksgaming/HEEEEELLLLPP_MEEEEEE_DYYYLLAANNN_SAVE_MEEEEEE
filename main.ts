namespace SpriteKind {
    export const KOIN = SpriteKind.create()
    export const KOIN2 = SpriteKind.create()
    export const BouncyBoll = SpriteKind.create()
    export const Pet = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
function KLEARKOIN2 () {
    sprites.destroy(MYKOIN2, effects.confetti, 500)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite2, location) {
    game.showLongText("WELL DONE... YOU FOUND A COIN CHEST!", DialogLayout.Bottom)
    coins += randint(0, 25)
    tiles.setCurrentTilemap(tilemap`level25`)
    pause(2000)
    game.showLongText("Penny: Hey Adventurer... The New Update Will Be Coming Out Soon... You Can Download It When It Releases At: CoinPetAdventure.co.uk But For Now You Can Replay The Game.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite5, location2) {
    BouncyBoll2 = sprites.create(assets.image`myImage2`, SpriteKind.BouncyBoll)
    tiles.setCurrentTilemap(tilemap`level0`)
    hero.setPosition(138, 210)
    clearlevel()
    tiles.placeOnTile(BouncyBoll2, tiles.getTileLocation(5, 5))
    game.showLongText("Hmmm... What's in here?", DialogLayout.Bottom)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`snakyboi`)
    animation.stopAnimation(animation.AnimationTypes.All, hero)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim3`,
    500,
    true
    )
    info.setScore(coins)
})
function ForestLvL01 () {
    tiles.setCurrentTilemap(tilemap`level34`)
    Beevah = sprites.create(assets.image`Beevah`, SpriteKind.NPC)
    Beevah.setPosition(54, 58)
    hero.setPosition(0, 0)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    hero.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KOIN2, function (sprite, otherSprite) {
    KLEARKOIN2()
    game.splash("YOU FOUND A COIN!")
    coins += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BouncyBoll, function (sprite3, otherSprite2) {
    game.showLongText("WOULD YOU LIKE TO TRADE THE BOUNCY BALL FOR ONE COIN?", DialogLayout.Bottom)
    story.showPlayerChoices("YES!", "NO!", "What's that?")
    if (true) {
        if (story.checkLastAnswer("YES!")) {
            if (1 <= info.score()) {
                coins += -1
                sprites.destroy(BouncyBoll2, effects.confetti, 100)
                game.showLongText("A DOOR OPENS IN THE WALL AND YOU WALK THROUGH...", DialogLayout.Bottom)
                PETDIALOUGEDOGGYONE()
            } else if (coins == 0) {
                game.showLongText("YOU DON'T HAVE ENOUGH COINS TO BUY THIS ITEM! TRY LOOKING AROUND THE HOUSE...", DialogLayout.Bottom)
                pause(1000)
            }
        } else if (story.checkLastAnswer("NO!")) {
            pause(1000)
        }
    } else if (story.checkLastAnswer("What's that?")) {
        game.showLongText("The bouncy ball bounces between dimensions, teleporting you to a completely different world! Why not give it a try? What other us", DialogLayout.Bottom)
    }
})
function KLEARKOIN () {
    sprites.destroy(MY_KOIN, effects.confetti, 500)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`snakyboi`)
    animation.stopAnimation(animation.AnimationTypes.All, hero)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim`,
    500,
    true
    )
    info.setScore(coins)
})
function clearlevel () {
    sprites.destroy(MY_KOIN)
    sprites.destroy(MYKOIN2)
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    hero.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim`,
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    hero.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KOIN, function (sprite4, otherSprite3) {
    KLEARKOIN()
    game.splash("YOU FOUND A COIN!")
    coins += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`myImage`)
    animation.stopAnimation(animation.AnimationTypes.All, hero)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim2`,
    500,
    true
    )
    info.setScore(coins)
})
function Maze () {
    hero.setPosition(20, 122)
    doggy.setPosition(0, 142)
    game.showLongText("Right... Only one way to complete this Maze...", DialogLayout.Bottom)
    story.showPlayerChoices("Just keep walking until we find the end?", "Use a Method To solve The Maze Fast?")
    game.showLongText("Whatever you think adventurer! Lets Go!", DialogLayout.Bottom)
    scaling.scaleByPercent(hero, -35, ScaleDirection.Uniformly, ScaleAnchor.Middle)
}
function PETDIALOUGEDOGGYONE () {
    tiles.setCurrentTilemap(tilemap`level8`)
    doggy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.Pet)
    doggy.follow(hero, 60)
    game.showLongText("Penny: (Woof Woof!)Time for a walk in the maze!", DialogLayout.Bottom)
    story.showPlayerChoices("Hello Penny!", "Are you taking me for a walk!", "Let's go!")
    game.showLongText("Woof Woof!Let's go! ", DialogLayout.Bottom)
    story.showPlayerChoices("Sure Penny... Lets Go To The Maze!", "")
    tiles.setCurrentTilemap(tilemap`level21`)
    Maze()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(assets.image`myImage`)
    animation.stopAnimation(animation.AnimationTypes.All, hero)
    animation.runImageAnimation(
    hero,
    assets.animation`myAnim1`,
    500,
    true
    )
    info.setScore(coins)
})
info.onScore(2, function () {
    if (info.highScore() == 2) {
        game.showLongText("WELL DONE... YOU FOUND ALL THE COINS! NOW MAYBE WE SHOULD FIND OUT WHAT IS INSIDE THAT HOUSE...", DialogLayout.Bottom)
    } else {
        pause(100)
    }
})
let doggy: Sprite = null
let Beevah: Sprite = null
let BouncyBoll2: Sprite = null
let coins = 0
let MYKOIN2: Sprite = null
let MY_KOIN: Sprite = null
let hero: Sprite = null
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
game.splash("Welcome... Come and", "find some coins!")
tiles.setCurrentTilemap(tilemap`level`)
hero = sprites.create(assets.image`myImage0`, SpriteKind.Player)
scene.cameraFollowSprite(hero)
hero.setPosition(5, 210)
hero.setBounceOnWall(true)
controller.moveSprite(hero, 100, 100)
let sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
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
animation.runImageAnimation(
hero,
assets.animation`myAnim`,
500,
true
)
