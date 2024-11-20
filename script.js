Vue.createApp({
	data() {
		return {
			bearObject: {
				breed: "Polar Bear",
				age: 13,
				owner: "Mother Nature",
				vegiterrian: false,
			},
		};
	},
}).mount("#bear-list");
