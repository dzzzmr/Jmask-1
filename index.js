window.onload = function(){
	var btn = document.getElementById('btn');
	var opts = {
		title:"嘎嘎",
		message:"Is watching you",
		// okBtnEvent:
	};
	
	btn.onclick = function(){
		var maskO = new Jmask(opts);
	    maskO.jshow();
	}
}