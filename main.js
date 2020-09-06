new Vue({
	el: '#app',
	data: {
		title: "Wood's panels for floor",
		image: 'img/R3242_Dab.jpg',
		description: "Wood's panel",
		models: ['31', '32', '33', '34'],
		details: ['water resistant', '100% natural materials', 'no toxic', "may be used for kids room"],
		variants: [
		{
			id: 'R3242',
			color: '#a18972',
			vImage: 'img/R3242_Dab.jpg',

		},

		{
			id: 'R3226',
			color: '#a0784d',
			vImage: 'img/R3226_Dab.jpg',
		},

		{
			id: 'R2014',
			color: '#74461e',
			vImage: 'img/R2014.jpg',
		},
		{
			id: 'R4262',
			color: '#c8975a',
			vImage: 'img/R4262_Dab.jpg',
		},

		]
	},
	methods: {
		updateProduct(vImage){
			this.image = vImage
		}
	}
})