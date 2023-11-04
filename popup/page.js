document.addEventListener("click", (event) => {
	if (!event.target.classList.contains("page-choice")) {
		return;
	}

	const chosenPage = `https://${event.target.textContent}`;
	browser.tabs.create({
		url: chosenPage,
	});
});
