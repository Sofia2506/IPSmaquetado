new Glide(".images",{
	type: 'carousel',
	perView: 5,
	gap: 30,
	autoplay: 2500,
	breakpoints: {
		1200:{
			perView: 3
		},
		400:{
			perView: 1,
		}
	}
}).mount();