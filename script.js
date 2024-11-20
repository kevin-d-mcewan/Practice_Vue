Vue.createApp({
	data() {
		return {
			dogObject: {
				breed: "Great Pyrnees",
				ageInYears: 5,
				owner: "Kevin M",
			},
		};
	},
}).mount("#dog-list");
