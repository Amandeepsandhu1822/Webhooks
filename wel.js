function Callb(){
	console.log("Hi I am without callback function")
}

function Wel(name){
	
	console.log(`Hello ${name}!`);
	Callb();
}

Wel('shivi');