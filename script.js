const app = Vue.createApp({
	data() {
		return {
			data: 0,
		};
	},
});

const appInstance = app.mount("#app");

// Calls and shows 0 from
console.log(appInstance.value);

console.log(appInstance.$data.value);

appInstance.value = 10000;

console.log(appInstance.$data.value);

appInstance.$data.value = 5555;

console.log(appInstance.value);

/* THIS IS SHOWING THAT CALLING 'VALUE' IT WORKS THE SAME AS LONG AS THERE IS NO OTHER VALUES*/
