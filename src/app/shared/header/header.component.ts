import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { disableIfDeviceIsDesktop } from 'src/app/decorators/disableIfDeviceIsDesktop';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css', 'header.responsive.component.css'],
})
export class HeaderComponent {
	constructor(private router: Router) {}

	public searchForm = new FormGroup({
		search: new FormControl('', [
			Validators.minLength(3),
			Validators.required,
			Validators.pattern('[A-Za-zÀ-ÿ ]*'),
		]),
	});
	public canShowInputSearch = false;
	public canShowButtons = true;
	public canShowNavigation = false;

	public onSubmit(): void {
		const q = this.searchForm.value.search;
		if (q === '') {
			this.toggleInputVisibility();
			return;
		}
		if(!this.searchForm.invalid){
			this.router.navigate(['/resultado'], {
				queryParams: {query: q}
			});
			this.searchForm.patchValue({
				search: ''
			});
		}
	}

	public toggleInputVisibility(): void {
		if (this.searchForm.value.search === '') {
			this.canShowInputSearch = !this.canShowInputSearch;
			this.canShowButtons = !this.canShowButtons;
		}
	}
	@disableIfDeviceIsDesktop()
	public toggleButtonsVisibility(): void {
		this.canShowButtons = !this.canShowButtons;
	}
	@disableIfDeviceIsDesktop()
	public toggleNavigationVisibility(): void {
		this.canShowNavigation = !this.canShowNavigation;
	}
}
