//###################################################### 
// DYNAMICS - Vue.js

var app = new Vue(
	{
		el: '#root',
		data: {
			// * sliding images * //
			counter: 0,
			pathToImages: 'img/',
			images: [
				'wallpaperbetter.com_1024x768 (1).jpg',
				'wallpaperbetter.com_1024x768 (2).jpg',
				'wallpaperbetter.com_1024x768 (3).jpg',
				'wallpaperbetter.com_1024x768 (4).jpg',
				'wallpaperbetter.com_1024x768 (5).jpg',
				'wallpaperbetter.com_1024x768 (6).jpg',
				'wallpaperbetter.com_1024x768 (7).jpg',
				'wallpaperbetter.com_1024x768 (8).jpg',
				'wallpaperbetter.com_1024x768 (9).jpg',
				'wallpaperbetter.com_1024x768 (10).jpg',
			],
			// * buttons * //
			prevBtnOverFlag: false,
			nextBtnOverFlag: false,
			// * autoplay * //
			autoPlayIntervalTime: 3000,
			autoplayOn: false,
			autoPlayBtnText : 'Start autoplay',
		},
		methods: {
			// * SLIDER BUTTONS * //
			prevBtn: function() {
				this.counter -= 1;
				if (this.counter < 0) this.counter = this.images.length-1;
				console.log(`prevBtn pressed > counter = ${this.counter}`);
			},
			nextBtn: function() {
				this.counter += 1;
				if (this.counter > this.images.length-1) this.counter = 0;
				console.log(`nextBtn pressed > counter = ${this.counter}`);
			},
			// * ARROW KEY BUTTONS * //
			arowBtn: function() {
				// keyup
				// if      (_ev.keyCode == 37) {  }
				// else if (_ev.keyCode == 39) {  }
			},
			// * NAV BUTTONS * //
			navBtn: function(ev) {
				this.counter = parseInt(ev.target.id);				
				console.log(`nav dot #${ev.target.id} clicked > counter = ${this.counter}`);
			},
			// * AUTOPLAY BUTTON * //
			autoPlayBtn: function() {
				if (!this.autoplayOn) {
					this.autoplayOn = setInterval(() => { this.nextBtn(); }, this.autoPlayIntervalTime);
					this.autoPlayBtnText = 'Stop autoplay';
					console.log('autoplay on');
				}
				else {
					clearInterval(this.autoplayOn);
					this.autoplayOn = false;
					this.autoPlayBtnText = 'Start autoplay';
					console.log('autoplay off');
				}
			},
			// * VISUAL EFFECTS * //
			prevBtnOver : function() { this.prevBtnOverFlag = true;  this.nextBtnOverFlag = false },
			nextBtnOver : function() { this.prevBtnOverFlag = false; this.nextBtnOverFlag = true  },
			btnLeave    : function() { this.prevBtnOverFlag = false; this.nextBtnOverFlag = false },
			// * OTHER STUFF * //
			rndInt: function() {
				return Math.floor(Math.random()*(this.images.length));
			}
		},
		created: function() {
			console.log('---- Vue() created ----');
			console.log(this);
			this.counter = this.rndInt();
			console.log(`counter = ${this.counter} (random start)`);
		}
	}
);

// Vue.config.devtools = true;
// console.log(app);

//###################################################### 
// DYNAMICS - jQuery

// $(function() {
// // ********************* doc ready start ***


// // *********************** doc ready end ***
// });

//###################################################### 
// FUNCTIONS

