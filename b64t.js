function openPage() {
	browser.tabs.create({
		url: "https://www.base64decode.org",
	});
}

browser.browserAction.onClicked.addListener(openPage);
