
var open = document.getElementsByClassName("window");

for(i=0; i<open.length; ++i){

	document.getElementById(open[i].id).onclick = function(){
		var tmp = this.id;
		var closed = document.getElementById(tmp+"-closed");
		
		this.id = closed.id;
		closed.id = tmp;
	}

	document.getElementById(open[i].id+"-closed").onclick = function(){
		var tmp = this.id;
		var closed = document.getElementById(tmp+"-closed");
		/*
		this.id = closed.id;
		closed.id = tmp;
		*/
		//TESTING NOW 
		closed.id = tmp;
	}
}