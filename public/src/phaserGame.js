var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    autoCenter: true,
    parent: 'myGame',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bgtile', '../assets/blank_tile.png')
    this.load.image('tile', '../assets/tile.png');
    
}

function create ()
{
    bg_tiles = this.add.group({key: 'bgtile', repeat: 63, setScale: {x: 2, y:2 }});
    var grid_x = (this.game.config.width / 2) - 200;
    Phaser.Actions.GridAlign(bg_tiles.getChildren(), { width: 8, cellWidth: 64, cellHeight: 64, x: grid_x, y: 100 });

    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);
}