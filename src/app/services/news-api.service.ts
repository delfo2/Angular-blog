import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeNewsArticle } from '../interfaces/newsArticle';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NewsApiService {
	private apiKey = '7520b00551e14bec38247fedf96d8ad5';
	private newsUrl = 'https://gnews.io/api/v4/search';
	private q = (q: string) => {
		return `"${q}" AND NOT "oul"`;
	};
	private settings = 'lang=pt&sortby=relevance';

	constructor(private http: HttpClient) {}

	public connect(
		query: string,
		results: number
	): Observable<NativeNewsArticle> {
		const url = `${this.newsUrl}?q=${this.q(query)}&${this.settings}&max=${results}&apikey=${this.apiKey}`;
		return this.http.get<NativeNewsArticle>(url);
	}
}
