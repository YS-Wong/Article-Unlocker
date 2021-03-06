
var article = "";

browser.runtime.onMessage.addListener(
	(message, sender, sendResponse) => {
		if (message == "request_title") {
			sendResponse(document.getElementsByClassName("headline u-font-serif")[0].innerText);
		} else if (message == "delete_button") {
			let button = document.getElementById("intium_unlocker");
			if (buttonExists()) button.parentNode.removeChild(button);
		} else if (!buttonExists() && document.getElementsByClassName("paywall").length != 0) {
			article = message;
			let buttons = document.getElementsByClassName("buttons");
			buttons[0].insertAdjacentHTML("afterend", '<button class="buttons" id="intium_unlocker"><a class="btn">免費支持</a></button>');
			document.getElementById("intium_unlocker").addEventListener("click", unlock);
		}
	}
);

function unlock() {
	document.getElementsByClassName("article__body")[0].innerHTML = article;
}

function buttonExists() {
	return document.getElementById("intium_unlocker") != null;
}