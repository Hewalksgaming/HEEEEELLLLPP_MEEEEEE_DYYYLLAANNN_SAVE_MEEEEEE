@namespace
class SpriteKind:
    KOIN = SpriteKind.create()
    KOIN2 = SpriteKind.create()
    BouncyBoll = SpriteKind.create()
    Pet = SpriteKind.create()
    NPC = SpriteKind.create()
def KLEARKOIN2():
    sprites.destroy(MYKOIN2, effects.confetti, 500)

def on_overlap_tile(sprite5, location2):
    global BouncyBoll2
    BouncyBoll2 = sprites.create(assets.image("""
        myImage2
    """), SpriteKind.BouncyBoll)
    tiles.set_current_tilemap(tilemap("""
        level0
    """))
    hero.set_position(138, 210)
    clearlevel()
    tiles.place_on_tile(BouncyBoll2, tiles.get_tile_location(5, 5))
    game.show_long_text("Hmmm... What's in here?", DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile)

def on_on_overlap(sprite3, otherSprite2):
    global coins
    game.show_long_text("WOULD YOU LIKE TO TRADE THE BOUNCY BALL FOR ONE COIN?",
        DialogLayout.BOTTOM)
    story.show_player_choices("YES!", "NO!", "What's that?")
    if True:
        if story.check_last_answer("YES!"):
            if 1 <= info.score():
                coins += -1
                sprites.destroy(BouncyBoll2, effects.confetti, 100)
                game.show_long_text("A DOOR OPENS IN THE WALL AND YOU WALK THROUGH...",
                    DialogLayout.BOTTOM)
                PETDIALOUGEDOGGYONE()
            elif coins == 0:
                game.show_long_text("YOU DON'T HAVE ENOUGH COINS TO BUY THIS ITEM! TRY LOOKING AROUND THE HOUSE...",
                    DialogLayout.BOTTOM)
                pause(1000)
        elif story.check_last_answer("NO!"):
            pause(1000)
    elif story.check_last_answer("What's that?"):
        game.show_long_text("The bouncy ball bounces between dimensions, teleporting you to a completely different world! Why not give it a try? What other us",
            DialogLayout.BOTTOM)
sprites.on_overlap(SpriteKind.player, SpriteKind.BouncyBoll, on_on_overlap)

def on_overlap_tile2(sprite2, location):
    global coins
    game.show_long_text("WELL DONE... YOU FOUND A COIN CHEST!", DialogLayout.BOTTOM)
    coins += randint(0, 25)
    tiles.set_current_tilemap(tilemap("""
        level25
    """))
    pause(2000)
    ForestLvL01()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile2)

def on_up_pressed():
    hero.set_image(assets.image("""
        snakyboi
    """))
    animation.stop_animation(animation.AnimationTypes.ALL, hero)
    animation.run_image_animation(hero, assets.animation("""
        myAnim3
    """), 500, True)
    info.set_score(coins)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def ForestLvL01():
    global Beevah
    tiles.set_current_tilemap(tilemap("""
        level34
    """))
    Beevah = sprites.create(assets.image("""
        Beevah
    """), SpriteKind.NPC)
    Beevah.set_position(54, 58)
    hero.set_position(0, 0)

def on_up_released():
    hero.set_image(assets.image("""
        myImage0
    """))
    animation.run_image_animation(hero, assets.animation("""
        myAnim
    """), 500, True)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_on_overlap2(sprite, otherSprite):
    global coins
    KLEARKOIN2()
    game.splash("YOU FOUND A COIN!")
    coins += 1
sprites.on_overlap(SpriteKind.player, SpriteKind.KOIN2, on_on_overlap2)

def KLEARKOIN():
    sprites.destroy(MY_KOIN, effects.confetti, 500)

def on_down_pressed():
    hero.set_image(assets.image("""
        snakyboi
    """))
    animation.stop_animation(animation.AnimationTypes.ALL, hero)
    animation.run_image_animation(hero, assets.animation("""
        myAnim
    """), 500, True)
    info.set_score(coins)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def clearlevel():
    sprites.destroy(MY_KOIN)
    sprites.destroy(MYKOIN2)

def on_left_released():
    hero.set_image(assets.image("""
        myImage0
    """))
    animation.run_image_animation(hero, assets.animation("""
        myAnim
    """), 500, True)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_released():
    hero.set_image(assets.image("""
        myImage0
    """))
    animation.run_image_animation(hero, assets.animation("""
        myAnim
    """), 500, True)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_on_overlap3(sprite4, otherSprite3):
    global coins
    KLEARKOIN()
    game.splash("YOU FOUND A COIN!")
    coins += 1
sprites.on_overlap(SpriteKind.player, SpriteKind.KOIN, on_on_overlap3)

def on_right_pressed():
    hero.set_image(assets.image("""
        myImage
    """))
    animation.stop_animation(animation.AnimationTypes.ALL, hero)
    animation.run_image_animation(hero, assets.animation("""
        myAnim2
    """), 500, True)
    info.set_score(coins)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def Maze():
    hero.set_position(20, 122)
    doggy.set_position(0, 142)
    game.show_long_text("Right... Only one way to complete this Maze...",
        DialogLayout.BOTTOM)
    story.show_player_choices("Just keep walking until we find the end?",
        "Use a Method To solve The Maze Fast?")
    game.show_long_text("Whatever you think adventurer! Lets Go!",
        DialogLayout.BOTTOM)
    scaling.scale_by_percent(hero, -35, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
def PETDIALOUGEDOGGYONE():
    global doggy
    tiles.set_current_tilemap(tilemap("""
        level8
    """))
    doggy = sprites.create(img("""
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
        """),
        SpriteKind.Pet)
    doggy.follow(hero, 60)
    game.show_long_text("Penny: (Woof Woof!)Time for a walk in the maze!",
        DialogLayout.BOTTOM)
    story.show_player_choices("Hello Penny!", "Are you taking me for a walk!", "Let's go!")
    game.show_long_text("Woof Woof!Let's go! ", DialogLayout.BOTTOM)
    story.show_player_choices("Sure Penny... Lets Go To The Maze!", "")
    tiles.set_current_tilemap(tilemap("""
        level21
    """))
    Maze()

def on_left_pressed():
    hero.set_image(assets.image("""
        myImage
    """))
    animation.stop_animation(animation.AnimationTypes.ALL, hero)
    animation.run_image_animation(hero, assets.animation("""
        myAnim1
    """), 500, True)
    info.set_score(coins)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_score():
    if info.high_score() == 2:
        game.show_long_text("WELL DONE... YOU FOUND ALL THE COINS! NOW MAYBE WE SHOULD FIND OUT WHAT IS INSIDE THAT HOUSE...",
            DialogLayout.BOTTOM)
    else:
        pause(100)
info.on_score(2, on_on_score)

doggy: Sprite = None
Beevah: Sprite = None
coins = 0
BouncyBoll2: Sprite = None
MYKOIN2: Sprite = None
MY_KOIN: Sprite = None
hero: Sprite = None
music.play(music.create_song(hex("""
        00780004080200
    """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
game.splash("Welcome... Come and", "find some coins!")
tiles.set_current_tilemap(tilemap("""
    level
"""))
hero = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
scene.camera_follow_sprite(hero)
hero.set_position(5, 210)
hero.set_bounce_on_wall(True)
controller.move_sprite(hero, 100, 100)
sword = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
MY_KOIN = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.KOIN)
MYKOIN2 = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.KOIN2)
MYKOIN2.set_position(230, 173)
animation.run_image_animation(hero, assets.animation("""
    myAnim
"""), 500, True)