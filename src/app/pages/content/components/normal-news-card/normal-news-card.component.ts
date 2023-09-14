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
	public newsTitle : string = '';
	@Input()
	public description : string | null= '';
	@Input()
	public imgUrl : string | null= '';
	@Input()
	public sourceName : string = '';
	@Input()
	public newsUrl : string = '';
	public showDefaultImg = false;

	public loadDefaultImg(): void {
		this.showDefaultImg = true;
	}
}
