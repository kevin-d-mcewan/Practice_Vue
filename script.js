Vue.createApp({
	data() {
		return {
			items: [
				{ baseballTeam: "Red Sox" },
				{ baseballTeam: "Marlins" },
				{ baseballTeam: "Padres" },
			],
		};
	},
}).mount("#to-loop-array");
