import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-normal-news-card',
	templateUrl: './normal-news-card.component.html',
	styleUrls: [
		'./normal-news-card.component.css',
		'normal-news-card.responsive.component.css',
	],
})
export class NormalNewsCardComponent {
	@Input()
	newsTitle : string = '';
	@Input()
	description : string | null= '';
	@Input()
	imgUrl : string | null= '';
	@Input()
	sourceName : string = '';
	@Input()
	newsUrl : string = '';
}
