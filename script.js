const List = {
	data() {
		return {
			listItems: [
				{ item: "Study Vue Course" },
				{ item: "Learn React Native" },
				{ item: "Study Angular" },
			],
		};
	},
};

Vue.createApp(List).mount("#list");
