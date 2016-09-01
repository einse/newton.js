paper = Raphael($('.paper')[0], 900, 452);
$(paper.canvas).parent().width(900);
var a = {
	stroke: "none",
	fill: "gray"
};
var aT = {
	stroke: "none",
	fill: "green"
}; 
world = paper.world();
var floor = paper.rect(0, 450, 900, 2).attr(a),
	wallLeft = paper.rect(0, 0, 2, 450).attr(a),
	wallRight = paper.rect(898, 0, 2, 450).attr(a),
	ceiling = paper.rect(0, 0, 900, 2).attr(a),
	ball = paper.circle(270, 50, 50).attr(a),
	box1 = paper.rect(200, 250, 10, 100).attr(a),
	box2 = paper.rect(200, 350, 10, 100).attr(a),
	dot1 = paper.circle(180, 190, 10).attr(a);
var dot2 = paper.circle(320, 300, 10).attr(a).click(function(e) {
	world.getById(this.id).impulse(-45, 10);
});
world.addStatic(floor);
world.addStatic(wallLeft);
world.addStatic(wallRight);
world.addStatic(ceiling);
world.add(ball);
world.add(box1);
world.add(box2);
world.add(dot1);
world.addStatic(dot2);
world.run();
eve.on("mixow.game.collision", function(entityA, entityB, impulse) {
	if (impulse > 50) {
		entityA.getShape().attr({fill: "green"}).stop().animate({fill: "gray"}, 300);
		entityB.getShape().attr({fill: "green"}).stop().animate({fill: "gray"}, 300);
	}
});

