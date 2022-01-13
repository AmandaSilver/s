// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`320008000909020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202090902020202020202020202020202020202020202020202020202020202020213020202020202020202021302020202021305061212121212121212121414121212121212121212141412121214121212121414121212121212121212120c0c0c0c0c0c12121212121212141212121414121212121212141212141412121212121412121414121212121212121212120c0e0404040c1012121212121212121212141412121412121212121214141214121212121212141412121212120a0a0a0a0a0c040404040c0312121212121214141212121212121212141412121212121212121214141212121212141212120b010101010c040404040c0312121212121214141212121214121212141412121412121212121214141212121212121212120a010101010c040404040c0311111111111114141111111111111111141411111111111111111114141111111411111111110a01010f080d040407040d`, img`
..222222222222222222222222222222222222222222222222
..222222222222222222222222222222222222222222222222
22.........22.........22...2....22.........2....22
.......2...22......2..22.....2..22.........2.22..2
2..........22..2......22.2......22.....22222..2..2
2......22........22.........22.....2...2....2.2..2
2......22....2...22..2......22................2..2
2......22........22.........22...2........222.2..2
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.swamp.swampTile4,sprites.swamp.swampTile5,sprites.dungeon.chestClosed,sprites.builtin.coral4,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorLockedNorth,sprites.builtin.crowd6,sprites.castle.saplingPine,sprites.castle.tilePath8,sprites.castle.tilePath5,myTiles.tile6,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
