import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-tittle',
	templateUrl: './tittle.component.html',
	styleUrls: ['./tittle.component.css'],
})
export class TittleComponent implements OnInit {
	titleText = 'Abobora';

	ngOnInit() {
		this.animateTitleText();
	}

	animateTitleText() {
		let originalWord = this.titleText;
		let tempPhrase = '';
		const letters = originalWord.split('');
		let speed = 300;
		letters.forEach((letter, i) => {
			setTimeout(() => {
				this.titleText = tempPhrase;
				tempPhrase = this.titleText += letter;
				this.titleText = tempPhrase + '|';

			}, i * speed);
		});
		setTimeout(() => {
			this.titleText = originalWord;
		}, letters.length * speed);
	}
}
