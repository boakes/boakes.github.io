
var open = document.getElementsByClassName("window");

for(i=0; i<open.length; ++i){
	
	document.getElementById(open[i].id).onclick = function(){
		var tmp = this.id;
		var closed = document.getElementById(this.id+"-closed");
		
		this.id = closed.id;
		closed.id = tmp;
	}

}