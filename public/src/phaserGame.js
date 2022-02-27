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
    good_tile = this.add.image(0, 0, 'tile').setScale(2);
    bad_tiles.add(good_tile);

    var grid_x = (this.game.config.width / 2) - 200;
    var tile_size = 64;

    bad_tiles.getChildren().forEach(function(tile){
        tile.x = Math.round(Math.random() * 7) * tile_size + grid_x - 15;
        tile.y = Math.round(Math.random() * 7) * tile_size + 100 - 10;
        tile.setInteractive();
    }, this);

    Phaser.Actions.GridAlign(bg_tiles.getChildren(), { width: 8, cellWidth: tile_size, cellHeight: tile_size, x: grid_x, y: 100 });

    textBox = this.add.image(350, 450, 'text_box').setScale(5);
    welcome_msg = this.add.text(150, 430, "Today has been an alright day. I'm fine.");
    ok_button = this.add.image(500, 470, 'button').setScale(.15).setInteractive();
    ok_text = this.add.text(480, 460, "Okay").setColor("black");
    d_text = this.add.text(0, 0, "Default text").setActive(false).setVisible(false)
    d_text.setShadow(1, 2, "#000000", 2, true, true);

    ok_button.once('pointerdown', function(){
        ok_button.setActive(false).setVisible(false);
        welcome_msg.setActive(false).setVisible(false);
        textBox.setActive(false).setVisible(false);
        ok_text.setActive(false).setVisible(false);
    });

    discouraging = ["I don't want to think about it.", "No.", "Let's do something else...", "Ugh."];
    bad_tiles.getChildren().forEach(function(tile){
        tile.on("pointerover", function(){
            d_text.x = game.input.mousePointer.x;
            d_text.y = game.input.mousePointer.y;
            d_text.setActive(true).setVisible(true);
            d_text.alpha = 0;
            d_text.setText(discouraging[Math.round(Math.random() * 4)]);
            this.tweens.add({
                targets: d_text,
                alpha: 1,  
                duration: 500,
                ease: 'Sine.easeOut'
            });
        }, this);
        tile.on("pointerout", function(){
            this.tweens.add({
                targets: d_text,
                alpha: 0,  
                duration: 500,
                ease: 'Sine.easeOut'
            });
            d_text.alpha = 0;
            d_text.setVisible(false);
        }, this);
    }, this);

    good_tile.on("pointerdown", function(){
        console.log("clicked tile.");
        var url = "huh.html";
        var s = window.location.replace(url);
        if (s && s.focus)
        {
            s.focus();
        }
        else if (!s)
        {
            window.location.href = url;
        }
    })
}