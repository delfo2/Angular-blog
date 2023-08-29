import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-news-card',
  templateUrl: './hot-news-card.component.html',
  styleUrls: ['./hot-news-card.component.css']
})
export class HotNewsCardComponent implements OnInit{
	imgProps = {
		imgSize : '0%',
		imgPosition : '0%',
		imgTransition : 'all 1500ms'
	}

	toggleImgClass () {
		this.imgProps.imgSize = '100%';
		setInterval(() => {
			this.imgProps.imgTransition = 'all 3000ms ease-in-out'
			const num = parseInt(this.imgProps.imgPosition);
			this.imgProps.imgPosition =
				num == 0
				? '100%'
				: '0%';
		}, 3000)
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.toggleImgClass();
		}, 500);
	}
}
