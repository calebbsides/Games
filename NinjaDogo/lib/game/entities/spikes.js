ig.module(
	'game.entities.spikes'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySpikes = ig.Entity.extend({
	size: {x: 16, y: 16},
	
    _wmScalable: true,
	_wmDrawBox: true,
    _wmBoxColor: 'rgba(196, 255, 0, 0.7)',
    
	target: null,
    gravityFactor: 0,
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.ALWAYS,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
	},
	
	check: function( other ) {
        if(other instanceof EntityPlayer) 
            other.kill();
	}
});

});