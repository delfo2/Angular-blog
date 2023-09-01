import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
	@Input()
	public query = '';
	private originalNews: NewsArticle[] = [];
	public firstNews: NewsArticle | undefined;
	public anotherNews: NewsArticle[] = [];

	constructor(private newsApiService: NewsApiService) {}

	public ngOnInit(): void {
		this.newsApiService.connect(this.query, 7).subscribe((data) => {
			this.originalNews = data.articles;

			this.initializeNews();
		});
	}

	private initializeNews() {
		this.originalNews.forEach((news, i) => {
			let tempNews: NewsArticle = news;
			tempNews.description = this.removeExcessiveLetters(tempNews.description, 180);
			tempNews.title = this.removeExcessiveLetters(tempNews.title, 50);

			i === 0 ? (this.firstNews = tempNews) : this.anotherNews.push(tempNews);
		});
	}

	private removeExcessiveLetters(phrase: string | null, maxLength : number): string {
		if(phrase) {
			if(phrase.length > maxLength ) {
				phrase = phrase.slice(0, maxLength - 3);
				phrase += '...';
			}
			return phrase;
		}
		return 'Pré-vizualização não disponível'
	}
}
