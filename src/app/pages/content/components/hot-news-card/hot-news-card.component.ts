import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-hot-news-card',
	templateUrl: './hot-news-card.component.html',
	styleUrls: [
		'./hot-news-card.component.css',
		'./hot-news-card.responsive.component.css',
	],
})
export class HotNewsCardComponent implements OnInit {
	imgProps = {
		size: '0%',
		position: '0%',
		transition: 'all 1500ms',
		changeSize: () => {
			this.imgProps.size = '100%';
		},
		changePosition: () => {
			this.imgProps.position =
				parseInt(this.imgProps.position) == 0 ? '100%' : '0%';
		},
		resize: ()=>{
			setTimeout(() => {
				this.imgProps.changeSize();
			}, 500);
		},
		changeTransition: () => {
			setTimeout(() => {
				this.imgProps.transition = 'all 3000ms ease-in-out';
				this.imgProps.changePosition();
			}, 1000);
		},
		startPositionSwitchAnimation: () => {
			this.imgProps.changePosition();
			setInterval(() => {
				this.imgProps.changePosition();
			}, 3000);
		}
	};

	@Input()
	newsTitle : string = '';
	@Input()
	description : string = '';
	@Input()
	imgUrl : string = '';
	@Input()
	sourceName : string = '';
	@Input()
	newsUrl : string = '';

	imgAnimation() {
		this.imgProps.resize();
		this.imgProps.changeTransition();
		setTimeout(() => {
			this.imgProps.startPositionSwitchAnimation();
		}, 4000);
	}

	ngOnInit(): void {
		this.imgAnimation()
	}
}
