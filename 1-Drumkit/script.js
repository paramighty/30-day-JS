document.addEventListener("keydown", playButtonKeys);

function playButtonKeys(event) {
	let key = event.key.toUpperCase();

	let button = document.querySelector(`.animate-button[data-key="${key}"]`);
	button.animate(
		{
			transform: ["scale(1)", "scale(1.1)"],
			border: ["2px solid #ff7f50", "2px solid #ff7f50"],
			boxShadow: ["0px 0px 0px 0px #ffc0cb", "0 0 3px 4px #ff7f50"],
		},
		{ duration: 100, easing: "ease-in-out" }
	);

	switch (key) {
		case "A":
			new Audio("clap.mp3").play();
			break;

		case "S":
			new Audio("hihat.mp3").play();
			break;

		case "D":
			new Audio("kick.mp3").play();
			break;

		case "F":
			new Audio("openhat.mp3").play();
			break;

		case "S":
			new Audio("boom.mp3").play();
			break;

		case "H":
			new Audio("ride.mp3").play();
			break;

		case "J":
			new Audio("snare.mp3").play();
			break;

		case "K":
			new Audio("tom.mp3").play();
			break;

		case "L":
			new Audio("tink.mp3").play();
			break;

		default:
			null;
	}
}
