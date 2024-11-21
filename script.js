Vue.createApp({
	data() {
		return {
			// This will place whatever information 'inputText' recieves into <p id="fnInpTxt"></p>
			inputText: "",
			textAreaContent: "",
			selected: "Search",
			options: [
				{
					text: "From a search engine",
					value: "Search",
				},
				{
					text: "From a friend",
					value: "Friend",
				},
				{
					text: "From an add",
					value: "Add",
				},
				{
					text: "From Social Media",
					value: "Social Media",
				},
				{
					text: "Through dumb luck",
					value: "luck",
				},
			],
		};
	},
}).mount("#form");
