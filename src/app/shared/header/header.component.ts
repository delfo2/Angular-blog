import { Component } from '@angular/core';
import { disableIfDeviceIsDesktop } from 'src/app/decorators/disableIfDeviceIsDesktop';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css', 'header.responsive.component.css'],
})
export class HeaderComponent {
	canShowInputSearch = false;
	canShowButtons = true;
	canShowNavigation = false;

	toggleInputVisibility() {
		this.canShowInputSearch = !this.canShowInputSearch;
		this.canShowButtons = !this.canShowButtons;
	};
	@disableIfDeviceIsDesktop()
	toggleButtonsVisibility() {
		this.canShowButtons = !this.canShowButtons;
	};
	@disableIfDeviceIsDesktop()
	toggleNavigationVisibility() {
		this.canShowNavigation = !this.canShowNavigation;
	};
}
