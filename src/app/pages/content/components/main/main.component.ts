import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
	public news = [
		{
			newsTitle: 'Free Speech Runs Up Against Courtroom Decorum...',
			description: `Judges face uncharted territory in deciding whether a
				presidential candidate’s remarks flout rules protecting a fair
				and orderly trial`,
			imgUrl: 'https://images.wsj.net/im-842640/social',
			sourceName: 'The Wall Street Journal',
			newsUrl:
				'http://www.wsj.com/us-news/trumps-free-speech-runs-up-against-courtroom-decorum-4a9dd0c4',
		},
	];

	ngOnInit(): void {
		for (let index = 0; index < 5; index++) {
			this.news.push(this.news[0]);
		}
	}

}
