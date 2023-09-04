import { Component, OnInit } from '@angular/core';
import { disableIfDeviceIsMobile } from 'src/app/decorators/disableIfDeviceIsDesktop';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	public headerSize = '30vw';
	public titleWidth = '100%';
	public titleSize = 2;

	ngOnInit(): void {
		this.setTitleWidth();
		this.setTitleSize();
		this.setHeaderSize();

		setTimeout(() => {
			this.headerSizeMove();
		}, 2000);
		setTimeout(() => {
			this.titleMove();
		}, 4000);
	}

	@disableIfDeviceIsMobile()
	public setTitleSize(): void {
		this.titleSize = 3;
	}

	@disableIfDeviceIsMobile()
	public setHeaderSize(): void {
		this.headerSize = '10vw';
	}

	public headerSizeMove(): void {
		this.headerSize =
			this.headerSize === '30vw' || this.headerSize === '10vw'
				? 'calc(100vw - 2rem)'
				: '30vw';
	}

	@disableIfDeviceIsMobile()
	public setTitleWidth(): void {
		this.titleWidth = '40vw';
	}
	@disableIfDeviceIsMobile()
	public titleMove(): void {
		this.titleWidth =
			this.titleWidth === '40vw' ? 'calc(100vw - 2rem)' : '40vw';
	}
}
