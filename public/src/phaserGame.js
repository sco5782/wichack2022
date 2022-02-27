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
    this.load.image('bgtile', '../assets/blank_tile.png');
    this.load.image('tile', '../assets/tile.png');
    this.load.image('text_box', '../assets/text_box.png');
    this.load.image('button', '../assets/boxForText.png');
}

function create ()
{
    bg_tiles = this.add.group({key: 'bgtile', repeat: 63, setScale: {x: 2, y:2 }});
    bad_tiles = this.add.group({key: 'tile', repeat: 2, setScale: {x:2, y:2}});
    var grid_x = (this.game.config.width / 2) - 200;
    var tile_size = 64;

    bad_tiles.getChildren().forEach(function(tile){
        tile.x = Math.round(Math.random() * 7) * tile_size + grid_x - 10;
        tile.y = Math.round(Math.random() * 7) * tile_size + 100 - 10;

    }, this);

    Phaser.Actions.GridAlign(bg_tiles.getChildren(), { width: 8, cellWidth: tile_size, cellHeight: tile_size, x: grid_x, y: 100 });

    textBox = this.add.image(350, 450, 'text_box').setScale(5);
    welcome_msg = this.add.text(150, 430, "Today has been an alright day. I'm fine.");
    ok_button = this.add.image(500, 470, 'button').setScale(.15).setInteractive();
    ok_text = this.add.text(480, 460, "Okay").setColor("black");

    ok_button.once('pointerdown', function(){
        ok_button.setActive(false).setVisible(false);
        welcome_msg.setActive(false).setVisible(false);
        textBox.setActive(false).setVisible(false);
        ok_text.setActive(false).setVisible(false);
    });

}