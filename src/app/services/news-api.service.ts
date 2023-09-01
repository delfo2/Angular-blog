import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeNewsArticle } from '../interfaces/newsArticle';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NewsApiService {
	private apiKey = 'f5696b25f1244aa0a1ce5f0b5a7ad2da';
	private newsUrl = 'https://newsapi.org/v2/everything';
	private language = 'language=pt';

	constructor(private http: HttpClient) {}

	public connect(
		query: string,
		results: number
	): Observable<NativeNewsArticle> {
		const url =
			`${this.newsUrl}?q=${query}&${this.language}&pageSize=${results}&apiKey=${this.apiKey}`;
		return this.http.get<NativeNewsArticle>(url);
	}
}
