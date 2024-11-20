const interpolateApp = {
	data() {
		return { html: "<span style = 'color: blue'>Text in blue</span>" };
	},
};

Vue.createApp(interpolateApp).mount("#app");
