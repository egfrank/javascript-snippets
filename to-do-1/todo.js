"use strict";


// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName( "LI" );
let i;
for (i = 0; i < myNodeList.length; i++){
	let span = document.createElement( "SPAN" );
	let txt = document.createTextNode( "\u00D7" );
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++){
	close[j].onClick = function () {
		let li = this.parentElement;
		console.log(li);
		li.style.display = "none";
	}
}

let list = document.querySelector("ul");
list.addEventListener("click", 
	function checkOff(ev) {
		if (ev.target.tagName === "LI" ){
			ev.target.classList.toggle( "checked" );
		}
	}, false);


// Create a new list item when clicking on the "Add" button

function newElement() {
	// Takes whatever text is in the input
	let li = document.createElement("LI");
	let inputValue = document.getElementById("myInput").value;
	let textNode = document.createTextNode(inputValue);
	li.appendChild( textNode );
	if ( inputValue != "" ) {
		document.getElementById( "myUL" ).appendChild( li );
	}
	document.getElementById( "myInput" ).value = "";

	// On the right put a close sign
	let span = document.createElement( "SPAN" );
	let txt = document.createTextNode( "\u00D7" );
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	let i;
	for (i = 0; i < close.length; i++){
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}




