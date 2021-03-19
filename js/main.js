//###################################################### 
// DYNAMICS - Vue.js

var app = new Vue(
	{
		el: '#root',
		data: {
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
			autoPlayIntervalTime: 4000,
			prevBtnOverFlag: false,
			nextBtnOverFlag: false,
		},
		methods: {
			/** SLIDER BUTTONS **/
			prevBtn: function() {
				this.counter -= 1;
				if(this.counter < 0) this.counter = this.images.length-1;
				console.log(`counter = ${this.counter}`);
			},
			nextBtn: function() {
				this.counter += 1;
				if(this.counter > this.images.length-1) this.counter = 0;
				console.log(`counter = ${this.counter}`);
			},
			/** ARROW KEY BUTTONS **/
			arowBtn: function() {
				// keyup
				// if      (_ev.keyCode == 37) {  }
				// else if (_ev.keyCode == 39) {  }
			},
			/** NAV BUTTONS **/
			navBtn: function() {
				console.log('navBtn clicked');
			},
			/** VISUAL EFFECTS **/
			prevBtnOver : function() { this.prevBtnOverFlag = true;  this.nextBtnOverFlag = false },
			nextBtnOver : function() { this.prevBtnOverFlag = false; this.nextBtnOverFlag = true  },
			btnLeave    : function() { this.prevBtnOverFlag = false; this.nextBtnOverFlag = false },
			/** OTHER METHODS **/
			rndInt: function() {
				return Math.floor(Math.random()*(this.images.length));
			}
		},
		created: function() {
			console.log('---- Vue() created ----');
			console.log(this);
			this.counter = this.rndInt();
			console.log(`counter = ${this.counter} (random start)`);
			setInterval(() => { this.nextBtn(); }, this.autoPlayIntervalTime);
		}
	}
);

// Vue.config.devtools = true;
// console.log(app);

//###################################################### 
// DYNAMICS - jQuery

$(function() {
// ********************* doc ready start ***


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS

