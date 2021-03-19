//###################################################### 
// DYNAMICS - Vue.js

var app = new Vue(
	{
		el: '#root',
		data: {
			// * SLIDING IMAGES * //
			imgCounter: 0,
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
			// * AUTOPLAY * //
			autoPlayIntervalTime: 3000,
			autoPlayIntervalIsOn: false,
			autoPlayBtnText     : 'Start autoplay',
			autoPlayBtnClassIsOn: null,
			// * VISUAL EFFECTS: PREV/NEXT BUTTON OVER * //
			prevBtnOverFlag: false,
			nextBtnOverFlag: false
		},
		methods: {
			// * SLIDER BUTTONS * //
			prevBtn: function() {
				this.imgCounter -= 1;
				if (this.imgCounter < 0) this.imgCounter = this.images.length-1;
				// console.log(`prevBtn activated > imgCounter = ${this.imgCounter}`);
			},
			nextBtn: function() {
				this.imgCounter += 1;
				if (this.imgCounter > this.images.length-1) this.imgCounter = 0;
				// console.log(`nextBtn activated > imgCounter = ${this.imgCounter}`);
			},
			// * ARROW KEY BUTTONS * //
			arrowBtn: function(ev) {
				if      (ev.keyCode == 37) { this.prevBtn(); }
				else if (ev.keyCode == 39) { this.nextBtn(); }
			},
			// * NAV BUTTONS * //
			// navBtn: function(ev) {
			// 	this.imgCounter = parseInt(ev.target.id);			
			// 	console.log(`nav dot #${ev.target.id} clicked > imgCounter = ${this.imgCounter}`);
			// },
			// * AUTOPLAY: TOGGLE BUTTON * //
			autoPlayBtn: function() {
				if (!this.autoPlayIntervalIsOn) {
					this.autoPlayIntervalIsOn = setInterval(() => { this.nextBtn(); }, this.autoPlayIntervalTime);
					this.autoPlayBtnText      = 'Stop autoplay';
					this.autoPlayBtnClassIsOn = 'is_on';
					// console.log('autoplay on');
				}
				else {
					clearInterval(this.autoPlayIntervalIsOn);
					this.autoPlayIntervalIsOn = false;
					this.autoPlayBtnText      = 'Start autoplay';
					this.autoPlayBtnClassIsOn = null;
					// console.log('autoplay off');
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
		// * VUE READY * //
		created: function() {
			// Vue infos
			console.log('---- Vue() created ----');
			console.log(this);
			// random default image
			this.imgCounter = this.rndInt();
			console.log(`imgCounter = ${this.imgCounter} (random start)`);
			// arrow key listening
			window.addEventListener('keydown', this.arrowBtn);
		}
	}
);
// Vue.config.devtools = true;
// console.log(app);
