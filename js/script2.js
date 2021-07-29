new Glide(".images",{
	type: 'carousel',
	perView: 3,
	gap: 40,
	autoplay: 2500,
	breakpoints: {
		1200:{
			perView: 3
		},
		750:{
			perView: 2
		},
		440:{
			focusAt: 0,
			perView: 1,
		}
	}
}).mount();