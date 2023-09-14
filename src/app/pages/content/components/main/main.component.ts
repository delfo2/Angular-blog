import {
	Component,
	Input,
	OnInit,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnChanges {
	@Input()
	public query = '';
	private originalNews: NewsArticle[] = [];
	public firstNews: NewsArticle | undefined;
	public anotherNews: NewsArticle[] = [];

	public firstLoadAlreadyHappens: boolean = false;
	public haveNews: boolean = false;
	public loadFailed: boolean = false;
	public showLoad: boolean = true;

	constructor(private newsApiService: NewsApiService) {}

	public ngOnChanges(changes: SimpleChanges): void {
		if (this.firstLoadAlreadyHappens) {
			this.originalNews.splice(0, this.originalNews.length);
			this.anotherNews.splice(0, this.anotherNews.length);
			this.firstNews = undefined;

			this.searchNews();
		}
	}

	public ngOnInit(): void {
		this.searchNews();
		this.firstLoadAlreadyHappens = true;
	}

	public searchNews(): void {
		this.showLoad = true;
		this.haveNews = false;
		this.loadFailed = false;

		this.newsApiService.connect(this.query, 10).subscribe((data) => {
			this.originalNews = data.articles;

			this.initializeNews();

			this.haveNews = this.originalNews.length > 0;
			this.loadFailed = !(this.originalNews.length > 0);
			this.showLoad = false;
		});
	}

	private initializeNews() {
		this.originalNews.forEach((news, i) => {
			let tempNews: NewsArticle = news;
			tempNews.description = this.removeExcessiveLetters(
				tempNews.description,
				180
			);
			tempNews.title = this.removeExcessiveLetters(tempNews.title, 50);

			i === 0
				? (this.firstNews = tempNews)
				: this.anotherNews.push(tempNews);
		});
	}

	private removeExcessiveLetters(
		phrase: string | null,
		maxLength: number
	): string {
		if (phrase) {
			if (phrase.length > maxLength) {
				phrase = phrase.slice(0, maxLength - 3);
				phrase += '...';
			}
			return phrase;
		}
		return 'Pré-vizualização não disponível';
	}
}
