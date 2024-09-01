function Callb(){
	console.log("Hi I am without callback function")
}

function Wel(name){
	
	setTimeout(() => console.log(`Hello ${name}`),1000);
	Callb();
}

Wel('shivi');