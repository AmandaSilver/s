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
mySprite.setPosition(21, 114)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f c f f f f f f . . 
    c f f f c c f f f f f f f 
    c f f f f f f f c f f f f 
    c c f f e e f f f c c c . 
    f c c f f e e f f f f f . 
    f f f b f e e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(160, 0)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
	
})
