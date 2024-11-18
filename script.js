const Timer = {
	data() {
		return {
			timer: 0,
		};
	},
	/* The `mounted()` lifecycle hook in Vue.js is called after the Vue instance has been mounted to the
  DOM. In this code snippet, the `mounted()` method is setting up a timer using `setInterval()`. */
	mounted() {
		setInterval(() => {
			this.timer++;
		}, 1000);
	},
};

Vue.createApp(Timer).mount("#timer");

const ReactiveBehavior = {
	data() {
		return {
			onHoverText: "Reactive message!",
		};
	},
};

Vue.createApp(ReactiveBehavior).mount("#to-hover-element");
