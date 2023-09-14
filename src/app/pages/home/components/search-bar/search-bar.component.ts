import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
	constructor(private router: Router) {}

	public groupMain = new FormGroup({
		searchInput: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.pattern('[A-Za-zÀ-ÿ ]*')
		]),
	});

	public onSubmit(): void {
		let search = this.groupMain.value.searchInput;
		this.groupMain.patchValue({
			searchInput: '',
		});
		this.router.navigate(['/resultado'], {
			queryParams: { query: search },
		});
	}

	get searchInput() {
		return this.groupMain.get('searchInput');
	}
}
