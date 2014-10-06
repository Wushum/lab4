var lose=false;
var b;
window.onload = function(){
	var boundaries = $$("#maze .boundary");
	var end = $("end");
	var start = $("start");
	for (b=0; b<boundaries.length; b++){
		boundaries[b].onmouseover = youLose;
	}	
	end.onmouseover = checkIfYouWin;
	start.onmouseover = resetMaze;
	noCheating();
};

function youLose(){
	lose= true;
	var status = $("status");
	status.textContent="You Lose!";
	var boundaries = $$("#maze .boundary");
	for (b=0; b<boundaries.length; b++){
		boundaries[b].addClassName('youlose');
	}		
}

function checkIfYouWin(){
	if(!lose){
		var status = $("status");
		status.textContent="You Win!";
	}
}

function resetMaze(){
	lose = false;
	var status = $("status");
	status.textContent='Move your mouse over the "S" to begin.';
	var boundaries = $$("#maze .boundary");
	for (b=0; b<boundaries.length; b++){
		boundaries[b].removeClassName('youlose');
	}	
}

function noCheating(){
	$("maze").onmouseleave = youLose;
}