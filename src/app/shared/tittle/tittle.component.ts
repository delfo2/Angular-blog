import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-tittle',
	templateUrl: './tittle.component.html',
	styleUrls: ['./tittle.component.css'],
})
export class TittleComponent implements OnInit {
	titleClass: string = 'broken__title wrong__position';
	titleText: string = 'Last News';
	originalWord: string = this.titleText;
	titleSize: number = this.titleText.length;
	tempPhrase: string = '';
	delay = 0;
	multipliyer = 50;

	ngOnInit(): void {
		this.animateTitleText();
		setInterval(() => {
			this.originalWordAnimation();
		}, this.titleSize * this.multipliyer + 1000);

	}

	animateTitleText(): void {
		const letters = this.titleText.split('');

		letters.forEach((letter) => {
			if (Math.round(Math.random()) % 2 == 0) {
				this.addNewLetter(letter);
			} else {
				this.removeLetter(letter);
			}
		});
	}

	removeLetter(letter: string) {
		this.delay += this.multipliyer;
		setTimeout(() => {
			let text = this.titleText.split('').pop();
			this.titleText = text != undefined ? text : this.titleText;
			this.addNewLetter(letter);
		}, this.delay);
	}
	addNewLetter(letter: string): void {
		this.delay += this.multipliyer;
		const delayInCreactionTime = this.delay;
		setTimeout(() => {
			if (this.delay === delayInCreactionTime) {
				this.originalWordAnimation();
			}
			if (this.delay > this.titleSize * 100) {
				this.titleClass = 'broken__title right__position';
			}
			this.titleText = this.tempPhrase;
			this.tempPhrase = this.titleText += letter;
			this.titleText = this.tempPhrase + '▌';
		}, this.delay);
	}

	originalWordAnimation() {
		this.titleClass = 'title right__position';
		setTimeout(() => {
			this.putDigitOnEnd();
		}, 400);
	}

	putDigitOnEnd(): void {
		this.titleText = this.originalWord + '▌';
		setTimeout(() => {
			this.titleText = this.originalWord;
		}, 800);
	}
}
