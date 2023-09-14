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
	public imgProps = {
		size: '0%',
		position: '0%',
		transition: 'all 1500ms',
		scale: '1.0',
		changeSize: () => {
			this.imgProps.size = '100%';
		},
		changeScale: () => {
			if (!this.isMobile())
				this.imgProps.scale =
					this.imgProps.scale === '1.0' ? '1.2' : '1.0';
		},
		changePosition: () => {
			this.imgProps.position =
				parseInt(this.imgProps.position) == 0 ? '100%' : '0%';
		},
		resize: () => {
			setTimeout(() => {
				this.imgProps.changeSize();
			}, 500);
		},
		changeTransition: () => {
			setTimeout(() => {
				this.imgProps.transition = 'all 3000ms ease-in-out';
				this.imgProps.changePosition();
				this.imgProps.changeScale();
			}, 1000);
		},
		startAnimation: () => {
			this.imgProps.changeScale();
			this.imgProps.changePosition();
			setInterval(() => {
				this.imgProps.changePosition();
				this.imgProps.changeScale();
			}, 3000);
		},
	};

	@Input()
	public newsTitle: string = '';
	@Input()
	public description: string | null = '';
	@Input()
	public imgUrl: string | null = '';
	@Input()
	public sourceName: string | null = '';
	@Input()
	public newsUrl: string = '';

	public imgAnimation() {
		this.imgProps.resize();
		this.imgProps.changeTransition();
		setTimeout(() => {
			this.imgProps.startAnimation();
		}, 4000);
	}

	public ngOnInit(): void {
		this.imgAnimation();
	}
	private isMobile = (): boolean => window.innerWidth < 1000;
}
