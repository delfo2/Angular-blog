import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-tittle',
	templateUrl: './tittle.component.html',
	styleUrls: ['./tittle.component.css'],
})
export class TittleComponent implements OnInit {
	@Input()
	public text: string = '';
	@Input()
	public size: number = 2;
	@Input()
	public marginTop = '2rem';
	@Input()
	public marginRight = true;
	public fontSize = `font-size: ${this.size}rem`
	public visibility: boolean = false;
	public titleClass: string = this.marginRight === true ? 'broken__title wrong__position' : 'broken__title';

	public originalWord: undefined | string = undefined;
	private delay: number = 0;
	private multipliyer: number = this.text.length > 15 ? 50 : 100;
	private specialCharacter: string = '|';
	private deleteDelay = this.multipliyer === 50 ? 300 : 100;
	private errorChance = this.multipliyer === 50 ? 2 : 3;

	public getDelay(increase: number = 0): number {
		this.delay += this.multipliyer + increase;
		return this.delay;
	}

	public ngOnInit(): void {
		if(this.text.length > 20) {
			this.deleteDelay, this.multipliyer = 40;
		}
		if(this.size !== 2) {
			this.fontSize = `font-size: ${this.size}rem`;
		}
		this.visibility = this.text !== '';
		this.originalWord = this.text;
		this.animateTitleText();
		setInterval(() => {
			this.originalWordAnimation();
		}, this.getDelay());
	}

	public animateTitleText(): void {
		const letters = this.text.split('');
		this.text = '';

		new Promise<void>((resolve, reject) => {
			for (let i = 0; i < letters.length; i++) {
				const isLastIndex = i === letters.length - 1;

				if (this.randomBoolean() && i > 1) {
					this.delayedLetter(letters[i]).then((letter) =>
						this.addLetter(letter)
					);

					this.delayedLetter(letters[i]).then((letter) =>
						this.addLetter(letter)
					);

					this.delayedRemoveLetter();
				} else {
					this.delayedLetter(letters[i]).then(
						(letter) => (this.text += letter)
					);
				}

				if (isLastIndex) {
					setTimeout(() => {
						resolve();
					}, this.getDelay());
				}
			}
		}).then(() => {
			this.originalWordAnimation();
		});
	}

	private randomBoolean(): boolean {
		return Math.round(Math.random() * 10) < this.errorChance;
	}

	private addLetter(letter: string): void {
		this.text += letter;
	}

	private clearSpecialCharacter() {
		this.text = this.text.replaceAll(this.specialCharacter, '');
	}

	private removeLetter(): void {
		this.text = this.text.slice(0, -1) + this.specialCharacter;
	}

	private delayedRemoveLetter(): void {
		setTimeout(() => {
			this.clearSpecialCharacter();
			this.removeLetter();
		}, this.getDelay(this.deleteDelay));
	}

	private delayedLetter(letter: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			setTimeout(() => {
				this.clearSpecialCharacter();
				resolve(letter + this.specialCharacter);
			}, this.getDelay());
		});
	}

	private originalWordAnimation(): void {
		this.titleClass = this.marginRight === true ? 'title right__position' : 'title';
		setTimeout(() => {
			this.putDigitOnEnd();
		}, 400);
	}

	private putDigitOnEnd(): void {
		this.text = this.originalWord + this.specialCharacter;
		setTimeout(() => {
			this.clearSpecialCharacter();
		}, 800);
	}
}
