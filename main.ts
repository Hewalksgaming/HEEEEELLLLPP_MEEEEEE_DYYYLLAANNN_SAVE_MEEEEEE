namespace SpriteKind {
    export const KOIN = SpriteKind.create()
    export const KOIN2 = SpriteKind.create()
    export const MYRUSTYDAGGERITEMINSHOP = SpriteKind.create()
    export const Pet = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
function KLEARKOIN2 () {
    sprites.destroy(MYKOIN2, effects.confetti, 500)
}
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HAS_RD == 1) {
        if (!(swingingSword)) {
            swingingSword = true
            sword.setImage(assets.image`myImage2`)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
            pause(200)
            sword.setImage(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                `)
            swingingSword = false
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MYRUSTYDAGGERITEMINSHOP, function (sprite, otherSprite) {
    game.showLongText("WOULD YOU LIKE TO TRADE THE BOUNCY BALL FOR ONE COIN?", DialogLayout.Bottom)
    story.showPlayerChoices("YES", "NO!")
    if (story.checkLastAnswer("YES!")) {
        if (1 <= info.score()) {
            coins += -1
            sprites.destroy(MYRUSTYDAGGERITEMINSHOP2, effects.confetti, 100)
            HAS_RD = 1
            game.showLongText("A DOOR OPENS IN THE WALL AND YOU WALK THROUGH", DialogLayout.Bottom)
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
            PETDIALOUGEDOGGYONE()
        }
    } else if (story.checkLastAnswer("NO!")) {
        pause(5000)
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
info.onScore(2, function () {
    if (info.highScore() <= 2) {
        game.showLongText("WELL DONE... YOU FOUND ALL THE COINS! NOW MAYBE WE SHOULD FIND OUT WHAT IS INSIDE THAT HOUSE...", DialogLayout.Bottom)
    } else {
        game.showLongText("   ", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KOIN, function (sprite, otherSprite) {
    KLEARKOIN()
    game.splash("YOU FOUND A COIN!")
    coins += 1
})
function Maze () {
    hero.setPosition(20, 122)
    doggy.setPosition(0, 142)
    game.showLongText("Right... Only one aay to complete this Maze...", DialogLayout.Bottom)
    story.showPlayerChoices("Just keep walking until we find the end?", "Use aMethod To solve The Maze Fast?")
    game.showLongText("Whatever you think adventurer! Lets Go!", DialogLayout.Bottom)
    scaling.scaleByPercent(hero, -32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
}
function PETDIALOUGEDOGGYONE () {
    game.showLongText("Penny: (Woof Woof!)Time for a walk in the maze!", DialogLayout.Bottom)
    story.showPlayerChoices("Hello Penny!", "Are you taking me for a walk!", "Let's go!")
    game.showLongText("Woof Woof!Let's go! ", DialogLayout.Bottom)
    story.showPlayerChoices("Sure Penny... Lets Go To The Maze!", "")
    tiles.setCurrentTilemap(tilemap`level21`)
    Maze()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("WELL DONE... YOU FOUND A COIN CHEST!", DialogLayout.Bottom)
    coins += randint(0, 25)
    tiles.setCurrentTilemap(tilemap`level25`)
    game.showLongText("Penny: Hey Adventurer... The New Update Will Be Coming Out Soon... You Can Download It When It Releases At: www.CoinPetAdventure.co.uk But For Now You Can Replay The Game.", DialogLayout.Bottom)
})
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    let statusbar: StatusBarSprite = null
    statusbar.value += -1
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    MYRUSTYDAGGERITEMINSHOP2 = sprites.create(assets.image`myImage2`, SpriteKind.MYRUSTYDAGGERITEMINSHOP)
    tiles.setCurrentTilemap(tilemap`level0`)
    hero.setPosition(138, 210)
    clearlevel()
    tiles.placeOnTile(MYRUSTYDAGGERITEMINSHOP2, tiles.getTileLocation(5, 5))
    game.showLongText("Hmmm... What's in here?", DialogLayout.Bottom)
})
let doggy: Sprite = null
let MYRUSTYDAGGERITEMINSHOP2: Sprite = null
let swingingSword = false
let HAS_RD = 0
let coins = 0
let MYKOIN2: Sprite = null
let MY_KOIN: Sprite = null
let sword: Sprite = null
let hero: Sprite = null
music.play(music.createSong(hex`0078000408180205001c000f0a006400f4010a0000040000000000000000000000000000000002060300000400010a08000c0001160c001000010a14001800011218001c00010c20002400010624002800011828002c00010634003800010d3c00400002050f44004800010f4c00500002060c50005400010a58005c00010a5c006000010d64006800010668006c00010c6c007000010d70007400011474007800020d0f78007c00010c80008400010a88008c00010a8c00900001119c00a000020a18a400a8000111a800ac0002050ab000b400010dbc00c000010ac000c400021116c800cc00010dd400d8000111dc00e0000106e800ec000111ec00f000010af800fc00020f11fc000001010a04010801010d0c011001020d121001140101111c0120010308111424012801010f28012c0101112c01300101123401380103050a1638013c01010a3c014001011144014801010d4c015001010850015401010d58015c0101055c016001010c60016401011664016801030d11126c017001010c70017401011274017801010d78017c0102081488018c01010d8c019001011490019401010a98019c01010c9c01a0010112a001a401010da401a8010108a801ac010116ac01b001020811b401b801010cb801bc01010dbc01c001010fc001c4010111c801cc0103060c18cc01d0010108d401d80104080a0c11dc01e0010111e001e4010106e401e801010fe801ec01020814ec01f001020514f001f401020d11f801fc0102081108020c0203050a110c021002010610021402010d1c022002010f20022402010828022c0201112c023002010a3402380201113c02400202080d440248020208114c025002010a50025402010f58025c02020d1660026402020c1268026c02010c6c027002020c1274027802011178027c0201067c028002011180028402011288028c02010c90029402010f94029802010d98029c02010f9c02a002010aa402a802010dac02b0020112b402b80202050cb802bc020118bc02c002010dc402c802020616c802cc02010cd002d402010fd402d8020105d802dc02020611dc02e002010fe402e8020111e802ec020106f002f402020814f402f802010ff802fc020112fc020003010606001c00010a006400f4016400000400000000000000000000000000000000024f040000040002272c04000800011e0c0010000319242910001400012214001800012918001c00011d20002400012228002c00011b2c003000012934003800011b38003c0001223c004000021e2a48004c000220274c005000021d2a5000540004191b222558005c00021e295c0060000225296000640001206400680001226c007000021d2770007400012478007c00021d2984008800021d2a8c009000031d222a90009400012594009800021b2498009c00021d1e9c00a0000127a000a400031b2529a400a8000120a800ac000122ac00b000021e25b000b400011bb400b800021e2cb800bc000127bc00c000011ec400c8000120cc00d000021b24d400d800021d27d800dc000124dc00e000021927e000e400021e2ae400e8000125e800ec00011dec00f0000122f000f4000129f400f800031e252afc000001021d2500010401012004010801012708010c01011e0c01100101291001140101251401180101191c01200102242a20012401012424012801011d28012c0101292c013001012030013401012934013801021d2738013c01021e253c014001021b1d44014801031b222748014c01021d244c015001012450015401011d5401580102252a58015c0102191e5c016001012560016401012264016801011d68016c01012a6c01700101227401780102202a7c0180010c191b1d1e2022242527292a2c80018401011b8401880102242a88018c0101248c019001021b2290019401021e2794019801021b2c98019c0101299c01a001021e27a001a401021b29a401a8010125a801ac01021e29ac01b001031b2029b401b801021e27b801bc010125bc01c001021b25c001c40102222ac401c801021d27c801cc01012ccc01d001021e25d001d4010124d401d8010129d801dc01021d22dc01e0010127e001e4010125e401e801021b20e801ec01031b272cec01f0010120f001f4010127f401f801022025f801fc0102222afc010002012400020402031d222904020802012408020c02021e290c021002021924100214020124140218020320292c18021c0201241c02200202272a20022402011d24022802031e242c2c02300202202930023402012434023802012a38023c020220253c02400201294002440201224402480202222a48024c02031b24294c025002012250025402012954025802012058025c02031924295c026002011e64026802012768026c02021d226c027002021b2570027402021d2474027802031e252778027c0201227c028002031922298402880202192288028c0201278c029002031b222790029402012494029802011e98029c02031d1e249c02a002012aa402a802021e29a802ac02022027b002b402031b1e25b402b8020124b802bc02012cbc02c0020122c002c402012ac402c80202222ac802cc02021d22cc02d0020124d002d40203202529d402d8020127d802dc02021b1edc02e0020124e002e4020122e402e80202202aec02f002021d27f002f4020127f402f802031e242af802fc02021e27fc020003021d27`), music.PlaybackMode.LoopingInBackground)
game.splash("Welcome... Come and", "find some coins!")
tiles.setCurrentTilemap(tilemap`level`)
hero = sprites.create(assets.image`myImage0`, SpriteKind.Player)
scene.cameraFollowSprite(hero)
hero.setPosition(5, 210)
hero.setBounceOnWall(true)
controller.moveSprite(hero, 100, 100)
sword = sprites.create(img`
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
info.setLife(3)
let enemy = sprites.create(img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Enemy)
enemy.setPosition(100, 100)
let health = 3
game.onUpdate(function () {
    if (hero.vx < 0) {
        sword.right = hero.left
        sword.y = hero.y
    } else if (hero.vx > 0) {
        sword.left = hero.right
        sword.y = hero.y
    } else if (hero.vy > 0) {
        sword.top = hero.bottom
        sword.x = hero.x
    } else if (hero.vy < 0) {
        sword.bottom = hero.top
        sword.x = hero.x
    }
})
