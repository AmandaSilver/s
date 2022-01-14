tiles.setTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . f f f f 9 b 9 f f f f . . . 
    . f f f f f 9 b 9 f f f f f . . 
    . f f . f f 9 b 9 f f . f f . . 
    . f f . f f 9 b 9 f f . f f . . 
    . d d . f f 9 9 9 f f . d d . . 
    . d d . f f f f f f f . d d . . 
    . . . . f f f . f f f . . . . . 
    . . . . f f f . f f f . . . . . 
    . . . . f f f . f f f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(21, 120)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
