console.log("Extension is working");


window.addEventListener('mouseup',wordSelected);

function wordSelected() {
	let selectedText = window.getSelection().toString().trim();
	console.log(selectedText);
	if(selectedText.length>0){
		let msg = {
			txt: selectedText
		};
		chrome.runtime.sendMessage(msg);
	}
}